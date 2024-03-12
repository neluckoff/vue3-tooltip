<div align="center">
    <h1>Vue3 Tooltip</h1>
    <p>Module for convenient work with tooltips in Vue3 (using a directive and a component)</p>
    <span>
        <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/vue3-tooltip">
        <img alt="NPM Version" src="https://img.shields.io/npm/v/vue3-tooltip">
        <img alt="GitHub forks" src="https://img.shields.io/github/forks/neluckoff/vue3-tooltip">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/neluckoff/vue3-tooltip">
    </span>
</div>
&nbsp;

You can find a **CodeSandBox** containing the module, along with a demonstration of its functionality and the option to customize its styles, [by following this link](https://codesandbox.io/p/sandbox/vue3-tooltip-fsv9xl?file=%2Fsrc%2Fcomponents%2FTestComponent.vue%3A17%2C9-17%2C48&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cltklnak10006356iyt8wcwvd%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cltklnak10002356iretltoe2%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cltklnak10003356iyowpmbra%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cltklnak10005356irnq16azx%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cltklnak10002356iretltoe2%2522%253A%257B%2522id%2522%253A%2522cltklnak10002356iretltoe2%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522cltklnak10005356irnq16azx%2522%253A%257B%2522id%2522%253A%2522cltklnak10005356irnq16azx%2522%252C%2522activeTabId%2522%253A%2522cltklqkii004h356hnc0o0m3h%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522cltklqkii004h356hnc0o0m3h%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522cltklnak10003356iyowpmbra%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522cltklnak10003356iyowpmbra%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D).

## Installation
First, let's add a module to your project using **npm**:

```shell
npm install vue3-tooltip
```
Or you can install using **yarn**:

```shell
yarn add vue3-tooltip
```

Add dependencies to your `main.ts`:

```js
import { createApp } from 'vue'
import { TooltipDirective, TooltipComponent } from 'vue3-tooltip';
import 'vue3-tooltip/tooltip.css';

const app = createApp({...})
app.directive('tooltip', TooltipDirective)
app.component('tooltip', TooltipComponent)
app.mount('#app')
```

## Using a Directive
To use tooltip as a directive, simply write `v-tooltip="..."` on any block in HTML:

```vue
<p v-tooltip="`Tooltip text`">Some text</p>
```

You can also customize a directive using arguments and change its position using modifiers:

`v-tooltip:bottom` *(default)* - Change tooltip position to bottom

`v-tooltip:top` - Change tooltip position to top

`v-tooltip:right` - Change tooltip position to right

`v-tooltip:left` - Change tooltip position to left

Arguments for changing color (can be customized):

`v-tooltip.primary` *(default)*

`v-tooltip.secondary` 

`v-tooltip.accent`

Example of using arguments and modifiers:

```vue
<p v-tooltip:top="My name is ${name}">My name</p>
<p v-tooltip:bottom.secondary="'I am' + years + 'years old'">My age</p>
<p v-tooltip.accent="`I love writing code`">More info</p>
<p v-tooltip:right.primary="secret">Secret info</p>
```

## Using a Component
To use a component you just need to register it in your template:

```vue
<tooltip position="bottom">
    <template v-slot:text>
        <p>Point at me and find out the secret</p>
    </template>
    <template v-slot:tooltip>
        <strong>Watermelon is a berry</strong>
    </template>
</tooltip>
```

The component has the following props *(default values are highlighted in bold)*:

`position` *(**'bottom'** | 'top' | 'left' | 'right')* - change tooltip position

`disable` *(true | **false**)* - make the tooltip and the text for calling the tooltip inactive

`clickable` *(true | **false**)* - do not hide the tooltip when hovering over it

## Style customization
To customize styles, you need to paste your CSS file into `main.ts` after importing the basic tooltip styles `(vue3-tooltip/tooltip.css)`:

```js
import { TooltipDirective, TooltipComponent } from 'vue3-tooltip';
import 'vue3-tooltip/tooltip.css';
// After this line you need to do your import
import './assets/my-tooltip.scss';
```

To customize tooltip **directive**, you need to create a global style file using `CSS` or `Sass`. My example demonstrates this process:

```scss
.vue-tooltip {
  &::after {
    /*
    * font-size, line-height, max-width, padding, border-radius, box-shadow, transition
    */
  }
  &__primary::after {
    /*
    * background, color
    */
  }
  &__secondary::after {// ... //}
  &__accent::after {// ... //}
}
```

*If you want to explore customization in more detail and change all the classes in the module, you should check them out at [this link](https://github.com/neluckoff/vue3-tooltip/blob/master/src/assets/_directive.css).*

To customize the **component**, you can also override the standard styles:

```scss
.vue-tooltip {
  &.disable {
    // ... //
  }
  &--component {
    /*
    * font-size, line-height, max-width, padding, border-radius, box-shadow, transition
    */
  }
}
```

*You can go deeper into component styles at [this link](https://github.com/neluckoff/vue3-tooltip/blob/master/src/assets/_component.css).*

Or, instead of redefining classes, you can use variables, on which the entire tooltip design is based. If you want to add new variables, you can write to [Issues on GitHub](https://github.com/neluckoff/vue3-tooltip/issues).

```css
:root {
  /* Directive Variables */
  --tooltip-d-transition-duration: 0.4s;
  --tooltip-d-border-radius: 4px;
  --tooltip-d-padding: 2px 4px;
  --tooltip-d-position-x: calc(100% + 10px);
  --tooltip-d-position-y: calc(100% + 2px);
  --tooltip-d-box-shadow: 0px 3.2px 7.2px 0px rgba(0, 0, 0, 0.14),
      0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.1),
      0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);
  --tooltip-d-z-index: 10;
  --tooltip-d-max-width: 200px;
  --tooltip-d-font-size: 14px;
  --tooltip-d-width: max-content;
  --tooltip-d-height: max-content;
  --tooltip-d-outline: none;
  --tooltip-d-border: none;

  /* Component Variables */
  --tooltip-c-transition-duration: 0.4s;
  --tooltip-c-border-radius: 4px;
  --tooltip-c-padding: 2px 4px;
  --tooltip-c-position-x: calc(100% + 10px);
  --tooltip-c-position-y: 100%;
  --tooltip-c-box-shadow: 0px 3.2px 7.2px 0px rgba(0, 0, 0, 0.14),
      0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.1),
      0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);
  --tooltip-c-z-index: 10;
  --tooltip-c-max-width: max-content;
  --tooltip-c-width: max-content;
  --tooltip-c-height: max-content;
  --tooltip-c-outline: none;
  --tooltip-c-border: none;

  /* Colors */
  --tooltip-primary-color: #212121;
  --tooltip-primary-background: #fff;
  --tooltip-seconary-color: #fff;
  --tooltip-seconary-background: #475DEB;
  --tooltip-accent-color: #fff;
  --tooltip-accent-background: #212121;
  
  --tooltip-component-color: #212121;
  --tooltip-component-background: #fff;
}
```

## Contributing
I have a positive attitude towards PR and pull requests. Glad to see that people like the package.

- Creator: [@neluckoff](https://github.com/neluckoff)

## License

- Copyright © 2024 [neluckoff](https://github.com/neluckoff).
- This project is [MIT](https://github.com/neluckoff/vue3-tooltip/blob/master/LICENSE.md) licensed.