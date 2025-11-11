import type { App, Plugin } from 'vue';
import TooltipComponent from './components/TooltipComponent.vue';
import TooltipDirective from './directives/tooltip';
import './assets/index.css';

// Export utilities
export * from './utils';

// Export types
export type {
  Position,
  Rect,
  PositionResult,
} from './utils/positioning';

// Plugin installation
export const install = (app: App): void => {
  app.component('tooltip', TooltipComponent);
  app.directive('tooltip', TooltipDirective);
};

// Vue plugin
const VueTooltipPlugin: Plugin = {
  install,
};

// Default export (for use with app.use())
export default VueTooltipPlugin;

// Named exports (for direct import)
export { 
  TooltipComponent, 
  TooltipDirective,
};

// Type augmentation for global components
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Tooltip: typeof TooltipComponent;
  }
}