<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/neluckoff/vue3-tooltip/master/.github/assets/logo-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/neluckoff/vue3-tooltip/master/.github/assets/logo-light.svg">
  <img alt="Vue3 Tooltip" src="https://raw.githubusercontent.com/neluckoff/vue3-tooltip/master/.github/assets/logo-light.svg" width="600">
</picture>

<h3>✨ Smart, Elegant Tooltips for Vue 3 ✨</h3>

<p align="center">
  <strong>Auto-positioning</strong> • <strong>Touch Support</strong> • <strong>Lightweight</strong> • <strong>TypeScript</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue3-tooltip"><img src="https://img.shields.io/npm/v/vue3-tooltip?style=flat&colorA=18181B&colorB=10b981&label=version" alt="NPM Version"/></a>
  <a href="https://www.npmjs.com/package/vue3-tooltip"><img src="https://img.shields.io/npm/dt/vue3-tooltip?style=flat&colorA=18181B&colorB=10b981" alt="Downloads"/></a>
  <a href="https://bundlephobia.com/package/vue3-tooltip"><img src="https://img.shields.io/bundlephobia/minzip/vue3-tooltip?style=flat&colorA=18181B&colorB=10b981&label=gzip" alt="Bundle Size"/></a>
  <a href="https://github.com/neluckoff/vue3-tooltip/actions"><img src="https://img.shields.io/github/actions/workflow/status/neluckoff/vue3-tooltip/ci.yml?style=flat&colorA=18181B&colorB=10b981&label=tests" alt="CI Status"/></a>
  <a href="./LICENSE.md"><img src="https://img.shields.io/npm/l/vue3-tooltip?style=flat&colorA=18181B&colorB=10b981" alt="License"/></a>
</p>

<p align="center">
  <a href="#-quick-start"><strong>Quick Start</strong></a> •
  <a href="#-features"><strong>Features</strong></a> •
  <a href="#-examples"><strong>Examples</strong></a> •
  <a href="./DOCS.md"><strong>Full Docs</strong></a> •
  <a href="https://codesandbox.io/p/sandbox/vue3-tooltip-fsv9xl"><strong>Live Demo</strong></a>
</p>

</div>

<br/>

<div align="center">

```bash
npm install vue3-tooltip
```

</div>

---

## ⚡ Highlights

<div align="center">

```vue
<!-- Simple as this 👇 -->
<button v-tooltip.auto.touch.primary:top="'Hello World! 👋'">
  Hover or tap me
</button>
```

**3 seconds to install** • **Auto-positioning** • **Touch support** • **Full TypeScript** • **3.9 KB only**

</div>

---

## ✨ Features

> **Why developers love Vue3 Tooltip**

<table>
  <tbody>
    <tr>
      <td align="center" width="33%">
        <br/>
        <div>🎯</div>
        <br/>
        <strong>Smart Auto-Positioning</strong>
        <br/><br/>
        <sub>Automatically adjusts position to stay within viewport.<br/>Never goes off-screen!</sub>
        <br/><br/>
      </td>
      <td align="center" width="33%">
        <br/>
        <div>📱</div>
        <br/>
        <strong>Touch Device Support</strong>
        <br/><br/>
        <sub>Perfect on mobile & tablets.<br/>Tap to show, tap outside to hide.</sub>
        <br/><br/>
      </td>
      <td align="center" width="33%">
        <br/>
        <div>⚡</div>
        <br/>
        <strong>Lightweight</strong>
        <br/><br/>
        <sub>Only <strong>~3.9 KB gzipped</strong>.<br/>Zero dependencies!</sub>
        <br/><br/>
      </td>
    </tr>
    <tr>
      <td align="center" width="33%">
        <br/>
        <div>🎨</div>
        <br/>
        <strong>Fully Customizable</strong>
        <br/><br/>
        <sub>All styles via CSS variables.<br/>Match any design system easily.</sub>
        <br/><br/>
      </td>
      <td align="center" width="33%">
        <br/>
        <div>🔧</div>
        <br/>
        <strong>TypeScript First</strong>
        <br/><br/>
        <sub>Full TypeScript support.<br/>Exported types & utilities.</sub>
        <br/><br/>
      </td>
      <td align="center" width="33%">
        <br/>
        <div>🚀</div>
        <br/>
        <strong>Easy to Use</strong>
        <br/><br/>
        <sub>Simple directive or component.<br/>Works out of the box!</sub>
        <br/><br/>
      </td>
    </tr>
  </tbody>
</table>

---

## 🚀 Quick Start

Get up and running in 60 seconds! 

### 📦 Step 1: Install

Choose your favorite package manager:

```bash
npm install vue3-tooltip
# or
yarn add vue3-tooltip
# or
pnpm add vue3-tooltip
```

### ⚙️ Step 2: Register Plugin

