var http = require("http");
var fs = require('fs');
var express = require('express');
var yelp = require('./yelp');
var foursquare = require('./foursquare');

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
        yelp.search(dataParsed.term, dataParsed.location, dataParsed.coordinates, dataParsed.radius, function(yData){
        	var yelpData = yData;
        	foursquare.search(dataParsed.term, dataParsed.coordinates, dataParsed.radius, function(err, fData) {
	        	var foursquareData = fData;
	        	var results = {
	        		Yelp: yData,
	        		Foursquare: fData
	        	};
				res.end(JSON.stringify(results));
        	})
        });
    });
})

app.listen(app.get('port'), function(){
	console.log('Node app is running on port', app.get('port'));
});