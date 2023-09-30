const { defineConfig } = require('tsup');

module.exports = defineConfig({
  entry: ['src/index.ts', 'src/entrypoints.ts', 'src/*/index.ts'],
  outDir: 'dist',
  target: 'es2022',
  format: ['cjs'],
  shims: true,
  cjsInterop: true,
  minify: false,
  keepNames: true,
  dts: true,
  treeshake: false,
});
