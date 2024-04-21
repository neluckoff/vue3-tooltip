import { ref as a, openBlock as i, createElementBlock as u, normalizeClass as c, renderSlot as v, createVNode as f, Transition as p, withCtx as m, createElementVNode as _, createCommentVNode as T } from "vue";
const y = {
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
    }
  },
  setup(t) {
    const e = a(!1), o = a(!1);
    return {
      isShowTooltip: e,
      onTooltipHover: o,
      afterEnter: (s) => {
        s.classList.add(`vue-tooltip__hover-${t.position}`);
      },
      onMouseLeave: () => {
        if (!t.clickable) {
          e.value = !1;
          return;
        }
        setTimeout(() => {
          if (o.value) {
            e.value = !0;
            return;
          }
          e.value = !1;
        }, 300);
      }
    };
  }
}, L = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [l, r] of e)
    o[l] = r;
  return o;
}, M = { class: "vue-tooltip__body" };
function k(t, e, o, l, r, s) {
  return i(), u("div", {
    onMouseenter: e[2] || (e[2] = (n) => l.isShowTooltip = !0),
    onMouseleave: e[3] || (e[3] = (...n) => l.onMouseLeave && l.onMouseLeave(...n)),
    class: c(["vue-tooltip", { disable: o.disable, "vue-tooltip__selected": l.isShowTooltip }])
  }, [
    v(t.$slots, "text", {}, void 0, !0),
    f(p, {
      name: o.position,
      onAfterEnter: l.afterEnter
    }, {
      default: m(() => [
        !o.disable && l.isShowTooltip ? (i(), u("div", {
          key: 0,
          class: c(["vue-tooltip--component", [
            { "vue-tooltip__pointer-event": !o.clickable },
            `vue-tooltip__${o.position}`
          ]]),
          onMouseenter: e[0] || (e[0] = (n) => l.onTooltipHover = !0),
          onMouseleave: e[1] || (e[1] = (n) => l.onTooltipHover = !1)
        }, [
          _("div", M, [
            v(t.$slots, "tooltip", {}, void 0, !0)
          ])
        ], 34)) : T("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter"])
  ], 34);
}
const E = /* @__PURE__ */ L(y, [["render", k], ["__scopeId", "data-v-7a4cc7f7"]]), S = {
  mounted: (t, e) => {
    d(t, e);
  },
  updated: (t, e) => {
    d(t, e);
  }
}, d = (t, e) => {
  const o = "vue-tooltip";
  t.classList.add(o), !(e.value === null || e.value === void 0) && (t.dataset.tooltip = e.value, t.classList.toggle(`${o}__${b(e.modifiers)}`, !0), t.classList.toggle(`${o}__${e.arg || "bottom"}`, !0));
}, b = (t) => t.primary ? "primary" : t.secondary ? "secondary" : t.accent ? "accent" : "primary", C = (t) => {
  t.component("tooltip", E), t.directive("tooltip", S);
}, g = {
  install: C
};
export {
  E as TooltipComponent,
  S as TooltipDirective,
  g as default,
  C as install
};