Add to your Vue app (usually `main.ts` or `main.js`):

```typescript
import { createApp } from 'vue';
import VueTooltip from 'vue3-tooltip';
import 'vue3-tooltip/tooltip.css';  // 👈 Don't forget styles!

const app = createApp(App);
app.use(VueTooltip);  // 👈 Registers directive & component
app.mount('#app');
```

### 🎯 Step 3: Use It!

**Option A:** As a directive (simplest way)

```vue
<button v-tooltip="'Hello World!'">
  Hover me 👋
</button>
```

**Option B:** As a component (more control)

```vue
<Tooltip>
  <template #text>Hover me 👋</template>
  <template #tooltip>Hello World!</template>
</Tooltip>
```

**That's it!** 🎉 You're ready to go!

---

## 💡 Examples

### 🎯 Smart Auto-Positioning

The tooltip automatically flips to stay visible in viewport:

```vue
<button v-tooltip.auto:bottom="'I adjust my position smartly!'">
  Near screen edge 🎯
</button>
```

> 💡 Perfect for dropdowns near screen edges - no more cut-off tooltips!

### 📱 Touch Device Support

Works seamlessly on mobile and tablets:

```vue
<button v-tooltip.touch="'Tap me on mobile! 📱'">
  Mobile & Desktop Ready
</button>
```

> 💡 Automatically detects touch devices and adapts behavior

### 🎨 Color Variants

Choose from three beautiful built-in themes:

```vue
<button v-tooltip.primary="'Clean & modern'">Primary</button>
<button v-tooltip.secondary="'Subtle & elegant'">Secondary</button>
<button v-tooltip.accent="'Bold & bright'">Accent</button>
```

### 🧭 Position Control

Place tooltips exactly where you want them:

```vue
<button v-tooltip:top="'↑ Top'">Top</button>
<button v-tooltip:bottom="'↓ Bottom'">Bottom</button>
<button v-tooltip:left="'← Left'">Left</button>
<button v-tooltip:right="'→ Right'">Right</button>
```

### 🎭 Combine Modifiers

Mix and match modifiers for powerful tooltips:

```vue
<!-- Auto-positioning + Touch + Custom color -->
<button v-tooltip.auto.touch.secondary:top="'The ultimate tooltip! 🚀'">
  All Features Combined
</button>
```

> 💡 **Pro tip:** Chain modifiers like `.auto.touch.primary` for maximum functionality!

---

## 🧩 Component API

For more complex scenarios, use the `<Tooltip>` component:

### Props Reference

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Tooltip placement |
| `autoPosition` | `boolean` | `false` | 🆕 Auto-adjust to viewport |
| `adaptiveTouch` | `boolean` | `false` | 🆕 Enable touch support |
| `clickable` | `boolean` | `false` | Keep open on hover |
| `disable` | `boolean` | `false` | Disable tooltip |

### Rich Content Example

Perfect for complex HTML content:

```vue
<template>
  <Tooltip 
    position="top"
    :auto-position="true"
    :adaptive-touch="true"
  >
    <template #text>
      <button class="my-button">
        📊 View Stats
      </button>
    </template>
    
    <template #tooltip>
      <div class="rich-tooltip">
        <h4>📈 User Statistics</h4>
        <p>Active users: <strong>1,234</strong></p>
        <p>Growth: <strong style="color: #10b981">+15%</strong></p>
      </div>
    </template>
  </Tooltip>
</template>

<style scoped>
.rich-tooltip {
  min-width: 200px;
  text-align: left;
}
.rich-tooltip h4 {
  margin: 0 0 8px;
  font-size: 14px;
}
.rich-tooltip p {
  margin: 4px 0;
  font-size: 12px;
}
</style>
```

---

## 🎨 Customization

Match your design system effortlessly with CSS variables!

### 🎨 Quick Theme Override

```css
/* In your global CSS */
:root {
  /* Make tooltips match your brand */
  --tooltip-primary-background: #2563eb;
  --tooltip-primary-color: white;
  --tooltip-d-border-radius: 12px;
  --tooltip-d-padding: 8px 16px;
}
```

### 📋 All Available Variables

<details>
<summary><strong>👉 Click to see all CSS variables</strong></summary>

