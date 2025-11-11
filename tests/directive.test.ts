import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import TooltipDirective from '../src/directives/tooltip';

describe('TooltipDirective', () => {
  it('should add tooltip class to element', () => {
    const TestComponent = {
      template: '<div v-tooltip="\'Test tooltip\'">Hover me</div>',
      directives: {
        tooltip: TooltipDirective,
      },
    };

    const wrapper = mount(TestComponent);
    const element = wrapper.element as HTMLElement;
    
    expect(element.classList.contains('vue-tooltip')).toBe(true);
  });

  it('should set data-tooltip attribute', () => {
    const TestComponent = {
      template: '<div v-tooltip="\'Test message\'">Hover me</div>',
      directives: {
        tooltip: TooltipDirective,
      },
    };

    const wrapper = mount(TestComponent);
    const element = wrapper.element as HTMLElement;
    
    expect(element.getAttribute('data-tooltip')).toBe('Test message');
  });

  it('should apply position classes', () => {
    const TestComponent = {
      template: '<div v-tooltip:top="\'Top tooltip\'">Hover me</div>',
      directives: {
        tooltip: TooltipDirective,
      },
    };

    const wrapper = mount(TestComponent);
    const element = wrapper.element as HTMLElement;
    
    expect(element.classList.contains('vue-tooltip__top')).toBe(true);
  });

  it('should apply color modifiers', () => {
    const TestComponent = {
      template: '<div v-tooltip.secondary="\'Colored tooltip\'">Hover me</div>',
      directives: {
        tooltip: TooltipDirective,
      },
    };

    const wrapper = mount(TestComponent);
    const element = wrapper.element as HTMLElement;
    
    expect(element.classList.contains('vue-tooltip__secondary')).toBe(true);
  });

  it('should handle null/undefined values', () => {
    const TestComponent = {
      template: '<div v-tooltip="null">Hover me</div>',
      directives: {
        tooltip: TooltipDirective,
      },
    };

    const wrapper = mount(TestComponent);
    const element = wrapper.element as HTMLElement;
    
    expect(element.classList.contains('vue-tooltip')).toBe(true);
    expect(element.getAttribute('data-tooltip')).toBeNull();
  });

  it('should handle empty string values', () => {
    const TestComponent = {
      template: '<div v-tooltip="\'\'">Hover me</div>',
      directives: {
        tooltip: TooltipDirective,
      },
    };

    const wrapper = mount(TestComponent);
    const element = wrapper.element as HTMLElement;
    
    expect(element.classList.contains('vue-tooltip')).toBe(true);
    expect(element.getAttribute('data-tooltip')).toBeUndefined();
  });

  it('should clean up classes on update', async () => {
    const TestComponent = {
      template: '<div v-tooltip:top.primary="message">Hover me</div>',
      directives: {
        tooltip: TooltipDirective,
      },
      data() {
        return { message: 'Test' };
      },
    };

    const wrapper = mount(TestComponent);
    const element = wrapper.element as HTMLElement;
    
    expect(element.classList.contains('vue-tooltip__top')).toBe(true);
    expect(element.classList.contains('vue-tooltip__primary')).toBe(true);
    
    // Изменяем позицию и стиль через перемонтирование с новыми пропсами
    const TestComponent2 = {
      template: '<div v-tooltip:bottom.secondary="message">Hover me</div>',
      directives: {
        tooltip: TooltipDirective,
      },
      data() {
        return { message: 'Test' };
      },
    };
    
    const wrapper2 = mount(TestComponent2);
    const element2 = wrapper2.element as HTMLElement;
    
    expect(element2.classList.contains('vue-tooltip__bottom')).toBe(true);
    expect(element2.classList.contains('vue-tooltip__secondary')).toBe(true);
    expect(element2.classList.contains('vue-tooltip__top')).toBe(false);
    expect(element2.classList.contains('vue-tooltip__primary')).toBe(false);
  });
});

