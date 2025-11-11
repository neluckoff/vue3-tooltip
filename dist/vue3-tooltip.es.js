import { ref as d, onMounted as k, onUnmounted as O, nextTick as I, createElementBlock as L, openBlock as y, normalizeClass as P, renderSlot as E, createVNode as x, Transition as W, withCtx as $, createCommentVNode as q, createElementVNode as D } from "vue";
const T = (t, o, i, e = 10) => {
  const n = window.innerWidth, a = window.innerHeight;
  switch (i) {
    case "top":
      return t.top - o.height - e >= 0;
    case "bottom":
      return t.bottom + o.height + e <= a;
    case "left":
      return t.left - o.width - e >= 0;
    case "right":
      return t.right + o.width + e <= n;
    default:
      return !0;
  }
}, b = (t, o, i, e = 10) => {
  if (T(t, o, i, e))
    return { position: i, shouldFlip: !1 };
  const a = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
  }[i];
  if (T(t, o, a, e))
    return { position: a, shouldFlip: !0 };
  const s = ["top", "bottom", "left", "right"];
  for (const c of s)
    if (c !== i && c !== a && T(t, o, c, e))
      return { position: c, shouldFlip: !0 };
  return { position: i, shouldFlip: !1 };
}, M = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || // @ts-ignore - for older browsers
(navigator.msMaxTouchPoints || 0) > 0, g = (t) => {
  const o = t.getBoundingClientRect();
  return {
    top: o.top,
    left: o.left,
    right: o.right,
    bottom: o.bottom,
    width: o.width,
    height: o.height
  };
}, R = (t) => {
  const o = window.innerWidth, i = window.innerHeight;
  return {
    top: t.top < 0,
    bottom: t.bottom > i,
    left: t.left < 0,
    right: t.right > o
  };
}, N = {
  name: "TooltipComponent",
  props: {
    disable: {
      type: Boolean,
      required: !1,
      default: !1
    },
    position: {
      type: String,
      required: !1,
      default: "bottom"
    },
    clickable: {
      type: Boolean,
      required: !1,
      default: !1
    },
    autoPosition: {
      type: Boolean,
      required: !1,
      default: !1
    },
    adaptiveTouch: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(t) {
    const o = d(!1), i = d(!1), e = d(t.position), n = d(!1), a = d(null), s = d(null);
    k(() => {
      t.adaptiveTouch && (n.value = M());
    });
    const c = async () => {
      if (!t.autoPosition || !a.value || (await I(), !s.value || !o.value))
        return;
      const u = g(a.value), h = g(s.value), H = b(
        u,
        h,
        t.position
      );
      e.value = H.position;
    }, r = async (u) => {
      t.autoPosition && await c(), u.classList.add(`vue-tooltip__hover-${e.value}`);
    }, v = () => {
      t.disable || (o.value = !0);
    }, m = () => {
      if (!t.disable) {
        if (!t.clickable) {
          o.value = !1;
          return;
        }
        setTimeout(() => {
          if (i.value) {
            o.value = !0;
            return;
          }
          o.value = !1;
        }, 300);
      }
    }, f = (u) => {
      t.adaptiveTouch && n.value ? (u.preventDefault(), o.value = !o.value) : v();
    }, F = () => {
      t.adaptiveTouch && n.value && (o.value = !o.value);
    }, _ = (u) => {
      if (!n.value || !o.value)
        return;
      const h = u.target;
      a.value && !a.value.contains(h) && s.value && !s.value.contains(h) && (o.value = !1);
    };
    return k(() => {
      t.adaptiveTouch && document.addEventListener("click", _);
    }), O(() => {
      t.adaptiveTouch && document.removeEventListener("click", _);
    }), {
      isShowTooltip: o,
      onTooltipHover: i,
      actualPosition: e,
      isTouch: n,
      triggerRef: a,
      tooltipRef: s,
      afterEnter: r,
      onTriggerInteract: f,
      onTriggerClick: F,
      hideTooltip: m
    };
  }
}, V = (t, o) => {
  const i = t.__vccOpts || t;
  for (const [e, n] of o)
    i[e] = n;
  return i;
}, A = { class: "vue-tooltip__body" };
function U(t, o, i, e, n, a) {
  return y(), L("div", {
    ref: "triggerRef",
    onMouseenter: o[2] || (o[2] = (...s) => e.onTriggerInteract && e.onTriggerInteract(...s)),
    onMouseleave: o[3] || (o[3] = (...s) => e.hideTooltip && e.hideTooltip(...s)),
    onClick: o[4] || (o[4] = (...s) => e.onTriggerClick && e.onTriggerClick(...s)),
    class: P(["vue-tooltip", {
      disable: i.disable,
      "vue-tooltip__selected": e.isShowTooltip,
      "vue-tooltip__touch": i.adaptiveTouch && e.isTouch
    }])
  }, [
    E(t.$slots, "text", {}, void 0, !0),
    x(W, {
      name: e.actualPosition,
      onAfterEnter: e.afterEnter
    }, {
      default: $(() => [
        !i.disable && e.isShowTooltip ? (y(), L("div", {
          key: 0,
          ref: "tooltipRef",
          class: P(["vue-tooltip--component", [
            { "vue-tooltip__pointer-event": !i.clickable && !(i.adaptiveTouch && e.isTouch) },
            `vue-tooltip__${e.actualPosition}`
          ]]),
          onMouseenter: o[0] || (o[0] = (s) => e.onTooltipHover = !0),
          onMouseleave: o[1] || (o[1] = (s) => e.onTooltipHover = !1)
        }, [
          D("div", A, [
            E(t.$slots, "tooltip", {}, void 0, !0)
          ])
        ], 34)) : q("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter"])
  ], 34);
}
const z = /* @__PURE__ */ V(N, [["render", U], ["__scopeId", "data-v-423db708"]]), l = "vue-tooltip", Y = ["top", "bottom", "left", "right"], B = ["primary", "secondary", "accent"], p = /* @__PURE__ */ new WeakMap(), j = {
  mounted(t, o) {
    const i = w(o), e = {
      isTouch: i.adaptiveTouch ? M() : !1,
      actualPosition: i.position
    };
    p.set(t, e), C(t, o, e), J(t, o, e);
  },
  updated(t, o) {
    const i = p.get(t);
    i && (S(t), C(t, o, i));
  },
  beforeUnmount(t) {
    const o = p.get(t);
    o != null && o.cleanup && o.cleanup(), S(t), p.delete(t);
  }
}, C = (t, o, i) => {
  if (t.classList.add(l), !o.value || o.value.trim() === "")
    return;
  t.dataset.tooltip = o.value;
  const e = w(o);
  t.classList.add(`${l}__${e.style}`), t.classList.add(`${l}__${i.actualPosition}`), e.adaptiveTouch && i.isTouch && t.classList.add(`${l}__touch`);
}, S = (t) => {
  Y.forEach((o) => {
    t.classList.remove(`${l}__${o}`);
  }), B.forEach((o) => {
    t.classList.remove(`${l}__${o}`);
  }), delete t.dataset.tooltip;
}, w = (t) => {
  const o = t.arg || "bottom", i = G(t.modifiers), e = t.modifiers.autoPosition || t.modifiers.auto || !1, n = t.modifiers.touch || t.modifiers.adaptive || !1;
  return { position: o, style: i, autoPosition: e, adaptiveTouch: n };
}, G = (t) => {
  for (const o of B)
    if (t[o])
      return o;
  return "primary";
}, J = (t, o, i) => {
  const e = w(o);
  if (e.autoPosition) {
    const n = () => {
      const s = window.getComputedStyle(t, "::after"), c = parseFloat(s.width) || 200, r = parseFloat(s.height) || 40, v = g(t), m = {
        ...v,
        width: c,
        height: r
      }, f = b(
        v,
        m,
        e.position
      );
      f.shouldFlip && (t.classList.remove(`${l}__${i.actualPosition}`), i.actualPosition = f.position, t.classList.add(`${l}__${i.actualPosition}`));
    };
    t.addEventListener("mouseenter", n);
    const a = i.cleanup || (() => {
    });
    i.cleanup = () => {
      t.removeEventListener("mouseenter", n), a();
    };
  }
  if (e.adaptiveTouch && i.isTouch) {
    let n = !1;
    const a = (r) => {
      r.preventDefault(), r.stopPropagation(), n ? (t.classList.remove(`${l}__show`), n = !1) : (t.classList.add(`${l}__show`), n = !0);
    }, s = (r) => {
      !t.contains(r.target) && n && (t.classList.remove(`${l}__show`), n = !1);
    };
    t.addEventListener("click", a), document.addEventListener("click", s);
    const c = i.cleanup || (() => {
    });
    i.cleanup = () => {
      t.removeEventListener("click", a), document.removeEventListener("click", s), c();
    };
  }
}, K = (t) => {
  t.component("tooltip", z), t.directive("tooltip", j);
}, X = {
  install: K
};
export {
  z as TooltipComponent,
  j as TooltipDirective,
  R as checkOverflow,
  T as checkPosition,
  X as default,
  b as getBestPosition,
  g as getRect,
  K as install,
  M as isTouchDevice
};