```css
:root {
  /* 📐 Layout & Positioning */
  --tooltip-d-z-index: 9999;
  --tooltip-d-z-index-hover: 9998;
  --tooltip-d-offset: 10px;
  
  /* 🎨 Appearance */
  --tooltip-d-padding: 6px 12px;
  --tooltip-d-border-radius: 6px;
  --tooltip-d-font-size: 14px;
  --tooltip-d-font-weight: 500;
  --tooltip-d-line-height: 1.4;
  
  /* 🎯 Primary Theme */
  --tooltip-primary-background: #ffffff;
  --tooltip-primary-color: #1a1a1a;
  --tooltip-primary-border: 1px solid #e5e5e5;
  --tooltip-primary-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  /* 🎨 Secondary Theme */
  --tooltip-secondary-background: #f3f4f6;
  --tooltip-secondary-color: #374151;
  
  /* ✨ Accent Theme */
  --tooltip-accent-background: #10b981;
  --tooltip-accent-color: #ffffff;
  
  /* ⏱️ Animations */
  --tooltip-d-transition-duration: 0.3s;
  --tooltip-d-transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

</details>

### 💡 Examples

**Dark theme:**

```css
:root {
  --tooltip-primary-background: #1f2937;
  --tooltip-primary-color: #f9fafb;
  --tooltip-primary-border: 1px solid #374151;
}
```

**Glassmorphism:**

```css
:root {
  --tooltip-primary-background: rgba(255, 255, 255, 0.8);
  --tooltip-primary-backdrop-filter: blur(10px);
  --tooltip-primary-border: 1px solid rgba(255, 255, 255, 0.3);
}
```

> 📖 **Full documentation:** See [DOCS.md](./DOCS.md) for complete customization guide

---

## 📚 Advanced Usage

### 🔧 TypeScript Support

Full type safety with exported types and utilities:

```typescript
import type { Position, Rect, TooltipOptions } from 'vue3-tooltip';
import { getBestPosition, isTouchDevice } from 'vue3-tooltip';

// ✅ Type-safe position
const position: Position = 'bottom';

// ✅ Detect touch devices
const isTouch = isTouchDevice();

// ✅ Smart positioning for custom tooltips
const bestPos = getBestPosition(
  triggerRect,
  tooltipRect,
  'bottom'
);
```

### 🛠️ Utility Functions

Build custom tooltip solutions with our utilities:

```typescript
import {
  getBestPosition,    // 🎯 Find optimal position
  checkPosition,      // ✅ Validate position fits
  isTouchDevice,      // 📱 Detect touch support
  getRect,           // 📐 Get element bounds
  checkOverflow      // 🔍 Check viewport overflow
} from 'vue3-tooltip';
```

**Example - Custom tooltip positioning:**

```typescript
import { getBestPosition, getRect } from 'vue3-tooltip';

// Get element rectangles
const triggerRect = getRect(buttonElement);
const tooltipRect = getRect(tooltipElement);

// Find best position automatically
const bestPosition = getBestPosition(
  triggerRect, 
  tooltipRect, 
  'top'  // preferred position
);

console.log(bestPosition); // 'top' or alternative if top doesn't fit
```

---

## 🎯 Why Vue3 Tooltip?

Comparison with other popular tooltip libraries:

<table>
  <thead>
    <tr>
      <th width="200">Feature</th>
      <th align="center" width="150">Vue3 Tooltip</th>
      <th align="center" width="150">Others</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>🎯 <strong>Auto-positioning</strong></td>
      <td align="center">✅ Built-in</td>
      <td align="center">❌ Manual</td>
    </tr>
    <tr>
      <td>📱 <strong>Touch support</strong></td>
      <td align="center">✅ Adaptive</td>
      <td align="center">❌ Desktop only</td>
    </tr>
    <tr>
      <td>🔧 <strong>TypeScript</strong></td>
      <td align="center">✅ Full support</td>
      <td align="center">⚠️ Partial</td>
    </tr>
    <tr>
      <td>📦 <strong>Bundle size</strong></td>
      <td align="center">✅ <strong>3.9 KB</strong></td>
      <td align="center">❌ 10-20 KB</td>
    </tr>
    <tr>
      <td>🎨 <strong>CSS Variables</strong></td>
      <td align="center">✅ Fully customizable</td>
      <td align="center">⚠️ Limited</td>
    </tr>
    <tr>
      <td>📦 <strong>Dependencies</strong></td>
      <td align="center">✅ Zero</td>
      <td align="center">❌ Multiple</td>
    </tr>
    <tr>
      <td>🌳 <strong>Tree-shakeable</strong></td>
      <td align="center">✅ Yes</td>
      <td align="center">⚠️ Partial</td>
    </tr>
    <tr>
      <td>⚡ <strong>Vue 3 native</strong></td>
      <td align="center">✅ Built for Vue 3</td>
      <td align="center">⚠️ Vue 2 ports</td>
    </tr>
  </tbody>
</table>

---

## 🌐 Browser Support

Works everywhere modern Vue 3 works:

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png" width="48" height="48" alt="Chrome">
      <br/>Chrome
    </td>
    <td align="center" width="96">
      <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png" width="48" height="48" alt="Firefox">
      <br/>Firefox
    </td>
    <td align="center" width="96">
      <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png" width="48" height="48" alt="Safari">
      <br/>Safari
    </td>
    <td align="center" width="96">
      <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png" width="48" height="48" alt="Edge">
      <br/>Edge
    </td>
    <td align="center" width="96">
      <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari-ios/safari-ios_48x48.png" width="48" height="48" alt="iOS Safari">
      <br/>iOS Safari
    </td>
    <td align="center" width="96">
      <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/samsung-internet/samsung-internet_48x48.png" width="48" height="48" alt="Samsung">
      <br/>Samsung
    </td>
  </tr>
  <tr>
    <td align="center">90+</td>
    <td align="center">88+</td>
    <td align="center">14+</td>
    <td align="center">90+</td>
    <td align="center">14+</td>
    <td align="center">✅</td>
  </tr>
</table>

---

## 📖 Documentation

<table>
  <tr>
    <td align="center" width="33%">
      <br/>
      <a href="./DOCS.md">
        <strong>📚 Complete Documentation</strong>
      </a>
      <br/><br/>
      <sub>Full API reference, examples, and guides</sub>
      <br/><br/>
    </td>
    <td align="center" width="33%">
      <br/>
      <a href="./CHANGELOG.md">
        <strong>📝 Changelog</strong>
      </a>
      <br/><br/>
      <sub>Version history and migration guides</sub>
      <br/><br/>
    </td>
    <td align="center" width="33%">
      <br/>
      <a href="https://codesandbox.io/p/sandbox/vue3-tooltip-fsv9xl">
        <strong>🎮 Live Demo</strong>
      </a>
      <br/><br/>
      <sub>Try it in an interactive playground</sub>
      <br/><br/>
    </td>
  </tr>
</table>

---

## 🤝 Contributing

We welcome contributions! Help us make tooltips better for everyone.

### 🚀 Quick Start for Contributors

```bash
# 1️⃣ Clone the repository
git clone https://github.com/neluckoff/vue3-tooltip.git
cd vue3-tooltip

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run tests (watch mode)
npm test

