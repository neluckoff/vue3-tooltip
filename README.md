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

## Installation
First, let's add a module to your project using **npm**:

```shell
npm install vue3-tooltip
```
Or you can install using yarn:

```shell
yarn add vue3-tooltip
```

Add dependencies to your `main.ts`:

```js
import { createApp } from 'vue'
import { TooltipDirective, TooltipComponent } from 'vue3-tooltip'

const app = createApp({...})
app.directive('tooltip', TooltipDirective)
app.component('tooltip', TooltipComponent) // in dev
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

## Style customization
To customize tooltips, you need to create a global style file using `CSS` or `Sass`. My example demonstrates this process:

```scss
.data-tooltip {
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

If you want to explore customization in more detail and change all the classes in the module, you should check them out at [this link](https://github.com/neluckoff/vue3-tooltip/blob/master/src/assets/main.css).

## Contributing
I have a positive attitude towards PR and pull requests. Glad to see that people like the package.

- Creator: [@neluckoff](https://github.com/neluckoff)

## License

- Copyright © 2024 [neluckoff](https://github.com/neluckoff).
- This project is [MIT](https://github.com/neluckoff/vue3-tooltip/blob/master/LICENSE.md) licensed.