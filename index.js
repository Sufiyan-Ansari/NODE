var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Sufiyan');
})

var server = app.listen(80, function () {
   console.log("Express App running at http://127.0.0.1:80/");
})