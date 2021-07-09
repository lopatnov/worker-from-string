# @lopatnov/worker-from-string [![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40lopatnov%2Fworker-from-string)](https://twitter.com/intent/tweet?text=I%20want%20to%20share%20TypeScript%20library:&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40lopatnov%2Fworker-from-string)

String value to [Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) object converter.

[![NPM version](https://badge.fury.io/js/%40lopatnov%2Fworker-from-string.svg)](https://www.npmjs.com/package/@lopatnov/worker-from-string)
[![License](https://img.shields.io/github/license/lopatnov/worker-from-string)](https://github.com/lopatnov/worker-from-string/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/lopatnov/worker-from-string)](https://github.com/lopatnov/worker-from-string/issues)
[![GitHub forks](https://img.shields.io/github/forks/lopatnov/worker-from-string)](https://github.com/lopatnov/worker-from-string/network)
[![GitHub stars](https://img.shields.io/github/stars/lopatnov/worker-from-string)](https://github.com/lopatnov/worker-from-string/stargazers)
![GitHub top language](https://img.shields.io/github/languages/top/lopatnov/worker-from-string)

[![Patreon](https://img.shields.io/badge/Donate-Patreon-informational)](https://www.patreon.com/lopatnov)
[![LinkedIn](https://img.shields.io/badge/-lopatnov-informational?style=flat&logo=linkedin)](https://www.linkedin.com/in/lopatnov/)
[![sobe.ru](https://img.shields.io/static/v1?label=sobe.ru&message=%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0%D1%80%D0%BD%D0%BE%D1%81%D1%82%D1%8C&color=yellow&logo=data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAArlBMVEUAAAD//////////////////////////////////////////////////////////////////PP/3l7/9c//0yb/zAD/6ZP/zQf/++7/3FD/88X/0h7//v7/5oX/zATUqQDktgD/5HjQpgAFBACQcwD/zw/fsgCOcQD6yADZrQD2xAD8yQDnuADxwADcsADbrwDpugD3xQD5xwDjtQDywQD+ywD9ygDvvwD7yAD/1jRaObVGAAAAEHRSTlMAA3zg707pEJP8MMUBYN5fiwXJMQAAAAFiS0dEAf8CLd4AAAAHdElNRQflBgMAAxO4O2jCAAAAuElEQVQoz42S1w7CMAxFS8ueYZgNLZuyRynw/z9GdtxIkbgPceQT6Tq2vZwfEKx8wRPyiaViSYDABqQsAMq0OzxUqhbo9kBcavUM6A9AAtJAYDgC0ID7i+t4AghwfxanszlAGBnA/Flc0MfL1doA5s/ChoLtbg8QI392gpIBzf/AwYAWAsdTrIE05/nz5Xq7S6DKpenHM0pe+o/qg5Am74/0ybTkm+q6wG4iltV2LTko52idy+Banx9RYiS6Vrsc3AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNi0wM1QwMDowMzoxOCswMDowMLvSSCkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDYtMDNUMDA6MDM6MTgrMDA6MDDKj/CVAAAAAElFTkSuQmCC)](https://sobe.ru/na/tech_knigi)

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

Worker Code Editor Demo: [https://lopatnov.github.io/worker-from-string/](https://lopatnov.github.io/worker-from-string/)

QUnit tests: [https://lopatnov.github.io/worker-from-string/test/index.html](//lopatnov.github.io/worker-from-string/test/index.html)

## Rights and Agreements

License [Apache-2.0](https://github.com/lopatnov/worker-from-string/blob/master/LICENSE)

Copyright 2019-2020 Oleksandr Lopatnov
