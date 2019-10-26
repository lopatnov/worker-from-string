"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function workerFromString() {
    var textValues = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        textValues[_i] = arguments[_i];
    }
    var text = textValues.join(""), blob;
    try {
        blob = new Blob([text], { type: "application/javascript" });
    }
    catch (e) {
        // Backwards-compatibility
        var blobBuilderClass = BlobBuilder ||
            WebKitBlobBuilder ||
            MozBlobBuilder;
        var blobBuilder = new blobBuilderClass();
        blobBuilder.append(text);
        blob = blobBuilder.getBlob();
    }
    var worker = new Worker(URL.createObjectURL(blob));
    return worker;
}
exports.default = workerFromString;
//# sourceMappingURL=worker-from-string.js.map