# 4️⃣ Build the library
npm run build

# 5️⃣ Test locally in your project
npm link
```

### 💡 Ways to Contribute

- 🐛 **Report bugs** - [Open an issue](https://github.com/neluckoff/vue3-tooltip/issues/new?template=bug_report.md)
- ✨ **Suggest features** - [Request a feature](https://github.com/neluckoff/vue3-tooltip/issues/new?template=feature_request.md)
- 📖 **Improve docs** - Fix typos, add examples
- 🧪 **Add tests** - Increase coverage
- 🎨 **Design** - Suggest UX improvements
- 💻 **Code** - Submit pull requests

> 📋 Please read our [Contributing Guide](./.github/CONTRIBUTING.md) before submitting PRs

---

## 📝 License

Released under the [MIT License](./LICENSE.md)

Copyright © 2024-present [Dmitrii Lukianenko](https://github.com/neluckoff)

---

## 💖 Show Your Support

If this package helps you, please consider:

<table>
  <tr>
    <td align="center" width="25%">
      <br/>
      <div>⭐</div>
      <br/>
      <strong>Star on GitHub</strong>
      <br/><br/>
      <sub><a href="https://github.com/neluckoff/vue3-tooltip">Give us a star</a></sub>
      <br/><br/>
    </td>
    <td align="center" width="25%">
      <br/>
      <div>🐦</div>
      <br/>
      <strong>Share on Twitter</strong>
      <br/><br/>
      <sub>Tell others about it!</sub>
      <br/><br/>
    </td>
    <td align="center" width="25%">
      <br/>
      <div>💰</div>
      <br/>
      <strong>Sponsor</strong>
      <br/><br/>
      <sub><a href="https://github.com/sponsors/neluckoff">Support development</a></sub>
      <br/><br/>
    </td>
    <td align="center" width="25%">
      <br/>
      <div>🤝</div>
      <br/>
      <strong>Contribute</strong>
      <br/><br/>
      <sub><a href="#-contributing">Submit a PR</a></sub>
      <br/><br/>
    </td>
  </tr>
</table>

---

<div align="center">
<br/>

### Made with ❤️ for the Vue community

**Created by [@neluckoff](https://github.com/neluckoff)**

<sub>
  <a href="https://goo.su/YfII">Website</a> •
  <a href="https://github.com/neluckoff/vue3-tooltip">GitHub</a> •
  <a href="https://www.npmjs.com/package/vue3-tooltip">NPM</a> •
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20Vue3%20Tooltip%20-%20Smart%20tooltips%20for%20Vue%203!&url=https://github.com/neluckoff/vue3-tooltip">Share on Twitter</a>
</sub>

<br/><br/>

<sub>If you find a bug or have a feature request, please <a href="https://github.com/neluckoff/vue3-tooltip/issues/new">open an issue</a> 🙏</sub>

</div>
