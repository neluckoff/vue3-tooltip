<script lang="ts">
import { ref } from 'vue';

type TooltipPosition = 'bottom' | 'top' | 'left' | 'right';

export default {
  name: 'TooltipComponent',
  props: {
    disable: {
      type: Boolean,
      required: false,
      default: false
    },
    position: {
      type: String as () => TooltipPosition,
      required: false,
      default: 'bottom'
    },
    clickable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const isShowTooltip = ref(false);

    const afterEnter = (el: Element) => {
      el.classList.add(`vue-tooltip__hover-${props.position}`);
    };

    const hideTooltip = () => {
      isShowTooltip.value = false;
    };

    return {
      isShowTooltip,
      afterEnter,
      hideTooltip
    };
  }
}
</script>

<template>
  <div
    @mouseenter="isShowTooltip = true"
    @mouseleave="isShowTooltip = false"
    class="vue-tooltip"
    :class="{'disable': disable}"
  >
    <slot name="text"></slot>
    <transition :name="position" @after-enter="afterEnter">
      <div 
        v-if="!disable && isShowTooltip" 
        class="vue-tooltip--component" 
        :class="[{ 'vue-tooltip__pointer-event': !clickable }, `vue-tooltip__${position}`]"
      >
        <slot name="tooltip"></slot>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="css">
.vue-tooltip::after {
  content: '';
  display: none;
}

.vue-tooltip:hover {
  z-index: calc(var(--tooltip-c-z-index) + 1);
}

.vue-tooltip__pointer-event {
  pointer-events: none;
}

/* Position: left */
.vue-tooltip__hover-left {
  right: var(--tooltip-c-position-x);
  left: auto; 
}

.left-enter-active,
.left-leave-active {
  transition: var(--tooltip-c-transition-duration);
  right: var(--tooltip-c-position-x);
}

.left-enter-from,
.left-leave-to {
  opacity: 0;
  right: 50%;
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

.right-enter-active,
.right-leave-active {
  transition: var(--tooltip-c-transition-duration);
  left: var(--tooltip-c-position-x);
}

.right-enter-from,
.right-leave-to {
  opacity: 0;
  left: 50%;
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

.bottom-enter-active,
.bottom-leave-active {
  transition: var(--tooltip-c-transition-duration);
  top: 100%;
}

.bottom-enter-from,
.bottom-leave-to {
  opacity: 0;
  top: 50%;
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

.top-enter-active,
.top-leave-active {
  transition: var(--tooltip-c-transition-duration);
  bottom: 100%;
}

.top-enter-from,
.top-leave-to {
  opacity: 0;
  bottom: 50%;
}

.vue-tooltip__top {
  right: 50%; 
  left: 50%;
  transform: translate(-50%, 0);
}
</style>