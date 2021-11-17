import resolve from 'rollup-plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from 'rollup-plugin-replace';

const OUTPUT_FOLDER = 'build/';
const DOC_FOLDER = 'docs/';

const production = process.env.NODE_ENV === 'prod';

const plugins = [
  resolve({
    browser: true,
    extensions: ['.js', '.jsx', '.json'],
  }),
  babel({
    presets: ['@babel/preset-react'],
    exclude: 'node_modules/**',
  }),
  commonjs(),
  replace({
    'process.env.NODE_ENV': production
      ? JSON.stringify('production')
      : JSON.stringify('development'),
  }),
];

export default [{
  input: 'src/index.jsx',
  output: {
    file: `${OUTPUT_FOLDER}bundle.js`,
    format: 'iife',
    sourcemap: true,
  },
  plugins,
},
{
  input: 'src/index.jsx',
  output: {
    file: `${DOC_FOLDER}bundle.js`,
    format: 'iife',
    sourcemap: true,
  },
  plugins,
},
];
