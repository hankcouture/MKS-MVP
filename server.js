var http = require("http");
var express = require('express');
var fs = require('fs');

var port = process.env.PORT || 3000;
var ip = "127.0.0.1";
console.log("Listening on http://" + ip + ":" + port);

// Using Express.js
var app = express();

app.use(express.static('./public'));

app.listen(port);