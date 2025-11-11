import type { Directive, DirectiveBinding } from "vue";
import { getBestPosition, isTouchDevice, getRect, type Position } from "../utils";

type TooltipValue = string | null | undefined;
type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
type TooltipStyle = 'primary' | 'secondary' | 'accent';

interface TooltipData {
  position: TooltipPosition;
  style: TooltipStyle;
  autoPosition: boolean;
  adaptiveTouch: boolean;
}

interface TooltipState {
  isTouch: boolean;
  actualPosition: TooltipPosition;
  cleanup?: () => void;
}

const TOOLTIP_CLASS = 'vue-tooltip';
const POSITIONS: TooltipPosition[] = ['top', 'bottom', 'left', 'right'];
const STYLES: TooltipStyle[] = ['primary', 'secondary', 'accent'];

// Store tooltip state for each element
const tooltipStates = new WeakMap<HTMLElement, TooltipState>();

const TooltipDirective: Directive<HTMLElement, TooltipValue> = {
  mounted(el, binding) {
    const data = getTooltipData(binding);
    const state: TooltipState = {
      isTouch: data.adaptiveTouch ? isTouchDevice() : false,
      actualPosition: data.position,
    };
    
    tooltipStates.set(el, state);
    applyTooltip(el, binding, state);
    setupEventListeners(el, binding, state);
  },
  
  updated(el, binding) {
    const state = tooltipStates.get(el);
    if (!state) return;
    
    // Очищаем старые классы перед применением новых
    cleanupTooltip(el);
    applyTooltip(el, binding, state);
  },
  
  beforeUnmount(el) {
    const state = tooltipStates.get(el);
    if (state?.cleanup) {
      state.cleanup();
    }
    cleanupTooltip(el);
    tooltipStates.delete(el);
  }
};

const applyTooltip = (
  el: HTMLElement,
  binding: DirectiveBinding<TooltipValue>,
  state: TooltipState
): void => {
  // Добавляем базовый класс
  el.classList.add(TOOLTIP_CLASS);
  
  // Проверяем валидность значения
  if (!binding.value || binding.value.trim() === '') {
    return;
  }
  
  // Устанавливаем текст тултипа
  el.dataset.tooltip = binding.value;
  
  // Получаем настройки
  const data = getTooltipData(binding);
  
  // Применяем классы
  el.classList.add(`${TOOLTIP_CLASS}__${data.style}`);
  el.classList.add(`${TOOLTIP_CLASS}__${state.actualPosition}`);
  
  // Touch класс для стилизации
  if (data.adaptiveTouch && state.isTouch) {
    el.classList.add(`${TOOLTIP_CLASS}__touch`);
  }
};

const cleanupTooltip = (el: HTMLElement): void => {
  // Удаляем все классы тултипа
  POSITIONS.forEach(pos => {
    el.classList.remove(`${TOOLTIP_CLASS}__${pos}`);
  });
  
  STYLES.forEach(style => {
    el.classList.remove(`${TOOLTIP_CLASS}__${style}`);
  });
  
  // Очищаем dataset
  delete el.dataset.tooltip;
};

const getTooltipData = (binding: DirectiveBinding<TooltipValue>): TooltipData => {
  const position = (binding.arg as TooltipPosition) || 'bottom';
  const style = getStyleFromModifiers(binding.modifiers);
  const autoPosition = binding.modifiers.autoPosition || binding.modifiers.auto || false;
  const adaptiveTouch = binding.modifiers.touch || binding.modifiers.adaptive || false;
  
  return { position, style, autoPosition, adaptiveTouch };
};

const getStyleFromModifiers = (modifiers: Record<string, boolean>): TooltipStyle => {
  for (const style of STYLES) {
    if (modifiers[style]) {
      return style;
    }
  }
  return 'primary';
};

const setupEventListeners = (
  el: HTMLElement,
  binding: DirectiveBinding<TooltipValue>,
  state: TooltipState
): void => {
  const data = getTooltipData(binding);
  
  // Auto-positioning on mouse enter
  if (data.autoPosition) {
    const handleMouseEnter = () => {
      // Get tooltip pseudo-element (::after)
      const styles = window.getComputedStyle(el, '::after');
      const tooltipWidth = parseFloat(styles.width) || 200;
      const tooltipHeight = parseFloat(styles.height) || 40;
      
      const triggerRect = getRect(el);
      const tooltipRect = {
        ...triggerRect,
        width: tooltipWidth,
        height: tooltipHeight,
      };
      
      const result = getBestPosition(
        triggerRect,
        tooltipRect,
        data.position as Position
      );
      
      if (result.shouldFlip) {
        // Remove old position class
        el.classList.remove(`${TOOLTIP_CLASS}__${state.actualPosition}`);
        // Add new position class
        state.actualPosition = result.position as TooltipPosition;
        el.classList.add(`${TOOLTIP_CLASS}__${state.actualPosition}`);
      }
    };
    
    el.addEventListener('mouseenter', handleMouseEnter);
    
    const cleanup = state.cleanup || (() => {});
    state.cleanup = () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      cleanup();
    };
  }
  
  // Adaptive touch behavior
  if (data.adaptiveTouch && state.isTouch) {
    let isShown = false;
    
    const handleClick = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (!isShown) {
        el.classList.add(`${TOOLTIP_CLASS}__show`);
        isShown = true;
      } else {
        el.classList.remove(`${TOOLTIP_CLASS}__show`);
        isShown = false;
      }
    };
    
    const handleOutsideClick = (e: Event) => {
      if (!el.contains(e.target as Node) && isShown) {
        el.classList.remove(`${TOOLTIP_CLASS}__show`);
        isShown = false;
      }
    };
    
    el.addEventListener('click', handleClick);
    document.addEventListener('click', handleOutsideClick);
    
    const cleanup = state.cleanup || (() => {});
    state.cleanup = () => {
      el.removeEventListener('click', handleClick);
      document.removeEventListener('click', handleOutsideClick);
      cleanup();
    };
  }
};

export default TooltipDirective;
