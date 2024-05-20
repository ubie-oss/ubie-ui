import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  entry: ['src', '!src/**/*.spec.*', '!src/**/*.d.ts', '!src/**/*.test.tsx'],
  external: ['react'],
  bundle: false,
  plugins: [
    {
      name: 'fix-esm',
      renderChunk(_, chunk) {
        if (this.format === 'esm') {
          // https://github.com/egoist/tsup/issues/953
          const code = addMjsExtension(chunk.code);
          return { code };
        }
      },
    },
  ],
});

function addMjsExtension(content) {
  // This regex looks for relative import paths that don't have a file extension
  return content.replace(/from\s+['"](\.\/|\.\.\/)(?![^'"\s]+?\/)['"]([^'"\s]+?)['"];/g, "from '$1$2.mjs';");
}
