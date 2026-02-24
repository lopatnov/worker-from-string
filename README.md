# @lopatnov/worker-from-string

> A library that converts string values into [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) objects in the browser.
> Create dynamic Web Workers at runtime without separate script files.

[![npm downloads](https://img.shields.io/npm/dt/@lopatnov/worker-from-string)](https://www.npmjs.com/package/@lopatnov/worker-from-string)
[![npm version](https://badge.fury.io/js/%40lopatnov%2Fworker-from-string.svg)](https://www.npmjs.com/package/@lopatnov/worker-from-string)
[![License](https://img.shields.io/github/license/lopatnov/worker-from-string)](https://github.com/lopatnov/worker-from-string/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/lopatnov/worker-from-string)](https://github.com/lopatnov/worker-from-string/issues)
[![GitHub stars](https://img.shields.io/github/stars/lopatnov/worker-from-string)](https://github.com/lopatnov/worker-from-string/stargazers)

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)
- [Demo](#demo)
- [Contributing](#contributing)
- [Built With](#built-with)
- [License](#license)

---

## Installation

```bash
npm install @lopatnov/worker-from-string
```

**Browser (CDN):**

```html
<!-- Development version -->
<script src="https://lopatnov.github.io/worker-from-string/dist/worker-from-string.js"></script>

<!-- Production (minified) version -->
<script src="https://lopatnov.github.io/worker-from-string/dist/worker-from-string.min.js"></script>
```

---

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

---

## API

### `workerFromString(...textValues: string[]): Worker`

Creates a Web Worker from string values.

| Parameter    | Type       | Description                                    |
|--------------|------------|------------------------------------------------|
| `textValues` | `string[]` | One or more strings containing the worker code |

**Returns:** `Worker` — a new Web Worker instance.

---

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

---

## Demo

- **Live Editor:** [https://lopatnov.github.io/worker-from-string/](https://lopatnov.github.io/worker-from-string/)
- **QUnit Tests:** [https://lopatnov.github.io/worker-from-string/test/index.html](https://lopatnov.github.io/worker-from-string/test/index.html)

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

- Bug reports → [open an issue](https://github.com/lopatnov/worker-from-string/issues)
- Questions → [Discussions](https://github.com/lopatnov/worker-from-string/discussions)
- Found it useful? A [star on GitHub](https://github.com/lopatnov/worker-from-string) helps others discover the project

---

## Built With

- [TypeScript](https://www.typescriptlang.org/) — strict typing throughout
- [Rollup](https://rollupjs.org/) — bundled to ESM, CJS, and UMD formats
- [QUnit](https://qunitjs.com/) — browser-based unit testing framework
- [Blob API](https://developer.mozilla.org/en-US/docs/Web/API/Blob) — in-memory worker script creation
- [URL.createObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static) — dynamic worker URL generation

---

## License

[Apache-2.0](https://github.com/lopatnov/worker-from-string/blob/master/LICENSE) © 2019–2026 [Oleksandr Lopatnov](https://github.com/lopatnov) · [LinkedIn](https://www.linkedin.com/in/lopatnov/)
