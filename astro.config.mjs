import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  scopedStyleStrategy: 'class',
  root: './',
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'never'
  }
});
