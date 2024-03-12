import { ref as d, openBlock as r, createElementBlock as s, normalizeClass as a, renderSlot as i, createVNode as p, Transition as f, withCtx as v, createCommentVNode as m } from "vue";
const _ = {
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
    const e = d(!1);
    return {
      isShowTooltip: e,
      afterEnter: (n) => {
        n.classList.add(`vue-tooltip__hover-${t.position}`);
      },
      hideTooltip: () => {
        e.value = !1;
      }
    };
  }
}, y = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [l, n] of e)
    o[l] = n;
  return o;
};
function T(t, e, o, l, n, h) {
  return r(), s("div", {
    onMouseenter: e[0] || (e[0] = (u) => l.isShowTooltip = !0),
    onMouseleave: e[1] || (e[1] = (u) => l.isShowTooltip = !1),
    class: a(["vue-tooltip", { disable: o.disable }])
  }, [
    i(t.$slots, "text", {}, void 0, !0),
    p(f, {
      name: o.position,
      onAfterEnter: l.afterEnter
    }, {
      default: v(() => [
        !o.disable && l.isShowTooltip ? (r(), s("div", {
          key: 0,
          class: a(["vue-tooltip--component", [{ "vue-tooltip__pointer-event": !o.clickable }, `vue-tooltip__${o.position}`]])
        }, [
          i(t.$slots, "tooltip", {}, void 0, !0)
        ], 2)) : m("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter"])
  ], 34);
}
const S = /* @__PURE__ */ y(_, [["render", T], ["__scopeId", "data-v-f73c658e"]]), k = {
  mounted: (t, e) => {
    c(t, e);
  },
  updated: (t, e) => {
    c(t, e);
  }
}, c = (t, e) => {
  const o = "vue-tooltip";
  t.classList.add(o), !(e.value === null || e.value === void 0) && (t.dataset.tooltip = e.value, t.classList.toggle(`${o}__${C(e.modifiers)}`, !0), t.classList.toggle(`${o}__${e.arg || "bottom"}`, !0));
}, C = (t) => t.primary ? "primary" : t.secondary ? "secondary" : t.accent ? "accent" : "primary", E = (t) => {
  t.component("tooltip", S), t.directive("tooltip", k);
}, $ = {
  install: E
};
export {
  S as TooltipComponent,
  k as TooltipDirective,
  $ as default,
  E as install
};
