import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { glob } from 'glob';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { htmlplus } from './transformer/plugins/rollup';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: glob.sync('./src/components/*/*.tsx'),
  output: [
    {
      format: 'es',
      dir: 'dist/esm',
      chunkFileNames: '[name].js',
      manualChunks(id) {

        const matcher = path.join('src/components/');

        if (id.includes(matcher) && id.endsWith('.tsx')) return path.basename(id);

        return 'core';
      },
    },
    // {
    //   format: 'cjs',
    //   dir: 'dist/cjs',
    //   exports: 'default',
    // },
    // {
    //   format: 'umd',
    //   dir: 'dist/umd',
    //   name: 'htmlplus',
    // },
  ],
  plugins: [
    htmlplus({
      prefix: 'plus',
      docs: {
        docs: 'json/docs.json',
        vscode: 'json/html.html-data.json',
      },
      preprocess: {
        scss: {
          includePaths: ['./src/styles'],
        },
      },
    }),

    resolve({
      browser: true,
    }),

    commonjs(),

    typescript(),

    terser(),
  ],
};

export default config;