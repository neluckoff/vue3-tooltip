declare module 'vue3-tooltip' {
  import { ComponentOptions } from 'vue';
  import { TooltipDirective } from './directives/tooltip.ts';

  const TooltipComponent: ComponentOptions;
  const TooltipDirective: TooltipDirective;
  
  export default TooltipComponent;
  export { TooltipComponent, TooltipDirective };
}