<script lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { getBestPosition, isTouchDevice, getRect, type Position } from '../utils';

type TooltipPosition = 'bottom' | 'top' | 'left' | 'right';

export default {
  name: 'TooltipComponent',
  props: {
    disable: {
      type: Boolean,
      required: false,
      default: false,
    },
    position: {
      type: String as () => TooltipPosition,
      required: false,
      default: 'bottom',
    },
    clickable: {
      type: Boolean,
      required: false,
      default: false,
    },
    autoPosition: {
      type: Boolean,
      required: false,
      default: false,
    },
    adaptiveTouch: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const isShowTooltip = ref(false);
    const onTooltipHover = ref(false);
    const actualPosition = ref<Position>(props.position as Position);
    const isTouch = ref(false);
    const triggerRef = ref<HTMLElement | null>(null);
    const tooltipRef = ref<HTMLElement | null>(null);

    // Detect touch device on mount
    onMounted(() => {
      if (props.adaptiveTouch) {
        isTouch.value = isTouchDevice();
      }
    });

    const updatePosition = async () => {
      if (!props.autoPosition || !triggerRef.value) return;

      await nextTick();
      
      if (!tooltipRef.value || !isShowTooltip.value) return;

      const triggerRect = getRect(triggerRef.value);
      const tooltipRect = getRect(tooltipRef.value);

      const result = getBestPosition(
        triggerRect,
        tooltipRect,
        props.position as Position
      );

      actualPosition.value = result.position;
    };

    const afterEnter = async (el: Element) => {
      if (props.autoPosition) {
        await updatePosition();
      }
      el.classList.add(`vue-tooltip__hover-${actualPosition.value}`);
    };

    const showTooltip = () => {
      if (props.disable) return;
      isShowTooltip.value = true;
    };

    const hideTooltip = () => {
      if (props.disable) return;
      
      if (!props.clickable) {
        isShowTooltip.value = false;
        return;
      }
      
      setTimeout(() => {
        if (onTooltipHover.value) {
          isShowTooltip.value = true;
          return;
        }
        isShowTooltip.value = false;
      }, 300);
    };

    const onTriggerInteract = (event: Event) => {
      if (props.adaptiveTouch && isTouch.value) {
        // On touch devices, toggle on click
        event.preventDefault();
        isShowTooltip.value = !isShowTooltip.value;
      } else {
        // On desktop, show on mouseenter
        showTooltip();
      }
    };

    const onTriggerClick = () => {
      if (props.adaptiveTouch && isTouch.value) {
        // Toggle tooltip on touch devices
        isShowTooltip.value = !isShowTooltip.value;
      }
    };

    // Close tooltip on outside click (for touch devices)
    const handleOutsideClick = (event: MouseEvent) => {
      if (!isTouch.value || !isShowTooltip.value) return;
      
      const target = event.target as Node;
      if (
        triggerRef.value &&
        !triggerRef.value.contains(target) &&
        tooltipRef.value &&
        !tooltipRef.value.contains(target)
      ) {
        isShowTooltip.value = false;
      }
    };

    onMounted(() => {
      if (props.adaptiveTouch) {
        document.addEventListener('click', handleOutsideClick);
      }
    });

    onUnmounted(() => {
      if (props.adaptiveTouch) {
        document.removeEventListener('click', handleOutsideClick);
      }
    });

    return {
      isShowTooltip,
      onTooltipHover,
      actualPosition,
      isTouch,
      triggerRef,
      tooltipRef,
      afterEnter,
      onTriggerInteract,
      onTriggerClick,
      hideTooltip,
    };
  },
};
</script>

<template>
  <div
    ref="triggerRef"
    @mouseenter="onTriggerInteract"
    @mouseleave="hideTooltip"
    @click="onTriggerClick"
    class="vue-tooltip"
    :class="{ 
      disable: disable, 
      'vue-tooltip__selected': isShowTooltip,
      'vue-tooltip__touch': adaptiveTouch && isTouch
    }"
  >
    <slot name="text"></slot>
    <transition :name="actualPosition" @after-enter="afterEnter">
      <div
        v-if="!disable && isShowTooltip"
        ref="tooltipRef"
        class="vue-tooltip--component"
        :class="[
          { 'vue-tooltip__pointer-event': !clickable && !(adaptiveTouch && isTouch) },
          `vue-tooltip__${actualPosition}`,
        ]"
        @mouseenter="onTooltipHover = true"
        @mouseleave="onTooltipHover = false"
      >
        <div class="vue-tooltip__body">
          <slot name="tooltip"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="css">
