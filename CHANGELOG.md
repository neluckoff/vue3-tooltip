# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [2.3.0] - 2025-11-11

### Added
- 🎯 **Auto-Positioning**: Tooltips automatically adjust position to stay within viewport
  - Component prop: `autoPosition`
  - Directive modifier: `.auto` or `.autoPosition`
  - Intelligently flips to opposite or alternative positions when tooltip would overflow
- 📱 **Adaptive Touch Support**: Smart behavior for touch devices
  - Component prop: `adaptiveTouch`
  - Directive modifier: `.touch` or `.adaptive`
  - Click to show/hide on mobile devices
  - Hover behavior on desktop
  - Outside click to close on touch devices
- ⚙️ **Customizable Z-Index**: All z-index values now use CSS variables
  - `--tooltip-d-z-index-base`: Base z-index for tooltip triggers (default: 1)
  - `--tooltip-d-z-index-hover`: Z-index for triggers on hover (default: 9998)
  - `--tooltip-c-z-index-hover`: Z-index for component triggers on hover (default: 9998)
- 📚 Comprehensive documentation for new features
  - `.github/NEW_FEATURES.md`: Detailed guide for auto-positioning and touch support
  - `.github/Z_INDEX_GUIDE.md`: Complete z-index customization guide
- 🧪 Extended test coverage for directive behavior
- 🤖 Automated testing and publishing workflows
  - CI/CD with GitHub Actions
  - NPM auto-publishing on release
  - Test coverage reporting
  - Dependabot integration

### Changed
- ♻️ **Improved Directive Implementation**
  - Better TypeScript typing with strict interfaces
  - Proper cleanup on unmount (fixes memory leaks)
  - More maintainable code structure with separated concerns
  - Cleaner class management (no class accumulation on updates)
- 🎨 **Enhanced Styling**
  - Increased z-index from 10 to 9999 for better layering
  - Improved shadows for better depth perception
  - Larger padding (6px 12px instead of 2px 4px) for better readability
  - More rounded corners (6px instead of 4px)
  - Faster animations (0.3s instead of 0.4s)
  - Smoother transitions with ease-in-out timing
  - Added `will-change` and `backface-visibility` for performance
- 📋 **Better Issue Templates**
  - Bug report template
  - Feature request template
  - Question template
- 🤝 **Contributing Guidelines**
  - Clear contribution guide
  - Code of conduct
  - Pull request template

### Fixed
- 🐛 Fixed directive not cleaning up classes on update
- 🐛 Fixed directive not removing classes on unmount
- 🐛 Fixed hardcoded z-index values preventing customization
- 🐛 Fixed tooltip potentially overlapping with other high z-index elements

### Performance
- ⚡ Added `will-change` for GPU acceleration
- ⚡ Optimized transition timings
- ⚡ Auto-positioning calculated only when tooltip shows (~1-2ms)
- ⚡ Touch detection performed once on mount (zero runtime cost)

### Breaking Changes
- None! All changes are backward compatible
- New features are opt-in with default values matching previous behavior

### Bundle Size
- ES Module: 3.24 kB → 7.80 kB (+4.56 kB)
- UMD: 2.59 kB → 5.87 kB (+3.28 kB)
- **Gzipped: 1.26 kB → 2.51 kB (+1.25 kB)**
- CSS: 6.86 kB → 7.13 kB (+0.27 kB)

*Size increase is minimal considering the added functionality. Features are tree-shakeable if not used.*

---

## [2.2.4] - Previous Release

### Features
- Basic tooltip directive
- Tooltip component
- Multiple position options (top, bottom, left, right)
- Color variants (primary, secondary, accent)
- Clickable tooltips
- Custom styling via CSS variables

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

---

## Migration Guide

### From 2.2.4 to 2.3.0

**No breaking changes!** Simply update and optionally use new features:

#### Enable Auto-Positioning

**Before:**
```vue
<tooltip position="bottom">
  <template #text>Text</template>
  <template #tooltip>Tooltip</template>
</tooltip>
```

**After (optional enhancement):**
```vue
<tooltip position="bottom" :auto-position="true">
  <template #text>Text</template>
  <template #tooltip>Tooltip</template>
</tooltip>
```

#### Enable Touch Support

**Before:**
```vue
<button v-tooltip="'My tooltip'">
  Hover me
</button>
```

**After (optional enhancement):**
```vue
<button v-tooltip.touch="'My tooltip'">
  Hover or tap me
</button>
```

#### Customize Z-Index

**Before:** Z-index was hardcoded to 10

**After:** Override via CSS variables:
```css
:root {
  --tooltip-d-z-index: 99999;        /* Tooltip popup */
  --tooltip-d-z-index-hover: 99998;  /* Trigger on hover */
  --tooltip-d-z-index-base: 1;       /* Trigger default */
}
```

---

## Roadmap

### Planned Features
- [ ] Arrow/pointer on tooltips
- [ ] Delay configuration for show/hide
- [ ] Custom trigger events
- [ ] ARIA attributes for accessibility
- [ ] HTML content support
- [ ] Max-width auto-adjustment
- [ ] Animation customization
- [ ] Portal/Teleport support

### Community Requests
Have an idea? [Open an issue](https://github.com/neluckoff/vue3-tooltip/issues)!

---

## Contributors

- [@neluckoff](https://github.com/neluckoff) - Creator and maintainer

Want to contribute? Check out our [Contributing Guide](.github/CONTRIBUTING.md)!

---

## Links

- [GitHub Repository](https://github.com/neluckoff/vue3-tooltip)
- [NPM Package](https://www.npmjs.com/package/vue3-tooltip)
- [Documentation](.github/NEW_FEATURES.md)
- [Report Bug](https://github.com/neluckoff/vue3-tooltip/issues/new?template=bug_report.md)
- [Request Feature](https://github.com/neluckoff/vue3-tooltip/issues/new?template=feature_request.md)

