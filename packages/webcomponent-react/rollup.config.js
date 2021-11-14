import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs';

const OUTPUT_FOLDER = "build/";
const DOC_FOLDER = "docs/";

const plugins = [
    nodeResolve({
        extensions: [".js", ".jsx"],
    }),
    babel({
    presets: ["@babel/preset-react"],
    }),
    commonjs(),
]

export default [{
    input: 'src/index.jsx',
    output: {
      file: `${OUTPUT_FOLDER}bundle.js`,
      format: "iife",
      sourcemap: true,
    },
    plugins
  },
  {
    input: 'src/index.jsx',
    output: {
      file: `${DOC_FOLDER}bundle.js`,
      format: 'cjs',
      format: "iife",
      sourcemap: true,
    },
    plugins
  }
];