var tokens = require('./tokens')
var foursquare = require('node-foursquare-venues')(tokens.foursquareData.client_ID, tokens.foursquareData.client_Secret)

exports.search = function(termSearch, coordinates, radius, callback) {
		foursquare.venues.explore({ ll: coordinates[0]+', '+coordinates[1], radius: radius, query: termSearch }, callback)
	}
