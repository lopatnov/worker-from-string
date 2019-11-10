import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import json from "rollup-plugin-json";
import { uglify } from "rollup-plugin-uglify";

const pkg = require("./package.json");

export default [{
  input: "src/worker-from-string.ts",
  output: [
    {
      file: pkg.main,
      name: "workerFromString",
      format: "umd",
      sourcemap: true
    },
    {
      file: 'test/worker-from-string.js',
      name: "workerFromString",
      format: "umd",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [...Object.keys(pkg.peerDependencies || {})],
  watch: {
    include: "src/**/*"
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({
      typescript: require("typescript"),
      useTsconfigDeclarationDir: true
    }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),
    // Resolve source maps to the original source
    sourceMaps()
  ]
}, {
  input: "src/worker-from-string.ts",
  output: {
    file: "dist/worker-from-string.min.js",
    format: "umd",
    name: "workerFromString",
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({
      typescript: require("typescript"),
      useTsconfigDeclarationDir: true
    }),
    uglify()
  ]
}];
