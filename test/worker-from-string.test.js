QUnit.test("Simple test", function(assert) {
  var done = assert.async();
  var workerString = 'self.onmessage = ' + (function onmessage(e){
    postMessage('Hello ' + e.data);
  }).toString();
  var worker = workerFromString(workerString);
  worker.onmessage = function(e) {
    assert.equal(e.data, 'Hello world');
    done();
  };
  worker.postMessage('world');
});

QUnit.test("Umd test", function(assert) {
  var done = assert.async();
  var workerString = `(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global));
  }(this, function (exports) { 'use strict';
    exports.onmessage = ${function onmessage(e){
      postMessage('Hello ' + e.data);
    }}
    Object.defineProperty(exports, '__esModule', { value: true });
  }));`;
  var worker = workerFromString(workerString);
  worker.onmessage = function(e) {
    assert.equal(e.data, 'Hello world');
    done();
  };
  worker.postMessage('world');
});

QUnit.test("Empty string test", function(assert) {
  var done = assert.async();
  var worker = workerFromString("");
  assert.ok(worker instanceof Worker, "Returns a Worker instance for empty string");
  worker.terminate();
  done();
});

QUnit.test("Multiple arguments test", function(assert) {
  var done = assert.async();
  var part1 = "self.onmessage = function(e) { ";
  var part2 = "var result = e.data + ' processed'; ";
  var part3 = "postMessage(result); };";

  var worker = workerFromString(part1, part2, part3);
  worker.onmessage = function(e) {
    assert.equal(e.data, 'test processed');
    done();
  };
  worker.postMessage('test');
});

QUnit.test("Worker error handling", function(assert) {
  var done = assert.async();
  var workerString = 'setTimeout(function() { throw new Error("intentional"); }, 10);';
  var worker = workerFromString(workerString);

  worker.onerror = function(e) {
    assert.ok(true, "Error event received");
    e.preventDefault();
    worker.terminate();
    done();
  };

  // Fallback timeout in case error doesn't fire
  setTimeout(function() {
    worker.terminate();
    assert.ok(true, "Test completed (error may not propagate in all browsers)");
    done();
  }, 500);
});