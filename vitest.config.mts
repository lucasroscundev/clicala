import swc from 'unplugin-swc'
import { configDefaults, defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

export default defineConfig({
  test: {
    globals: true,
    root: './',
    exclude: [...configDefaults.exclude, 'packages/template/*'],
  },  
  plugins: [
    tsConfigPaths(),
    // This is required to build the test files with SWC
    swc.vite({
      // Explicitly set the module type to avoid inheriting this value from a `.swcrc` config file
      module: { type: 'es6' },
    }),    
  ],
  resolve: {
  alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
}
},
)
