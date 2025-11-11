# 📚 API Reference

Complete API documentation for vue3-tooltip v2.3.0+

## Table of Contents
- [Installation](#installation)
- [Components](#components)
- [Directives](#directives)
- [Utilities](#utilities)
- [Types](#types)
- [CSS Variables](#css-variables)

---

## Installation

### Basic Setup

```typescript
import { createApp } from 'vue';
import VueTooltip from 'vue3-tooltip';
import 'vue3-tooltip/tooltip.css';

const app = createApp(App);

// Register as plugin (recommended)
app.use(VueTooltip);

// Or register components/directives manually
import { TooltipComponent, TooltipDirective } from 'vue3-tooltip';
app.component('Tooltip', TooltipComponent);
app.directive('tooltip', TooltipDirective);
```

---

## Components

### `<Tooltip>` Component

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Tooltip position |
| `disable` | `boolean` | `false` | Disable tooltip |
| `clickable` | `boolean` | `false` | Keep tooltip open when hovering over it |
| `autoPosition` | `boolean` | `false` | Auto-adjust position to fit viewport |
| `adaptiveTouch` | `boolean` | `false` | Enable touch device support |

#### Slots

| Slot | Description |
|------|-------------|
| `text` | Trigger content (what user hovers/clicks) |
| `tooltip` | Tooltip content (what appears in popup) |

#### Example

```vue
<template>
  <Tooltip 
    position="top"
    :auto-position="true"
    :adaptive-touch="true"
  >
    <template #text>
      <button>Hover or tap me</button>
    </template>
    <template #tooltip>
      <div class="custom-tooltip">
        <h4>Title</h4>
        <p>Description</p>
      </div>
    </template>
  </Tooltip>
</template>
```

---

## Directives

### `v-tooltip` Directive

#### Basic Usage

```vue
<button v-tooltip="'Simple tooltip'">Hover me</button>
```

#### With Position

```vue
<button v-tooltip:top="'Tooltip on top'">Top</button>
<button v-tooltip:bottom="'Tooltip on bottom'">Bottom</button>
<button v-tooltip:left="'Tooltip on left'">Left</button>
<button v-tooltip:right="'Tooltip on right'">Right</button>
```

#### Modifiers

| Modifier | Short | Description |
|----------|-------|-------------|
| `.primary` | - | Primary color (default) |
| `.secondary` | - | Secondary color |
| `.accent` | - | Accent color |
| `.auto` | `.autoPosition` | Enable auto-positioning |
| `.touch` | `.adaptive` | Enable touch support |

#### Examples

```vue
<!-- Color variants -->
<button v-tooltip.primary="'Primary tooltip'">Primary</button>
<button v-tooltip.secondary="'Secondary tooltip'">Secondary</button>
<button v-tooltip.accent="'Accent tooltip'">Accent</button>

<!-- With auto-positioning -->
<button v-tooltip.auto:bottom="'Smart tooltip'">
  Near edge
</button>

<!-- With touch support -->
<button v-tooltip.touch="'Tap or hover'">
  Mobile friendly
</button>

<!-- Combine modifiers -->
<button v-tooltip.auto.touch.secondary:top="'Ultimate'">
  All features
</button>
```

---

## Utilities

### Positioning Utilities

Import positioning utilities for custom tooltip implementations:

```typescript
import {
  getBestPosition,
  checkPosition,
  isTouchDevice,
  getRect,
  checkOverflow
} from 'vue3-tooltip';
```

#### `getBestPosition()`

Find the best position for tooltip to fit in viewport.

```typescript
getBestPosition(
  triggerRect: Rect,
  tooltipRect: Rect,
  preferredPosition: Position,
  offset?: number
): PositionResult
```

**Example:**
```typescript
import { getBestPosition, getRect } from 'vue3-tooltip';

const triggerEl = document.querySelector('.trigger');
const tooltipEl = document.querySelector('.tooltip');

const triggerRect = getRect(triggerEl);
const tooltipRect = getRect(tooltipEl);

const result = getBestPosition(
  triggerRect,
  tooltipRect,
  'bottom',
  10 // offset in pixels
);

console.log(result.position); // 'top' | 'bottom' | 'left' | 'right'
console.log(result.shouldFlip); // true if position was changed
```

#### `checkPosition()`

Check if tooltip fits in viewport with given position.

```typescript
checkPosition(
  triggerRect: Rect,
  tooltipRect: Rect,
  position: Position,
  offset?: number
): boolean
```

**Example:**
```typescript
import { checkPosition, getRect } from 'vue3-tooltip';

const fits = checkPosition(
  triggerRect,
  tooltipRect,
  'bottom',
  10
);

if (!fits) {
  console.log('Tooltip will overflow viewport!');
}
```

#### `isTouchDevice()`

Detect if current device supports touch.

```typescript
isTouchDevice(): boolean
```

**Example:**
```typescript
import { isTouchDevice } from 'vue3-tooltip';

if (isTouchDevice()) {
  console.log('Touch device detected');
  // Show different UI for touch devices
}
```

#### `getRect()`

Get element's bounding rectangle.

```typescript
getRect(element: HTMLElement): Rect
```

**Example:**
```typescript
import { getRect } from 'vue3-tooltip';

const rect = getRect(element);
console.log(rect.width, rect.height, rect.top, rect.left);
```

#### `checkOverflow()`

Check which sides of element overflow viewport.

```typescript
checkOverflow(rect: Rect): {
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
}
```

**Example:**
```typescript
import { checkOverflow, getRect } from 'vue3-tooltip';

const rect = getRect(element);
const overflow = checkOverflow(rect);

if (overflow.bottom) {
  console.log('Element overflows bottom of viewport');
}
```

---

## Types

### Position

```typescript
type Position = 'top' | 'bottom' | 'left' | 'right';
```

### Rect

```typescript
interface Rect {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}
```

### PositionResult

```typescript
interface PositionResult {
  position: Position;
  shouldFlip: boolean;
}
```

### Usage

```typescript
import type { Position, Rect, PositionResult } from 'vue3-tooltip';

const position: Position = 'bottom';
const rect: Rect = {
  top: 100,
  left: 50,
  right: 150,
  bottom: 130,
  width: 100,
  height: 30,
};
```

---

## CSS Variables

### Directive Variables

```css
:root {
  /* Timing & Animations */
  --tooltip-d-transition-duration: 0.3s;
  
  /* Sizing & Spacing */
  --tooltip-d-border-radius: 6px;
  --tooltip-d-padding: 6px 12px;
  --tooltip-d-max-width: 300px;
  --tooltip-d-font-size: 14px;
  
  /* Positioning */
  --tooltip-d-position-x: calc(100% + 10px);
  --tooltip-d-position-y: calc(100% + 10px);
  
  /* Z-Index */
  --tooltip-d-z-index: 9999;           /* Tooltip popup */
  --tooltip-d-z-index-base: 1;         /* Trigger default */
  --tooltip-d-z-index-hover: 9998;     /* Trigger on hover */
  
  /* Visual */
  --tooltip-d-box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  --tooltip-d-border: none;
  --tooltip-d-outline: none;
}
```

### Component Variables

```css
:root {
  /* Same structure as directive */
  --tooltip-c-transition-duration: 0.3s;
  --tooltip-c-border-radius: 6px;
  --tooltip-c-padding: 6px 12px;
  /* ... etc */
  --tooltip-c-z-index: 9999;
  --tooltip-c-z-index-hover: 9998;
}
```

### Color Variables

```css
:root {
  /* Primary (default) */
  --tooltip-primary-color: #1a1a1a;
  --tooltip-primary-background: #ffffff;
  
  /* Secondary */
  --tooltip-seconary-color: #ffffff;
  --tooltip-seconary-background: #475DEB;
  
  /* Accent */
  --tooltip-accent-color: #ffffff;
  --tooltip-accent-background: #1a1a1a;
  
  /* Component */
  --tooltip-component-color: #1a1a1a;
  --tooltip-component-background: #ffffff;
}
```

### Example: Customization

```css
/* In your styles.css */
:root {
  /* Make tooltips appear above everything */
  --tooltip-d-z-index: 99999;
  --tooltip-c-z-index: 99999;
  
  /* Larger tooltips */
  --tooltip-d-padding: 12px 20px;
  --tooltip-d-font-size: 16px;
  
  /* Custom colors */
  --tooltip-primary-background: #2c3e50;
  --tooltip-primary-color: #ecf0f1;
  
  /* Faster animations */
  --tooltip-d-transition-duration: 0.15s;
}
```

---

## Advanced Usage

### Custom Tooltip Implementation

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getBestPosition, getRect, isTouchDevice } from 'vue3-tooltip';
import type { Position } from 'vue3-tooltip';

const triggerRef = ref<HTMLElement>();
const tooltipRef = ref<HTMLElement>();
const position = ref<Position>('bottom');
const isTouch = ref(false);

onMounted(() => {
  isTouch.value = isTouchDevice();
});

function updatePosition() {
  if (!triggerRef.value || !tooltipRef.value) return;
  
  const result = getBestPosition(
    getRect(triggerRef.value),
    getRect(tooltipRef.value),
    position.value
  );
  
  position.value = result.position;
}
</script>

<template>
  <div ref="triggerRef" @mouseenter="updatePosition">
    <slot name="trigger" />
  </div>
  <div 
    ref="tooltipRef" 
    :class="`tooltip-${position}`"
  >
    <slot name="content" />
  </div>
</template>
```

### TypeScript Support

```typescript
// Full type safety with global components
import type { GlobalComponents } from 'vue';

// Tooltip component is globally typed
<Tooltip position="top" /> // ✅ TypeScript knows about this

// Directive is also typed
<button v-tooltip="'text'" /> // ✅ Full autocomplete
```

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome Android
- Samsung Internet

---

## Links

- [GitHub](https://github.com/neluckoff/vue3-tooltip)
- [NPM](https://www.npmjs.com/package/vue3-tooltip)
- [Changelog](./CHANGELOG.md)
- [Contributing](./.github/CONTRIBUTING.md)

