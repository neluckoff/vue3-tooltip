// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///V:/Projects/vue3-tooltips/node_modules/vite/dist/node/index.js";
import vue from "file:///V:/Projects/vue3-tooltips/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///V:/Projects/vue3-tooltips/node_modules/vite-plugin-dts/dist/index.mjs";
import cssInjectedByJsPlugin from "file:///V:/Projects/vue3-tooltips/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
var __vite_injected_original_dirname = "V:\\Projects\\vue3-tooltips";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin({ useStrictCSP: true }),
    dts({ rollupTypes: true })
  ],
  build: {
    lib: {
      name: "vue3-tooltip",
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      fileName: (format) => `vue3-tooltip.${format}.js`
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJWOlxcXFxQcm9qZWN0c1xcXFx2dWUzLXRvb2x0aXBzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJWOlxcXFxQcm9qZWN0c1xcXFx2dWUzLXRvb2x0aXBzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9WOi9Qcm9qZWN0cy92dWUzLXRvb2x0aXBzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogWyBcclxuICAgIHZ1ZSgpLFxyXG4gICAgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luKHsgdXNlU3RyaWN0Q1NQOiB0cnVlIH0pLCBcclxuICAgIGR0cyh7IHJvbGx1cFR5cGVzOiB0cnVlIH0pLFxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGxpYjoge1xyXG4gICAgICBuYW1lOiAndnVlMy10b29sdGlwJyxcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXHJcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgdnVlMy10b29sdGlwLiR7Zm9ybWF0fS5qc2AsXHJcbiAgICB9LFxyXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxyXG4gICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQW1RLFNBQVMsZUFBZTtBQUMzUixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sMkJBQTJCO0FBSmxDLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLHNCQUFzQixFQUFFLGNBQWMsS0FBSyxDQUFDO0FBQUEsSUFDNUMsSUFBSSxFQUFFLGFBQWEsS0FBSyxDQUFDO0FBQUEsRUFDM0I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsVUFBVSxDQUFDLFdBQVcsZ0JBQWdCLE1BQU07QUFBQSxJQUM5QztBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
