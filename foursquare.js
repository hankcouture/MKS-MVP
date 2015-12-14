var tokens = require('./tokens')
var foursquare = require('node-foursquare-venues')(tokens.foursquareData.client_ID, tokens.foursquareData.client_Secret)

exports.search = function(termSearch, locationSearch, callback) {
		foursquare.venues.explore({ near: locationSearch, query: termSearch }, callback)
	}
