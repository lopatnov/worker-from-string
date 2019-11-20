# worker-from-string

[![NPM version](https://badge.fury.io/js/worker-from-string.svg)](https://badge.fury.io/js/worker-from-string)
![License](https://img.shields.io/github/license/lopatnov/jsToString)
[![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%worker-from-string)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%worker-from-string)

String value to worker converter

# Install

Node:

[NPM repository](//www.npmjs.com/package/worker-from-string)

[![https://nodei.co/npm/worker-from-string.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/worker-from-string.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/worker-from-string)

```shell
npm i worker-from-string
```

[GitHub repository](//github.com/lopatnov/worker-from-string/packages)

```shell
npm install @lopatnov/worker-from-string
```

[Browser](//lopatnov.github.io/worker-from-string/dist/worker-from-string.min.js)

```html
<script src="//lopatnov.github.io/worker-from-string/dist/worker-from-string.min.js"></script>
```

## Import package to the project

```typescript
import workerFromString from 'worker-from-string';
```
or
```javascript
var workerFromString = require("worker-from-string")
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

# Demo

QUnit tests: [https://lopatnov.github.io/worker-from-string/test/index.html](//lopatnov.github.io/worker-from-string/test/index.html)

# Rights and Agreements

License [Apache-2.0](https://github.com/lopatnov/worker-from-string/blob/master/LICENSE)

Copyright 2019 Oleksandr Lopatnov
