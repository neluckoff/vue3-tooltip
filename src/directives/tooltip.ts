import type { Directive } from "vue";
import '../assets/directive.css';

const TooltipDirective: Directive<HTMLElement, string> = {
  mounted: (el, binding) => {
    const className = 'vue-tooltip';
    el.dataset.tooltip = binding.value;
    el.classList.add(className);
    el.classList.add(`${className}-data`);
    el.classList.toggle(`${className}__${getStyleClass(binding.modifiers)}`, true);
    el.classList.toggle(`${className}__${binding.arg || 'bottom'}`, true);
  }
};

const getStyleClass = (modifiers: { [x: string]: boolean; }) => {
  if (modifiers.primary) return 'primary';
  if (modifiers.secondary) return 'secondary';
  if (modifiers.accent) return 'accent';
  return 'primary'; 
};

export default TooltipDirective