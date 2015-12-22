var YelpJS = require('yelp');
var tokens = require('./tokens')

var yelp = new YelpJS(tokens.yelpData);

// See http://www.yelp.com/developers/documentation/v2/search_api

exports.search = function(termSearch, locationSearch, coordinates, radius, callback) {
		yelp.search({ term: termSearch, location: locationSearch, cll: coordinates[0]+', '+coordinates[1], sort: 0, radius_filter: radius})
		.then(function (data) {
		  callback(data);
		})
		.catch(function (err) {
		  console.error(err);
		});
	}