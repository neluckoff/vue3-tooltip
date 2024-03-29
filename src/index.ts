import TooltipComponent from './components/TooltipComponent.vue';
import TooltipDirective from './directives/tooltip';
import './assets/index.css';

export const install = (app: any) => {
  app.component('tooltip', TooltipComponent);
  app.directive('tooltip', TooltipDirective);
};

export default {
  install,
};

export { TooltipComponent, TooltipDirective };