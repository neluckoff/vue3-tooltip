# Tests 🧪

This directory contains unit tests for the Vue3 Tooltip package.

## Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## Test Structure

- `directive.test.ts` - Tests for the tooltip directive
- `component.test.ts` - Tests for the tooltip component

## Writing Tests

We use:
- **Vitest** - Fast testing framework
- **@vue/test-utils** - Vue component testing utilities
- **happy-dom** - Lightweight DOM implementation

Example:
```typescript
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import YourComponent from '../src/components/YourComponent.vue';

describe('YourComponent', () => {
  it('should render correctly', () => {
    const wrapper = mount(YourComponent);
    expect(wrapper.exists()).toBe(true);
  });
});
```

