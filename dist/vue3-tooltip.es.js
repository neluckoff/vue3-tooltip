(function(){"use strict";var o;try{if(typeof document<"u"){var t=document.createElement("style");t.nonce=(o=document.head.querySelector("meta[property=csp-nonce]"))==null?void 0:o.content,t.appendChild(document.createTextNode('.vue-tooltip[data-v-5991ce00]:after{content:"";display:none}.vue-tooltip__pointer-event[data-v-5991ce00]{pointer-events:none}.vue-tooltip__hover-left[data-v-5991ce00]{right:var(--tooltip-position-x);left:auto}.left-enter-active[data-v-5991ce00],.left-leave-active[data-v-5991ce00]{transition:var(--tooltip-transition-duration);right:var(--tooltip-position-x)}.left-enter-from[data-v-5991ce00],.left-leave-to[data-v-5991ce00]{opacity:0;right:50%}.vue-tooltip__left[data-v-5991ce00]{top:50%;bottom:50%;transform:translateY(-50%)}.vue-tooltip__hover-right[data-v-5991ce00]{left:var(--tooltip-position-x);right:auto}.right-enter-active[data-v-5991ce00],.right-leave-active[data-v-5991ce00]{transition:var(--tooltip-transition-duration);left:var(--tooltip-position-x)}.right-enter-from[data-v-5991ce00],.right-leave-to[data-v-5991ce00]{opacity:0;left:50%}.vue-tooltip__right[data-v-5991ce00]{top:50%;bottom:50%;transform:translateY(-50%)}.vue-tooltip__hover-bottom[data-v-5991ce00]{top:100%;bottom:auto}.bottom-enter-active[data-v-5991ce00],.bottom-leave-active[data-v-5991ce00]{transition:var(--tooltip-transition-duration);top:100%}.bottom-enter-from[data-v-5991ce00],.bottom-leave-to[data-v-5991ce00]{opacity:0;top:50%}.vue-tooltip__bottom[data-v-5991ce00]{right:50%;left:50%;transform:translate(-50%)}.vue-tooltip__hover-top[data-v-5991ce00]{bottom:100%;top:auto}.top-enter-active[data-v-5991ce00],.top-leave-active[data-v-5991ce00]{transition:var(--tooltip-transition-duration);bottom:100%}.top-enter-from[data-v-5991ce00],.top-leave-to[data-v-5991ce00]{opacity:0;bottom:50%}.vue-tooltip__top[data-v-5991ce00]{right:50%;left:50%;transform:translate(-50%)}.vue-tooltip{position:relative;cursor:pointer;z-index:1}.vue-tooltip__primary:after{background:var(--tooltip-primary-background);color:var(--tooltip-primary-color)}.vue-tooltip__secondary:after{background:var(--tooltip-seconary-background);color:var(--tooltip-seconary-color)}.vue-tooltip__accent:after{background:var(--tooltip-accent-background);color:var(--tooltip-accent-color)}.vue-tooltip:after{content:attr(data-tooltip);font-size:14px;position:absolute;width:max-content;max-width:200px;height:max-content;z-index:10;padding:var(--tooltip-padding);border-radius:var(--tooltip-border-radius);box-shadow:var(--tooltip-box-shadow);pointer-events:none;opacity:0;transition:var(--tooltip-transition-duration)}.vue-tooltip:hover:after{opacity:1}.vue-tooltip__bottom:after{top:50%;bottom:auto;right:50%;left:50%;transform:translate(-50%)}.vue-tooltip__bottom:hover:after{top:calc(100% + 2px)}.vue-tooltip__top:after{top:auto;bottom:50%;right:50%;left:50%;transform:translate(-50%)}.vue-tooltip__top:hover:after{bottom:calc(100% + 2px)}.vue-tooltip__right:after{top:50%;bottom:50%;left:14px;right:auto;transform:translateY(-50%)}.vue-tooltip__right:hover:after{left:var(--tooltip-position-x)}.vue-tooltip__left:after{top:50%;bottom:50%;right:14px;left:auto;transform:translateY(-50%)}.vue-tooltip__left:hover:after{right:var(--tooltip-position-x)}.vue-tooltip-body{z-index:10;background:var(--tooltip-component-background);color:var(--tooltip-component-color);border-radius:var(--tooltip-border-radius);box-shadow:var(--tooltip-box-shadow);padding:var(--tooltip-padding);width:max-content;height:max-content;position:absolute}.vue-tooltip.disable{opacity:.5;cursor:not-allowed}:root{--tooltip-transition-duration: .4s;--tooltip-border-radius: 4px;--tooltip-padding: 2px 4px;--tooltip-position-x: calc(100% + 10px) ;--tooltip-box-shadow: 0px 3.2px 7.2px 0px rgba(0, 0, 0, .14), 0px .6px 1.8px 0px rgba(0, 0, 0, .1), 0px -1.5px 6px 0px rgba(0, 0, 0, .06);--tooltip-primary-color: #212121;--tooltip-primary-background: #fff;--tooltip-seconary-color: #fff;--tooltip-seconary-background: #475DEB;--tooltip-accent-color: #fff;--tooltip-accent-background: #212121;--tooltip-component-color: #212121;--tooltip-component-background: #fff}')),document.head.appendChild(t)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { ref as d, openBlock as s, createElementBlock as a, normalizeClass as i, renderSlot as n, createVNode as p, Transition as f, withCtx as v, createCommentVNode as m } from "vue";
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
      afterEnter: (r) => {
        r.classList.add(`vue-tooltip__hover-${t.position}`);
      },
      hideTooltip: () => {
        e.value = !1;
      }
    };
  }
}, y = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [l, r] of e)
    o[l] = r;
  return o;
};
function T(t, e, o, l, r, b) {
  return s(), a("div", {
    onMouseenter: e[0] || (e[0] = (u) => l.isShowTooltip = !0),
    onMouseleave: e[1] || (e[1] = (u) => l.isShowTooltip = !1),
    class: i(["vue-tooltip", { disable: o.disable }])
  }, [
    n(t.$slots, "text", {}, void 0, !0),
    p(f, {
      name: o.position,
      onAfterEnter: l.afterEnter
    }, {
      default: v(() => [
        !o.disable && l.isShowTooltip ? (s(), a("div", {
          key: 0,
          class: i(["vue-tooltip-body", [{ "vue-tooltip__pointer-event": !o.clickable }, `vue-tooltip__${o.position}`]])
        }, [
          n(t.$slots, "tooltip", {}, void 0, !0)
        ], 2)) : m("", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter"])
  ], 34);
}
const S = /* @__PURE__ */ y(_, [["render", T], ["__scopeId", "data-v-5991ce00"]]), k = {
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
}, w = {
  install: E
};
export {
  S as TooltipComponent,
  k as TooltipDirective,
  w as default,
  E as install
};
