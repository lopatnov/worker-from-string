import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import uglify from "@lopatnov/rollup-plugin-uglify";
import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf8"));

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * Copyright 2019-2026 ${pkg.author.name}
 * Licensed under ${pkg.license}
 *
 */`;

export default [
  // UMD build (dist) + minified
  {
    input: "src/worker-from-string.ts",
    output: [
      {
        file: "dist/worker-from-string.js",
        name: "workerFromString",
        format: "umd",
        sourcemap: true,
        banner,
      },
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],
    watch: {
      include: "src/**/*",
    },
    plugins: [
      json(),
      typescript({
        declaration: true,
        declarationDir: "dist",
      }),
      commonjs(),
      resolve(),
    ],
  },
  // UMD minified build (dist)
  {
    input: "src/worker-from-string.ts",
    output: {
      file: "dist/worker-from-string.min.js",
      name: "workerFromString",
      format: "umd",
      sourcemap: true,
      banner,
    },
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      json(),
      typescript({ declaration: false }),
      commonjs(),
      resolve(),
      uglify({
        hook: "renderChunk",
      }),
    ],
  },
  // ES module build (dist)
  {
    input: "src/worker-from-string.ts",
    output: {
      file: pkg.module,
      format: "es",
      sourcemap: true,
      banner,
    },
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      json(),
      typescript({ declaration: false }),
      commonjs(),
      resolve(),
    ],
  },
  // CJS build (dist)
  {
    input: "src/worker-from-string.ts",
    output: {
      file: "dist/worker-from-string.cjs",
      format: "cjs",
      sourcemap: true,
      exports: "auto",
      banner,
    },
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      json(),
      typescript({ declaration: false }),
      commonjs(),
      resolve(),
    ],
  },
  // Test build (unminified)
  {
    input: "src/worker-from-string.ts",
    output: {
      file: "test/worker-from-string.js",
      name: "workerFromString",
      format: "umd",
      sourcemap: true,
    },
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      json(),
      typescript({ declaration: false }),
      commonjs(),
      resolve(),
    ],
  },
  // Test build (minified)
  {
    input: "src/worker-from-string.ts",
    output: {
      file: "test/worker-from-string.min.js",
      name: "workerFromString",
      format: "umd",
    },
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      json(),
      typescript({ declaration: false }),
      commonjs(),
      resolve(),
      uglify({
        hook: "renderChunk",
      }),
    ],
  },
];
