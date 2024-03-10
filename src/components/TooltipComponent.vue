<script lang="ts">
import { ref } from 'vue';

type TooltipPosition = 'bottom' | 'top' | 'left' | 'right';

export default {
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
  setup() {
    const isShowTooltip = ref(false);

    return {
      isShowTooltip
    };
  }
}
</script>

<template>
  <div
    @pointerenter="isShowTooltip = true"
    @pointerleave="isShowTooltip = false"
    class="vue-tooltip"
  >
    <slot name="text"></slot>
    <transition name="slide-down">
      <div v-if="!disable && isShowTooltip" class="vue-tooltip-body" :class="[{ 'vue-tooltip__pointer-event': !clickable }, `vue-tooltip__${position}`]">
        <slot name="tip"></slot>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.vue-tooltip::after {
  content: '';
  display: none;
}
</style>