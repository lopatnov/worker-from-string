var express = require('express');
var app = express();

app.use(express.static('test'));

console.log('Open localhost:5000/index.html');
var server = app.listen(5000);