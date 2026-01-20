/*!
 * @lopatnov/worker-from-string v2.0.0
 * Copyright 2019-2026 lopatnov
 * Licensed under Apache-2.0
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.workerFromString = factory());
})(this, (function () { 'use strict';

    function workerFromString(...textValues) {
        let text = textValues.join(""), blob;
        try {
            blob = new Blob([text], { type: "application/javascript" });
        }
        catch (e) {
            // Backwards-compatibility
            let blobBuilderClass = BlobBuilder ||
                WebKitBlobBuilder ||
                MozBlobBuilder;
            let blobBuilder = new blobBuilderClass();
            blobBuilder.append(text);
            blob = blobBuilder.getBlob();
        }
        var worker = new Worker(URL.createObjectURL(blob));
        return worker;
    }

    return workerFromString;

}));
//# sourceMappingURL=worker-from-string.js.map
