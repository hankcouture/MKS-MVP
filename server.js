var http = require("http");
var fs = require('fs');
var express = require('express');
var yelp = require('./yelp');

// Using Express.js
var app = express();

app.set('port', (process.env.PORT || 3000));

// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.post('/', function(req, res) {
	res.setHeader('Content-Type', "application/json");
	req.on('data', function (data) {
        dataParsed = JSON.parse(data);
        console.log(dataParsed);
        yelp.search(dataParsed.term, dataParsed.location, function(data){
			res.end(JSON.stringify(data));
        });
    });
})

app.listen(app.get('port'), function(){
	console.log('Node app is running on port', app.get('port'));
});