# worker-from-string

String value to worker converter

# Install

```
npm i worker-from-string
```

## Import package to the project

```
import workerFromString from 'worker-from-string';
```

## Convert String values into Worker

**function workerFromString(...textValues: string[])**

Example

```
  var workerString = 'self.onmessage = ' + (function onmessage(e){
    postMessage('Hello ' + e.data);
  }).toString();

  var worker = workerFromString(workerString);

  worker.onmessage = function(e) {
      console.log(e.data); // expected 'Hello world' from worker after worker.postMessage('world')
  };

  worker.postMessage('world');
```

# Rights and Agreements

License [Apache-2.0](https://github.com/lopatnov/worker-from-string/blob/master/LICENSE)

Copyright 2019 Oleksandr Lopatnov
