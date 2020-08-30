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