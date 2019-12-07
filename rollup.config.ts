import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import json from "rollup-plugin-json";
import uglify from "@lopatnov/rollup-plugin-uglify";

const pkg = require("./package.json");

export default [
  {
    input: "src/worker-from-string.ts",
    output: [
      {
        file: pkg.main,
        name: "workerFromString",
        format: "umd",
        sourcemap: true
      },
      {
        file: "test/worker-from-string.js",
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
    external: [...Object.keys(pkg.peerDependencies || {})],
    watch: {
      include: "src/**/*"
    },
    plugins: [
      json(),
      typescript({
        typescript: require("typescript"),
        useTsconfigDeclarationDir: true
      }),
      commonjs(),
      resolve(),
      sourceMaps()
    ]
  },
  {
    input: "src/worker-from-string.ts",
    output: [
      {
        file: "test/worker-from-string.min.js",
        name: "workerFromString",
        format: "umd"
      }
    ],
    external: [
      ...Object.keys(pkg.devDependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    watch: {
      include: "src/**/*"
    },
    plugins: [
      json(),
      typescript({
        typescript: require("typescript"),
        useTsconfigDeclarationDir: true
      }),
      commonjs(),
      resolve(),
      uglify()
    ]
  }
];
