var neighborhoods = angular.module('mvp.neighborhoods', [])

neighborhoods.controller('NeighborhoodController', ['$scope', '$http', '$state', function($scope, $http, $state) {

  $scope.hoods = [];

  	$scope.cities = [["New York City", "NYC", "NY"],["Chicago", "Chicago", "IL"],["San Francisco", "SF", "CA"],
  					["Austin", "Austin", "TX"],["Boston", "Boston", "MA"],["Los Angeles", "LA", "CA"]];

	$scope.data = {
		"New York City": {
			Neighborhoods: [
				["SoHo", "New York City", [40.723885, -74.002854]],
				["Gramercy Park", "New York City", [40.736243, -73.985002]],
				["Lower East Side", "New York City", [40.720291, -73.989164]],
				["Alphabet City", "New York City", [40.725462, -73.982212]],
				["Flatiron", "New York City", [40.742047, -73.989036]],
				["Chelsea", "New York City", [40.746176, -74.001481]],
				["Times Square", "New York City", [40.756612, -73.986332]],
				["Upper East Side", "New York City", [40.774229, -73.957235]],
				["West Village", "New York City", [40.734048, -74.003927]],
				["Williamsburg", "New York City", [40.717494, -73.957622]],
				["Tribeca", "New York City", [40.716615, -74.008519]],
				["Financial District", "New York City", [40.707897, -74.011609]]]
		},
		Chicago: {
			Neighborhoods: [
				["Wicker Park", 'Chicago', [41.910295, -87.678140]],
				["The Loop", 'Chicago', [41.882018, -87.629496]],
				["River North", 'Chicago', [41.892102, -87.632800]],
				["Lincoln Park", 'Chicago', [41.922090, -87.644082]],
				["West Loop", 'Chicago', [41.884039, -87.652262]],
				["Old Town", 'Chicago', [41.907595, -87.635676]],
				["Logan Square", 'Chicago', [41.928802, -87.707328]],
				["Lakeview", 'Chicago', [41.940988, -87.661650]],
				["South Loop", 'Chicago', [41.862348, -87.625527]],
				["Pilsen", 'Chicago', [41.856840, -87.656474]],
				["Hyde Park", 'Chicago', [41.794970, -87.592631]],
				["Streeterville", 'Chicago', [41.893444, -87.620012]],
				["Andersonville", 'Chicago', [41.980117, -87.669933]],
				["Bucktown", 'Chicago', [41.920052, -87.680267]],
				["Wrigleyville", 'Chicago', [41.948775, -87.658028]],
				["Lincoln Square", 'Chicago', [41.968552, -87.688805]]]
		},
		"San Francisco": {
			Neighborhoods: [
				["Mission District", 'San Francisco', [41.910295, -87.678140]],
				["SoMa", 'San Francisco', [41.882018, -87.629496]],
				["Downtown", 'San Francisco', [41.892102, -87.632800]],
				["Nob Hill", 'San Francisco', [41.922090, -87.644082]],
				["Financial District", 'San Francisco', [41.884039, -87.652262]],
				["The Castro", 'San Francisco', [41.907595, -87.635676]],
				["Marina", 'San Francisco', [41.928802, -87.707328]],
				["Haight-Ashbury", 'San Francisco', [41.940988, -87.661650]],
				["Hayes Valley", 'San Francisco', [41.862348, -87.625527]],
				["North Beach", 'San Francisco', [41.856840, -87.656474]],
				["Russian Hill", 'San Francisco', [41.794970, -87.592631]],
				["Duboce Triangle", 'San Francisco', [41.893444, -87.620012]]]
		},
		Austin: {
			Neighborhoods: [
				["Civic District", "Austin", [30.267866, -97.742067]],
				["East Austin", "Austin", [30.263418, -97.728763]],
				["South Congress", "Austin", [30.247860, -97.750382]],
				["Zilker", "Austin", [30.254903, -97.766518]],
				["Hyde Park", "Austin", [30.304713, -97.731675]],
				["Travis Heights", "Austin", [30.243522, -97.744374]],
				["Bouldin Creek", "Austin", [30.255682, -97.755918]],
				["North Loop", "Austin", [30.318523, -97.718452]],
				["South Lamar", "Austin", [30.236997, -97.783512]],
				["UT Campus", "Austin", [30.287671, -97.741771]],
				["East Cesar Chavez", "Austin", [30.255833, -97.732716]],
				["Barton Hills", "Austin", [30.252761, -97.786750]]]
		},
		Boston: {
			Neighborhoods: [
				["Civic District", "Austin", [30.267866, -97.742067]],
				["East Austin", "Austin", [30.263418, -97.728763]],
				["South Congress", "Austin", [30.247860, -97.750382]],
				["Zilker", "Austin", [30.254903, -97.766518]],
				["Hyde Park", "Austin", [30.304713, -97.731675]],
				["Travis Heights", "Austin", [30.243522, -97.744374]],
				["Bouldin Creek", "Austin", [30.255682, -97.755918]],
				["North Loop", "Austin", [30.318523, -97.718452]],
				["South Lamar", "Austin", [30.236997, -97.783512]],
				["UT Campus", "Austin", [30.287671, -97.741771]],
				["East Cesar Chavez", "Austin", [30.255833, -97.732716]],
				["Barton Hills", "Austin", [30.252761, -97.786750]]]
		},
		"Los Angeles": {
			Neighborhoods: [
				["Civic District", "Austin", [30.267866, -97.742067]],
				["East Austin", "Austin", [30.263418, -97.728763]],
				["South Congress", "Austin", [30.247860, -97.750382]],
				["Zilker", "Austin", [30.254903, -97.766518]],
				["Hyde Park", "Austin", [30.304713, -97.731675]],
				["Travis Heights", "Austin", [30.243522, -97.744374]],
				["Bouldin Creek", "Austin", [30.255682, -97.755918]],
				["North Loop", "Austin", [30.318523, -97.718452]],
				["South Lamar", "Austin", [30.236997, -97.783512]],
				["UT Campus", "Austin", [30.287671, -97.741771]],
				["East Cesar Chavez", "Austin", [30.255833, -97.732716]],
				["Barton Hills", "Austin", [30.252761, -97.786750]]]
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
  		for (var f = 0; f < $scope.results.Foursquare.length; f++) {
  			var match = false;
  			var fsName = $scope.results.Foursquare[f].name;
  			var fsAddress = $scope.results.Foursquare[f].address;
  			var fsPhone = $scope.results.Foursquare[f].phone;
  			if (yAddress === fsAddress) {
  				match = true;
  			} else if (yPhone !== undefined && (yPhone === fsPhone)) {
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
  				// var removed = $scope.results.Yelp.splice(y, 1);
  				// console.log(removed);
  				$scope.filteredResults.push(biz)
  			}
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
  	$scope.selectedOption = option;
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
      	coordinates: $scope.selectedHood[2]
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
				categories: categoriesArray
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
				url: 'https://foursquare.com/v/' + foursquare[x].venue.id
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
      zoom: 14,
      center: mapLatLng
    });

    for (var m = 0; m < locations.length; m++) {
    	infowindow = new google.maps.InfoWindow({
		    content: locations[m].name
		  });
    	var content = '<div class="infoWindow"><h3>' + locations[m].name + '</h3><div class="IW-rating">'+ locations[m].rating +'<i class="fa fa-star"></i></div><div class="IW-yelpRating">'+ locations[m].yelpRating +'<i class="fa fa-yelp"></i></div><div class="IW-foursquareRating">'+ locations[m].foursquareRating +'<i class="fa fa-foursquare"></i></div></div>'
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
		        console.log('hello')
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


}]);

neighborhoods.directive('myBackgroundImage', function () {
        return function (scope, element, attrs) {
        	console.log('$scope:', scope)
            element.css({
                'background-image': 'url("assets/'+ attrs.myBackgroundImage + '/' + scope.item[1] + '/' + scope.item[0] + '.jpg")',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center center'
            });
        };
    });
