# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2026-01-20

### Added

- CJS build (`dist/worker-from-string.cjs`)
- Minified UMD build (`dist/worker-from-string.min.js`) with source map
- QUnit browser-based unit tests (`test/worker-from-string.test.js`)
- CI workflow (`node-package-ci.yml`)
- `.editorconfig` for consistent code style

### Changed

- Rollup config fully rewritten in TypeScript (`rollup.config.ts`)
- Updated all devDependencies to latest versions (Rollup 4, TypeScript 5, Terser 5)
- TypeScript declarations moved to `dist/worker-from-string.d.ts`
- Updated `package.json`: added `exports` map, `engines`, `sideEffects: false`
- Overhauled README

### Removed

- Bower support (`.bowerrc`, `bower.json`)
- Legacy `dist/lib/` output directory
- `FUNDING.yml`

### Fixed

- `rollup-plugin-uglify` hook option added to test minified build (matching dist build config)

## [2.0.0] - 2021-07-09

### Changed

- Major dependency update (Rollup, TypeScript, related plugins)

## [1.3.4] - 2020-08-30

### Added

- `SECURITY.md` — security policy

### Changed

- Updated dependencies
- README improvements

## [1.3.3] - 2020-08-08

### Added

- `NOTICE.md` — third-party notices

### Changed

- Updated package description
- Updated dependencies

## [1.3.2] - 2019-12-07

### Changed

- Added `publishConfig: { access: "public" }` for scoped npm package

## [1.3.1] - 2019-12-07

### Added

- Terser integration for minification

## [1.3.0] - 2019-12-07

### Added

- Bower support
- Minified build via Bower

### Changed

- Switched minification tooling

## [1.2.3] - 2019-12-07

### Added

- GitHub Actions CI/CD workflow

## [1.2.2] - 2019-12-07

### Added

- `package-lock.json`
- GitHub release workflow

## [1.1.2] - 2019-11-20

### Added

- `CODE_OF_CONDUCT.md`
- `CONTRIBUTING.md`
- GitHub issue templates and pull request template

## [1.1.0] - 2019-11-17

### Added

- Initial public release with UMD and ES module builds
- TypeScript source and type declarations
- GitHub Pages demo

## [1.0.0] - 2019-10-26

### Added

- First working implementation: create Web Workers from strings using Blob + `URL.createObjectURL`
