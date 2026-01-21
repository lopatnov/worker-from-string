$(function () {
    "use strict";

    /**
     * @lopatnov/worker-from-string demonstration
     * Example: Fibonacci calculation in a separate thread
     */

    // ============================================
    // Worker code - executes in a separate thread
    // ============================================
    var workerCode =
        '// @lopatnov/worker-from-string demo: Fibonacci calculation\n' +
        '// This code runs in a separate thread (Web Worker)\n\n' +
        `
self.onmessage = function(event) {
    const n = event.data;

    // Calculate the nth Fibonacci number
    function fibonacci(num) {
        if (num <= 1) return num;
        let a = 0, b = 1;
        for (let i = 2; i <= num; i++) {
            [a, b] = [b, a + b];
        }
        return b;
    }

    const result = fibonacci(n);
    const message = \`Fibonacci(\${n}) = \${result}\`;

    postMessage({
        success: true,
        message: message,
        value: result,
        number: n
    });
};
`;

    // ============================================
    // Browser code - uses workerFromString
    // ============================================
    var jsCode =
        '// Main browser code\n' +
        '// Creates a Worker from code string and sends data for processing\n\n' +
        `
function execute(workerString) {
    console.info('🚀 Starting Worker demonstration...');

    // Create a Worker from code string
    const worker = workerFromString(workerString);

    // Handle result from Worker
    worker.onmessage = function(event) {
        const result = event.data;
        if (result.success) {
            console.log('✅ ' + result.message);
            console.info('⏱️  Worker completed calculation');
        }
    };

    // Handle Worker errors
    worker.onerror = function(error) {
        console.error('❌ Worker error: ' + error.message);
    };

    // Send number for calculation
    const number = 40;
    console.info('📊 Calculating Fibonacci(' + number + ') in a separate thread...');
    worker.postMessage(number);
}
`;

    // ============================================
    // Initialize code editors
    // ============================================
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

    // ============================================
    // Execute button handler
    // ============================================

    $('#execute').click(function (event) {
        $('#log').html('<p class="bold">📋 Console Output</p>');
        try {
            var jsExec = new Function(`${jsCode}\n\nreturn execute`)();
            jsExec(workerCode);
        } catch (error) {
            console.error('Execution error: ' + error.message);
        }
    });

    // ============================================
    // Intercept console methods for logging
    // ============================================

    // console.log - standard logging
    const nativeLog = console.log;
    console.log = function () {
        nativeLog.apply(this, arguments);
        $('#log').append($('<pre>').text(Array.prototype.join.call(arguments, " ")));
    };

    // console.info - informational messages
    const nativeInfo = console.info;
    console.info = function () {
        nativeInfo.apply(this, arguments);
        $('#log').append($('<pre>').addClass('blue').text(Array.prototype.join.call(arguments, " ")));
    };

    // console.warn - warnings
    const nativeWarn = console.warn;
    console.warn = function () {
        nativeWarn.apply(this, arguments);
        $('#log').append($('<pre>').addClass('orange').text(Array.prototype.join.call(arguments, " ")));
    };

    // console.error - errors
    const nativeError = console.error;
    console.error = function () {
        nativeError.apply(this, arguments);
        $('#log').append($('<pre>').addClass('red').text(Array.prototype.join.call(arguments, " ")));
    };

    // ============================================
    // Run demonstration on load
    // ============================================

    $('#execute').click();

    // ============================================
    // Global error handler
    // ============================================

    window.onerror = function (msg, url, linenumber) {
        console.error('❌ JavaScript Error at line ' + linenumber + ': ' + msg);
        return true;
    };
});