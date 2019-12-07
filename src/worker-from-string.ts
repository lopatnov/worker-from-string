declare var BlobBuilder: any;
declare var WebKitBlobBuilder: any;
declare var MozBlobBuilder: any;

function workerFromString(...textValues: string[]): Worker {
  let text = textValues.join(""),
    blob: Blob;
  try {
    blob = new Blob([text], { type: "application/javascript" });
  } catch (e) {
    // Backwards-compatibility
    let blobBuilderClass =
      BlobBuilder ||
      WebKitBlobBuilder ||
      MozBlobBuilder;
    let blobBuilder = new blobBuilderClass();
    blobBuilder.append(text);
    blob = blobBuilder.getBlob();
  }
  var worker = new Worker(URL.createObjectURL(blob));
  return worker;
}

export default workerFromString;
