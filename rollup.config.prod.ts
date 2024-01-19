import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      dir: undefined,
      format: 'esm',
      file: './lib/index.esm.js'
    },
    {
      dir: undefined,
      format: 'cjs',
      file: './lib/index.cjs.js'
    },
    {
      dir: undefined,
      format: 'umd',
      file: './lib/index.umd.js',
      name: 'Vue3Hooks'
    },
    {
      dir: undefined,
      format: 'iife',
      file: './lib/index.min.js',
    },
  ],
  plugins: [
    terser(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    nodeResolve()
  ]
})