.vue-tooltip::after {
  content: '';
  display: none;
}

.vue-tooltip__selected {
  z-index: var(--tooltip-c-z-index-hover) !important;
}

.vue-tooltip__pointer-event {
  pointer-events: none;
}

/* Position: left */
.vue-tooltip__hover-left {
  right: var(--tooltip-c-position-x);
  left: auto;
}

.left-enter-active {
  transition: opacity var(--tooltip-c-transition-duration) ease-out,
              transform var(--tooltip-c-transition-duration) ease-out;
  right: var(--tooltip-c-position-x);
}

.left-leave-active {
  transition: opacity calc(var(--tooltip-c-transition-duration) * 0.6) ease-in,
              transform calc(var(--tooltip-c-transition-duration) * 0.6) ease-in;
  right: var(--tooltip-c-position-x);
}

.left-enter-from {
  opacity: 0;
  transform: translate(8px, -50%);
}

.left-leave-to {
  opacity: 0;
  transform: translate(4px, -50%);
}

.vue-tooltip__left {
  top: 50%;
  bottom: 50%;
  transform: translate(0, -50%);
}

/* Position: right */
.vue-tooltip__hover-right {
  left: var(--tooltip-c-position-x);
  right: auto;
}

.right-enter-active {
  transition: opacity var(--tooltip-c-transition-duration) ease-out,
              transform var(--tooltip-c-transition-duration) ease-out;
  left: var(--tooltip-c-position-x);
}

.right-leave-active {
  transition: opacity calc(var(--tooltip-c-transition-duration) * 0.6) ease-in,
              transform calc(var(--tooltip-c-transition-duration) * 0.6) ease-in;
  left: var(--tooltip-c-position-x);
}

.right-enter-from {
  opacity: 0;
  transform: translate(-8px, -50%);
}

.right-leave-to {
  opacity: 0;
  transform: translate(-4px, -50%);
}

.vue-tooltip__right {
  top: 50%;
  bottom: 50%;
  transform: translate(0, -50%);
}

/* Position: bottom */
.vue-tooltip__hover-bottom {
  top: var(--tooltip-c-position-y);
  bottom: auto;
}

.bottom-enter-active {
  transition: opacity var(--tooltip-c-transition-duration) ease-out,
              transform var(--tooltip-c-transition-duration) ease-out;
  top: calc(100% + 5px);
}

.bottom-leave-active {
  transition: opacity calc(var(--tooltip-c-transition-duration) * 0.6) ease-in,
              transform calc(var(--tooltip-c-transition-duration) * 0.6) ease-in;
  top: calc(100% + 5px);
}

.bottom-enter-from {
  opacity: 0;
  transform: translate(-50%, -8px);
}

.bottom-leave-to {
  opacity: 0;
  transform: translate(-50%, -4px);
}

.vue-tooltip__bottom {
  right: 50%;
  left: 50%;
  transform: translate(-50%, 0);
}

/* Position: top */
.vue-tooltip__hover-top {
  bottom: var(--tooltip-c-position-y);
  top: auto;
}

.top-enter-active {
  transition: opacity var(--tooltip-c-transition-duration) ease-out,
              transform var(--tooltip-c-transition-duration) ease-out;
  bottom: 100%;
}

.top-leave-active {
  transition: opacity calc(var(--tooltip-c-transition-duration) * 0.6) ease-in,
              transform calc(var(--tooltip-c-transition-duration) * 0.6) ease-in;
  bottom: 100%;
}

.top-enter-from {
  opacity: 0;
  transform: translate(-50%, 8px);
}

.top-leave-to {
  opacity: 0;
  transform: translate(-50%, 4px);
}

.vue-tooltip__top {
  right: 50%;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
