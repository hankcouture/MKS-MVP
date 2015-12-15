var neighborhoods = angular.module('mvp.neighborhoods', [])

neighborhoods.controller('NeighborhoodController', ['$scope', '$http', function($scope, $http) {

  $scope.hoods = [
  ["Wicker Park", [41.910295, -87.678140]],
  ["The Loop", [41.882018, -87.629496]],
  ["River North", [41.892102, -87.632800]],
  ["Lincoln Park", [41.922090, -87.644082]],
  ["West Loop", [41.884039, -87.652262]],
  ["Old Town", [41.907595, -87.635676]],
  ["Logan Square", [41.928802, -87.707328]],
  ["Lakeview", [41.940988, -87.661650]],
  ["South Loop", [41.862348, -87.625527]],
  ["Pilsen", [41.856840, -87.656474]],
  ["Hyde Park", [41.794970, -87.592631]],
  ["Streeterville", [41.893444, -87.620012]],
  ["Andersonville", [41.980117, -87.669933]],
  ["Bucktown", [41.920052, -87.680267]],
  ["Wrigleyville", [41.948775, -87.658028]],
  ["Lincoln Square", [41.968552, -87.688805]]
  				];
  $scope.options = [
  ["Coffee"], ["Bars"], ["Thai"], ["Burgers"], 
  ["Tacos"], ["Cocktails"], ["Pizza"], ["Breakfast"],
  ["Italian"], ["Brunch"], ["Sandwiches"], ["Indian"]
  ];

  $scope.results = {
  	Yelp: [],
  	Foursquare: []
  };

  $scope.filteredResults = [];


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
  				var calcRating = function(yelp, foursquare) {
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
  					yelpRating: $scope.results.Yelp[y].rating.toFixed(1),
  					foursquareRating: $scope.results.Foursquare[f].rating.toFixed(1)
  				}
  				$scope.filteredResults.push(biz)
  			}
  		}
  	}
  }

  $scope.selectedHood = undefined;
  $scope.selectedOption = undefined;
  $scope.selectHood = function(hood) {
	$scope.selectedHood = hood;
  }
  $scope.selectOption = function(option) {
  	$scope.selectedOption = option;
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
      	location: $scope.selectedHood[0] +', IL',
      	coordinates: $scope.selectedHood[1]
      }
    })
    .then(function (res) {
		var yelp = res.data.Yelp.businesses;
		for (var i = 0; i < yelp.length; i++) {
			var result = {
				name: yelp[i].name,
				rating: yelp[i].rating,
				address: yelp[i].location.display_address[0],
				phone: yelp[i].phone,
				reviewCount: yelp[i].review_count,
				image: yelp[i].image_url,
				coordinates: yelp[i].location.coordinate
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
				reviewCount: foursquare[x].venue.ratingSignals
			}
			$scope.results.Foursquare.push(result);
		}
		$scope.algo();
		console.log('Results: ', $scope.filteredResults);
		$scope.initMap($scope.filteredResults);
		console.log('res', res.data)
		return res.data;
    });
  }
		
  $scope.initMap = function(locations) {
    var mapLatLng = {lat: $scope.selectedHood[1][0], lng: $scope.selectedHood[1][1]};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: mapLatLng
    });

    for (var m = 0; m < locations.length; m++) {
    	infowindow = new google.maps.InfoWindow({
		    content: locations[m].name
		  });
    	var content = locations[m].name;
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


}]);

neighborhoods.directive('myBackgroundImage', function () {
        return function (scope, element, attrs) {
        	console.log(attrs.myBackgroundImage)
            element.css({
                'background-image': 'url("assets/'+ attrs.myBackgroundImage + '/' + scope.item[0] + '.jpg")',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center center'
            });
        };
    });
