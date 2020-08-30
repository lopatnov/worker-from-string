# @lopatnov/worker-from-string

String value to [Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) object converter.

[![NPM version](https://badge.fury.io/js/%40lopatnov%2Fworker-from-string.svg)](https://www.npmjs.com/package/@lopatnov/worker-from-string)
[![License](https://img.shields.io/github/license/lopatnov/worker-from-string)](https://github.com/lopatnov/worker-from-string/blob/master/LICENSE)
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/@lopatnov/worker-from-string)](https://www.npmjs.com/package/@lopatnov/worker-from-string?activeTab=dependencies)
[![GitHub issues](https://img.shields.io/github/issues/lopatnov/worker-from-string)](https://github.com/lopatnov/worker-from-string/issues)
[![GitHub forks](https://img.shields.io/github/forks/lopatnov/worker-from-string)](https://github.com/lopatnov/worker-from-string/network)
[![GitHub stars](https://img.shields.io/github/stars/lopatnov/worker-from-string)](https://github.com/lopatnov/worker-from-string/stargazers)
![GitHub top language](https://img.shields.io/github/languages/top/lopatnov/worker-from-string)

[![Patreon](https://img.shields.io/badge/Donate-Patreon-informational)](https://www.patreon.com/lopatnov)
[![LinkedIn](https://img.shields.io/badge/-lopatnov-informational?style=flat&logo=linkedin)](https://www.linkedin.com/in/lopatnov/)
[![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40lopatnov%2Fworker-from-string)](https://twitter.com/intent/tweet?text=I%20want%20to%20share%20TypeScript%20library:&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40lopatnov%2Fworker-from-string)

[![npm](https://img.shields.io/npm/dt/@lopatnov/worker-from-string)](https://www.npmjs.com/package/@lopatnov/worker-from-string)

## Install

[![https://nodei.co/npm/@lopatnov/worker-from-string.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@lopatnov/worker-from-string.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@lopatnov/worker-from-string)

```shell
npm install @lopatnov/worker-from-string
```

[Browser](https://lopatnov.github.io/worker-from-string/dist/worker-from-string.min.js)

```html
<script src="https://lopatnov.github.io/worker-from-string/dist/worker-from-string.min.js"></script>
```

[Bower](//registry.bower.io/packages/worker-from-string)

```shell
bower install worker-from-string --save
```

## Import package to the project

### TypeScript

```typescript
import workerFromString from 'worker-from-string';
```

### JavaScript (npm package)

```javascript
var workerFromString = require("worker-from-string")
```

### JavaScript (browser)

```javascript
var workerFromString = window.workerFromString;
```

## Convert String values into Worker

```typescript
workerFromString(...textValues: string[]) => Worker
```

Example

```typescript
  var workerString = "self.onmessage = function onmessage(e){ postMessage('Hello ' + e.data); }";

  var worker = workerFromString(workerString);

  worker.onmessage = function(e) {
      console.log(e.data); // expected 'Hello world' from worker after worker.postMessage('world')
  };

  worker.postMessage('world');
```

## Demo

QUnit tests: [https://lopatnov.github.io/worker-from-string/test/index.html](//lopatnov.github.io/worker-from-string/test/index.html)

## Rights and Agreements

License [Apache-2.0](https://github.com/lopatnov/worker-from-string/blob/master/LICENSE)

Copyright 2019-2020 Oleksandr Lopatnov
