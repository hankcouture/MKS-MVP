var neighborhoods = angular.module('mvp.neighborhoods', [])

neighborhoods.controller('NeighborhoodController', ['$scope', '$http', '$state', 'Helpers', function($scope, $http, $state, Helpers) {

	$scope.hoods = [];

  	$scope.cities = [["New York City", "NYC", "New York City"],["Chicago", "Chicago", "Chicago"],["San Francisco", "SF", "San Francisco"],
  					["Austin", "Austin", "Austin"],["Boston", "Boston", "MA"],["Los Angeles", "LA", "Los Angeles"]];

	$scope.data = {
		"New York City": {
			Neighborhoods: [ // Whole Neighborhood needs map checking
				["SoHo", "New York City", [40.723885, -74.002854], 600, 16],
				["Gramercy Park", "New York City", [40.736243, -73.985002], 600, 16],
				["Lower East Side", "New York City", [40.720291, -73.989164], 600, 16],
				["Alphabet City", "New York City", [40.725462, -73.982212], 600, 16],
				["Flatiron", "New York City", [40.742047, -73.989036], 600, 16],
				["Chelsea", "New York City", [40.746176, -74.001481], 600, 16],
				["Times Square", "New York City", [40.758749, -73.985131], 600, 16],
				["Upper East Side", "New York City", [40.774229, -73.957235], 1000, 15],
				["West Village", "New York City", [40.734048, -74.003927], 600, 16],
				["Williamsburg", "New York City", [40.717494, -73.957622], 600, 16],
				["Tribeca", "New York City", [40.716615, -74.008519], 600, 16],
				["Financial District", "New York City", [40.707897, -74.011609], 600, 16]]
		},
		Chicago: {
			Neighborhoods: [ // Whole Neighborhood needs map checking
				["Wicker Park", 'Chicago', [41.910295, -87.678140], 1000, 15],
				["The Loop", 'Chicago', [41.882018, -87.629496], 1000, 15],
				["River North", 'Chicago', [41.894900, -87.630417], 1000, 15],
				["Lincoln Park", 'Chicago', [41.918354, -87.644916], 1000, 15],
				["West Loop", 'Chicago', [41.884208, -87.648598], 1000, 15],
				["Old Town", 'Chicago', [41.907658, -87.635174], 800, 15],
				["Logan Square", 'Chicago', [41.928802, -87.707328], 1000, 15],
				["Lakeview", 'Chicago', [41.940988, -87.661650], 2200, 14],
				["South Loop", 'Chicago', [41.862348, -87.625527], 2200, 14],
				["Pilsen", 'Chicago', [41.856840, -87.656474], 2200, 14],
				["Hyde Park", 'Chicago', [41.794970, -87.592631], 1500, 15],
				["Streeterville", 'Chicago', [41.893444, -87.620012], 1000, 15],
				["Andersonville", 'Chicago', [41.980117, -87.669933], 1000, 15],
				["Bucktown", 'Chicago', [41.920052, -87.680267], 1000, 15],
				["Wrigleyville", 'Chicago', [41.948775, -87.658028], 1000, 15],
				["Lincoln Square", 'Chicago', [41.968552, -87.688805], 1000, 15]]
		},
		"San Francisco": {
			Neighborhoods: [ // Whole Neighborhood needs map checking
				["Mission District", 'San Francisco', [37.759276, -122.414658], 1000, 15],
				["SoMa", 'San Francisco', [37.778533, -122.405637], 1000, 15],
				["Chinatown", 'San Francisco', [37.793796, -122.400058], 1000, 15],
				["Nob Hill", 'San Francisco', [37.793083, -122.415508], 1000, 15],
				["Financial District", 'San Francisco', [37.793796, -122.400058], 1000, 15],
				["The Castro", 'San Francisco', [37.761439, -122.435009], 1000, 15],
				["Marina", 'San Francisco', [37.803978, -122.437017], 1000, 15],
				["Haight-Ashbury", 'San Francisco', [37.769926, -122.446943], 1000, 15],
				["Hayes Valley", 'San Francisco', [37.775735, -122.424370], 1000, 15],
				["North Beach", 'San Francisco', [37.806475, -122.410428], 1000, 15],
				["Russian Hill", 'San Francisco', [37.801493, -122.419559], 1000, 15],
				["Duboce Triangle", 'San Francisco', [37.768877, -122.432485], 1000, 15]]
		},
		Austin: {
			Neighborhoods: [ // Whole Neighborhood needs map checking
				["Civic District", "Austin", [30.267866, -97.742067], 1000, 15],
				["East Austin", "Austin", [30.263418, -97.728763], 2200, 14],
				["South Congress", "Austin", [30.247860, -97.750382], 2200, 14],
				["Zilker", "Austin", [30.254903, -97.766518], 2200, 14],
				["Hyde Park", "Austin", [30.304713, -97.731675], 2200, 14],
				["Travis Heights", "Austin", [30.243522, -97.744374], 2200, 14],
				["Bouldin Creek", "Austin", [30.255682, -97.755918], 2200, 14],
				["North Loop", "Austin", [30.318523, -97.718452], 2200, 14],
				["South Lamar", "Austin", [30.236997, -97.783512], 2200, 14],
				["UT Campus", "Austin", [30.287671, -97.741771], 2200, 14],
				["Clarksville", "Austin", [30.279619, -97.759545], 2200, 14],
				["Barton Hills", "Austin", [30.252761, -97.786750], 2200, 14]]
		},
		Boston: { // Whole Neighborhood needs fixing
			Neighborhoods: [
				["Downtown", "Boston", [42.359619, -71.057256], 1000, 15],
				["Kenmore", "Boston", [42.349113, -71.097689], 1000, 15],
				["Back Bay", "Boston", [42.350622, -71.080634], 1000, 15],
				["North End", "Boston", [42.365040, -71.053321], 1000, 15],
				["Harvard Square", "Boston", [42.373226, -71.120444], 1000, 15],
				["Beacon Hill", "Boston", [42.359170, -71.067681], 1000, 15],
				["Charleston", "Boston", [42.378054, -71.060226], 1000, 15],
				["Brookline", "Boston", [42.340351, -71.105710], 1000, 15],
				["South End", "Boston", [42.339098, -71.076483], 1000, 15],
				["East Cambridge", "Boston", [42.368829, -71.082174], 1000, 15],
				["Mission Hill", "Boston", [42.330140, -71.106038], 1000, 15],
				["Coolidge Corner", "Boston", [42.342978, -71.122662], 1000, 15]]
		},
		"Los Angeles": { // Whole Neighborhood needs fixing
			Neighborhoods: [
				["Hollywood", "Los Angeles", [34.093924, -118.328925], 1000, 15],
				["Beverly Hills", "Los Angeles", [34.072840, -118.400522], 1000, 15],
				["Venice", "Los Angeles", [33.988523, -118.463041], 1000, 15],
				["Santa Monica", "Los Angeles", [34.020826, -118.489734], 1000, 15],
				["Downtown", "Los Angeles", [34.041130, -118.247100], 1000, 15],
				["Marina del Rey", "Los Angeles", [33.972642, -118.457836], 1000, 15],
				["West Hollywood", "Los Angeles", [34.091636, -118.363947], 1000, 15],
				["Manhattan Beach", "Los Angeles", [33.886216, -118.406954], 1000, 15],
				["Culver City", "Los Angeles", [34.020373, -118.396623], 1000, 15],
				["East Hollywood", "Los Angeles", [34.092016, -118.293813], 1000, 15],
				["Arts District", "Los Angeles", [34.040661, -118.233750], 1000, 15],
				["Long Beach", "Los Angeles", [33.772077, -118.193964], 1000, 15]]
		}

	}

	$scope.options = [
		["Coffee", "Coffee"], ["Bars", "Bars"], ["Thai", "Thai"], ["Burgers", "Burgers"], 
		["Tacos", "Tacos"], ["Cocktails", "Cocktails"], ["Pizza", "Pizza"], ["Breakfast", "Breakfast"],
		["Italian", "Italian"], ["Brunch", "Brunch"], ["Sandwiches", "Sandwiches"], ["Indian", "Indian"]
		];

	$scope.results = {
		Yelp: [],
		Foursquare: []
	};

	$scope.filteredResults = [];

	$scope.loading = false;

	$scope.algo = function() {
		var res = [];
		for (var y = 0; y < $scope.results.Yelp.length; y++) {
			var yName = $scope.results.Yelp[y].name;
			var yAddress = $scope.results.Yelp[y].address;
			var yPhone = $scope.results.Yelp[y].phone;
			var added = false;
			for (var f = 0; f < $scope.results.Foursquare.length; f++) {
				var match = false;
				var fsName = $scope.results.Foursquare[f].name;
				var fsAddress = $scope.results.Foursquare[f].address;
				var fsPhone = $scope.results.Foursquare[f].phone;
				if (yAddress === fsAddress) {
					if ((Helpers.similar_text(yName, fsName, true)) > 50) {
						match = true;
					}
				} else if (yPhone !== undefined && (yPhone === fsPhone)) {
					if ((Helpers.similar_text(yName, fsName, true)) > 50) {
						match = true;
					}
				} else if ((Helpers.similar_text(yName, fsName, true)) > 90) {
					match = true;
				}
				if (match === true && $scope.results.Foursquare[f].rating) {
					var calcRating = function() {
						var yelpRating = $scope.results.Yelp[y].rating;
						var yelpCount = $scope.results.Yelp[y].reviewCount;
						var fsRating = $scope.results.Foursquare[f].rating;
						var fsCount = $scope.results.Foursquare[f].reviewCount;
						var totalCount = yelpCount+fsCount;
						var calc = (((yelpRating*2)*yelpCount)+(fsRating*fsCount))/totalCount;
						if (totalCount < 50) {
							var calc = calc * 0.02 * totalCount;
						}
						calc = (Math.round(calc * 10)/10).toFixed(1);
						return calc;
					}
					var biz = {
						name: $scope.results.Yelp[y].name,
						address: $scope.results.Yelp[y].address,
						rating: calcRating(),
						reviewCount: $scope.results.Yelp[y].reviewCount + $scope.results.Foursquare[f].reviewCount,
						image: $scope.results.Yelp[y].image,
						coordinates: $scope.results.Yelp[y].coordinates,
						categories: $scope.results.Yelp[y].categories,
						yelpRating: $scope.results.Yelp[y].rating,
						foursquareRating: $scope.results.Foursquare[f].rating.toFixed(1),
						yelpUrl: $scope.results.Yelp[y].url,
						foursquareUrl: $scope.results.Foursquare[f].url
					}
					$scope.filteredResults.push(biz)
					added = true;
				}
			}
		if (!added && ($scope.results.Yelp[y].reviewCount > 10)) {
			var calcYelpRating = function() {
				var yelpRating = $scope.results.Yelp[y].rating;
				var yelpCount = $scope.results.Yelp[y].reviewCount;
				if (yelpCount > 50) {
					var calc = $scope.results.Yelp[y].rating * 1.9
				} else {
					var calc = $scope.results.Yelp[y].rating * 0.04 * $scope.results.Yelp[y].reviewCount;
				}
				calc = (Math.round(calc * 10)/10).toFixed(1);
				return calc;
			}
				var yelpBiz = {
				name: $scope.results.Yelp[y].name,
				address: $scope.results.Yelp[y].address,
				rating: calcYelpRating(),
				reviewCount: $scope.results.Yelp[y].reviewCount,
				image: $scope.results.Yelp[y].image,
				coordinates: $scope.results.Yelp[y].coordinates,
				categories: $scope.results.Yelp[y].categories,
				yelpRating: $scope.results.Yelp[y].rating,
				foursquareRating: '',
				yelpUrl: $scope.results.Yelp[y].url,
				foursquareUrl: ''
			}
			$scope.filteredResults.push(yelpBiz);
		}
		}
	}

	$scope.selectedCity = undefined;
	$scope.selectCity = function(city) {
		$scope.selectedCity = city;
		console.log('city: ', $scope.selectedCity);
		$scope.hoods = $scope.data[city[0]].Neighborhoods;
	}


	$scope.selectedHood = undefined;
	$scope.selectedOption = undefined;
	$scope.selectHood = function(hood) {
		$scope.selectedHood = hood;
		console.log('hood: ', $scope.selectedHood);
	}
	$scope.selectOption = function(option) {
		if (Array.isArray(option)) {
			$scope.selectedOption = option;
		} else {
			$scope.selectedOption = [option];
		}
		$scope.loading = true;
		$scope.getResults();
		console.log('Hood: ', $scope.selectedHood[0]);
		console.log('Option: ', $scope.selectedOption[0]);
	}

	$scope.getResults = function() {
			console.log('need to send post request to server');
			return $http({
		  method: 'POST',
		  url: '/',
		  data: {
		  	term: $scope.selectedOption[0],
		  	location: $scope.selectedHood[0] +', '+$scope.selectedCity[2],
		  	coordinates: $scope.selectedHood[2],
		  	radius: $scope.selectedHood[3]
		  }
		})
		.then(function (res) {
			var yelp = res.data.Yelp.businesses;
			for (var i = 0; i < yelp.length; i++) {
				var categoriesArray = [];
				for (var c = 0; c < yelp[i].categories.length; c++) {
					categoriesArray.push(yelp[i].categories[c])
				}
				var result = {
					name: yelp[i].name,
					rating: yelp[i].rating.toFixed(1),
					address: yelp[i].location.display_address[0],
					phone: yelp[i].phone,
					reviewCount: yelp[i].review_count,
					image: yelp[i].image_url,
					coordinates: yelp[i].location.coordinate,
					url: yelp[i].url,
					categories: categoriesArray,
					verified: !yelp[i].is_closed,
					added: false
				}
				$scope.results.Yelp.push(result);
			}
			var foursquare = res.data.Foursquare.response.groups[0].items;
			for (var x = 0; x < foursquare.length; x++) {
				var result = {
					name: foursquare[x].venue.name,
					rating: foursquare[x].venue.rating,
					address: foursquare[x].venue.location.address,
					phone: foursquare[x].venue.contact.phone,
					reviewCount: foursquare[x].venue.ratingSignals,
					url: 'https://foursquare.com/v/' + foursquare[x].venue.id,
					verified: foursquare[x].venue.verified,
					added: false
				}
				$scope.results.Foursquare.push(result);
			}
			$scope.algo();
			console.log('Filtered Results: ', $scope.filteredResults);
			$scope.initMap($scope.filteredResults);
			console.log('Server Results: ', res.data)
			$scope.loading = false;
			return res.data;
		});
	}
		
	$scope.initMap = function(locations) {
		var mapLatLng = {lat: $scope.selectedHood[2][0], lng: $scope.selectedHood[2][1]};

		var map = new google.maps.Map(document.getElementById('map'), {
		  zoom: $scope.selectedHood[4],
		  center: mapLatLng
		});

		for (var m = 0; m < locations.length; m++) {
			infowindow = new google.maps.InfoWindow({
			    content: locations[m].name
			  });
			var content = '<div class="infoWindow"><h3>' + locations[m].name + '</h3><div class="IW-rating">'+ locations[m].rating +'<i class="fa fa-star"></i></div><div class="IW-yelpRating">'+ locations[m].yelpRating +'<i class="fa fa-yelp"></i></div><div class="IW-foursquareRating">'+ locations[m].foursquareRating +'<i class="fa fa-foursquare"></i></div></div>'
			if (!locations[m].foursquareRating) {
				content = '<div class="infoWindow"><h3>' + locations[m].name + '</h3><div class="IW-rating">'+ locations[m].rating +'<i class="fa fa-star"></i></div><div class="IW-yelpRating">'+ locations[m].yelpRating +'<i class="fa fa-yelp"></i></div></div>'
			}
			loc = {lat: locations[m].coordinates.latitude, lng: locations[m].coordinates.longitude};
			marker = new google.maps.Marker({
		      position: loc,
		      map: map,
		      title: locations[m].name
		    });
		    google.maps.event.addListener(marker,'mouseover', (function(marker,content,infowindow){ 
			    return function() {
			        infowindow.setContent(content);
			        infowindow.open(map, marker);
			    };
			})(marker,content,infowindow));
			google.maps.event.addListener(marker,'mouseout', (function(marker,content,infowindow){ 
			    return function() {
			        infowindow.close();
			    };
			})(marker,content,infowindow));
		}
	}

	$scope.clear = function(){
		// $state.reload();
		$scope.selectedHood = undefined;
		$scope.selectedOption = undefined;
		$scope.results = {
			Yelp: [],
			Foursquare: []
		};
		$scope.filteredResults = [];
		$scope.loading = false;
	}

	$scope.clearCity = function(){
		$state.reload();
	}


}]);

neighborhoods.directive('myBackgroundImage', function () {
	return function (scope, element, attrs) {
	    element.css({
	        'background-image': 'url("assets/'+ attrs.myBackgroundImage + '/' + scope.item[1] + '/' + scope.item[0] + '.jpg")',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center center'
	    });
	};
});
