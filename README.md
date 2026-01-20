# @lopatnov/worker-from-string

[![npm](https://img.shields.io/npm/dt/@lopatnov/worker-from-string)](https://www.npmjs.com/package/@lopatnov/worker-from-string)
[![NPM version](https://badge.fury.io/js/%40lopatnov%2Fworker-from-string.svg)](https://www.npmjs.com/package/@lopatnov/worker-from-string)
[![License](https://img.shields.io/github/license/lopatnov/worker-from-string)](https://github.com/lopatnov/worker-from-string/blob/master/LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/lopatnov/worker-from-string/node-package-ci.yml)](https://github.com/lopatnov/worker-from-string/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![GitHub stars](https://img.shields.io/github/stars/lopatnov/worker-from-string)](https://github.com/lopatnov/worker-from-string/stargazers)

A library that converts string values into [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) objects in the browser.

## Installation

```bash
npm install @lopatnov/worker-from-string
```

### Browser (CDN)

```html
<!-- Development version -->
<script src="https://lopatnov.github.io/worker-from-string/dist/worker-from-string.js"></script>

<!-- Production (minified) version -->
<script src="https://lopatnov.github.io/worker-from-string/dist/worker-from-string.min.js"></script>
```

## Usage

### ES Modules

```typescript
import workerFromString from "@lopatnov/worker-from-string";
```

### CommonJS

```javascript
const workerFromString = require("@lopatnov/worker-from-string");
```

### Browser (UMD)

```javascript
const workerFromString = window.workerFromString;
```

## API

### workerFromString(...textValues: string[]): Worker

Creates a Web Worker from string values.

| Parameter | Type | Description |
|-----------|------|-------------|
| `textValues` | `string[]` | One or more strings containing the worker code |

**Returns:** `Worker` - A new Web Worker instance

## Examples

### Basic Usage

```typescript
const workerCode = `
  self.onmessage = function(e) {
    postMessage('Hello ' + e.data);
  };
`;

const worker = workerFromString(workerCode);

worker.onmessage = function(e) {
  console.log(e.data); // "Hello world"
};

worker.postMessage('world');
```

### Multiple String Arguments

```typescript
const imports = "importScripts('https://example.com/lib.js');";
const logic = "self.onmessage = function(e) { postMessage(process(e.data)); };";

const worker = workerFromString(imports, logic);
```

### With TypeScript

```typescript
import workerFromString from "@lopatnov/worker-from-string";

const worker = workerFromString(`
  self.onmessage = (e: MessageEvent) => {
    const result = e.data * 2;
    postMessage(result);
  };
`);

worker.onmessage = (e: MessageEvent) => {
  console.log('Result:', e.data);
};

worker.postMessage(21);
```

## Demo

- **Live Editor:** [https://lopatnov.github.io/worker-from-string/](https://lopatnov.github.io/worker-from-string/)
- **QUnit Tests:** [https://lopatnov.github.io/worker-from-string/test/index.html](https://lopatnov.github.io/worker-from-string/test/index.html)

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[Apache-2.0](LICENSE)

Copyright 2019-2026 Oleksandr Lopatnov

---

### Author

**Oleksandr Lopatnov**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/lopatnov/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/lopatnov)

If you find this project useful, please consider giving it a star on GitHub!
