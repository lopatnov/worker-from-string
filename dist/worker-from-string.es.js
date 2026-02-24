/*!
 * @lopatnov/worker-from-string v2.1.0
 * Copyright 2019-2026 Oleksandr Lopatnov
 * Licensed under Apache-2.0
 *
 */
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

export { workerFromString as default };
//# sourceMappingURL=worker-from-string.es.js.map
