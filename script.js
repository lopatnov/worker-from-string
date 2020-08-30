$(function () {
    "use strict"

    var workerCode =
        '// Author: O.Lopatnov\n' +
        '// @lopatnov/worker-from-string library demo\n' +
        '// Library link: https://github.com/lopatnov/worker-from-string\n' +
        '// Pay attention that all code is editable\n\n' +
        '// Worker code (workerString variable)\n' +
        `
self.onmessage = function onmessage(e){
    postMessage('Hello ' + e.data);
}
`;

    var jsCode = '// JavaScript Browser code\n' +
        `
function execute(workerString) {
    var worker = workerFromString(workerString);

    worker.onmessage = function(e) {
        console.log(e.data); // expected 'Hello world' from worker after worker.postMessage('world')
    };

    worker.postMessage('world');
}
`;

    const workerFlask = new CodeFlask('#worker_editor', { language: 'js' });

    workerFlask.onUpdate((code) => {
        workerCode = code;
    });

    workerFlask.updateCode(workerCode);

    const jsFlask = new CodeFlask('#js_editor', { language: 'js' });

    jsFlask.onUpdate((code) => {
        jsCode = code;
    });

    jsFlask.updateCode(jsCode);

    $('#execute').click(function (event) {
        $('#log').html('<p class="bold">Console Log</p>');
        var jsExec = new Function(`${jsCode}\n\nreturn execute`)();
        jsExec(workerCode);
    });

    const nativeLog = console.log;
    console.log = function () {
        nativeLog.apply(this, arguments);
        $('#log').append($('<pre>').text(Array.prototype.join.call(arguments, " ")));
    }

    const nativeInfo = console.info;
    console.info = function () {
        nativeInfo.apply(this, arguments);
        $('#log').append($('<pre>').addClass('blue').text(Array.prototype.join.call(arguments, " ")));
    }

    const nativeWarn = console.warn;
    console.warn = function () {
        nativeWarn.apply(this, arguments);
        $('#log').append($('<pre>').addClass('orange').text(Array.prototype.join.call(arguments, " ")));
    }

    const nativeError = console.error;
    console.error = function () {
        nativeError.apply(this, arguments);
        $('#log').append($('<pre>').addClass('red').text(Array.prototype.join.call(arguments, " ")));
    }

    $('#execute').click();

    window.onerror = function (msg, url, linenumber) {
        console.error('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
        return true;
    }
});