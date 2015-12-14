var YelpJS = require('yelp');
var tokens = require('./tokens')

var yelp = new YelpJS(tokens.yelpData);

// See http://www.yelp.com/developers/documentation/v2/search_api

exports.search = function(termSearch, locationSearch, callback) {
		yelp.search({ term: termSearch, location: locationSearch, sort: 1 })
		.then(function (data) {
		  callback(data);
		})
		.catch(function (err) {
		  console.error(err);
		});
	}