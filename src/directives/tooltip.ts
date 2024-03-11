import type { Directive } from "vue";

const TooltipDirective: Directive<HTMLElement, string> = {
  mounted: (el, binding) => {
    updateTooltip(el, binding);
  },
  updated: (el, binding) => {
    updateTooltip(el, binding);
  }
};

const updateTooltip = (el: HTMLElement, binding: { value: string; modifiers: { [x: string]: boolean; }; arg?: string; }) => {
  const className = 'vue-tooltip';
  el.classList.add(className);
  if (binding.value === null || binding.value === undefined)
    return;
  el.dataset.tooltip = binding.value;
  el.classList.toggle(`${className}__${getStyleClass(binding.modifiers)}`, true);
  el.classList.toggle(`${className}__${binding.arg || 'bottom'}`, true);
};

const getStyleClass = (modifiers: { [x: string]: boolean; }) => {
  if (modifiers.primary) return 'primary';
  if (modifiers.secondary) return 'secondary';
  if (modifiers.accent) return 'accent';
  return 'primary'; 
};

export default TooltipDirective;
