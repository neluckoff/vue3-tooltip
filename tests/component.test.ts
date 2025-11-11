import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TooltipComponent from '../src/components/TooltipComponent.vue';

describe('TooltipComponent', () => {
  it('should render text slot', () => {
    const wrapper = mount(TooltipComponent, {
      slots: {
        text: 'Hover text',
        tooltip: 'Tooltip content',
      },
    });

    expect(wrapper.text()).toContain('Hover text');
  });

  it('should show tooltip on hover', async () => {
    const wrapper = mount(TooltipComponent, {
      slots: {
        text: 'Hover me',
        tooltip: 'Tooltip message',
      },
    });

    expect(wrapper.find('.vue-tooltip--component').exists()).toBe(false);

    await wrapper.find('.vue-tooltip').trigger('mouseenter');
    
    expect(wrapper.find('.vue-tooltip--component').exists()).toBe(true);
  });

  it('should hide tooltip on mouse leave', async () => {
    const wrapper = mount(TooltipComponent, {
      slots: {
        text: 'Hover me',
        tooltip: 'Tooltip message',
      },
    });

    await wrapper.find('.vue-tooltip').trigger('mouseenter');
    expect(wrapper.find('.vue-tooltip--component').exists()).toBe(true);

    await wrapper.find('.vue-tooltip').trigger('mouseleave');
    await wrapper.vm.$nextTick();
    
    // Tooltip should be hidden after leave
    expect(wrapper.vm.isShowTooltip).toBe(false);
  });

  it('should apply position prop', () => {
    const wrapper = mount(TooltipComponent, {
      props: {
        position: 'top',
      },
      slots: {
        text: 'Hover me',
        tooltip: 'Tooltip message',
      },
    });

    expect(wrapper.props('position')).toBe('top');
  });

  it('should respect disable prop', async () => {
    const wrapper = mount(TooltipComponent, {
      props: {
        disable: true,
      },
      slots: {
        text: 'Hover me',
        tooltip: 'Tooltip message',
      },
    });

    await wrapper.find('.vue-tooltip').trigger('mouseenter');
    
    // Tooltip should not appear when disabled
    expect(wrapper.find('.vue-tooltip--component').exists()).toBe(false);
  });

  it('should handle clickable prop', async () => {
    const wrapper = mount(TooltipComponent, {
      props: {
        clickable: true,
      },
      slots: {
        text: 'Hover me',
        tooltip: 'Tooltip message',
      },
    });

    await wrapper.find('.vue-tooltip').trigger('mouseenter');
    expect(wrapper.find('.vue-tooltip--component').exists()).toBe(true);
    
    const tooltipElement = wrapper.find('.vue-tooltip--component');
    expect(tooltipElement.classes()).not.toContain('vue-tooltip__pointer-event');
  });
});

