# worker-from-string

String value to worker converter

# Install

Node:

[npmjs repository](//www.npmjs.com/package/worker-from-string)

```shell
npm i worker-from-string
```

[github repository](//github.com/lopatnov/worker-from-string/packages)

```shell
npm install @lopatnov/worker-from-string
```

Browser:

```html
<script src="<path to library>/worker-from-string.js"></script>
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

# Rights and Agreements

License [Apache-2.0](https://github.com/lopatnov/worker-from-string/blob/master/LICENSE)

Copyright 2019 Oleksandr Lopatnov
