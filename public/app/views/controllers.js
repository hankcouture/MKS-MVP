var neighborhoods = angular.module('mvp.neighborhoods', [])

neighborhoods.controller('NeighborhoodController', ['$scope', '$http', function($scope, $http) {

  $scope.hoods = [
  ["Wicker Park", [41.910295, -87.678140]],
  ["Lincoln Park", [41.922090, -87.644082]],
  ["Logan Square", [41.928802, -87.707328]],
  ["The Loop", [41.882018, -87.629496]],
  ["Wrigleyville", [41.948775, -87.658028]],
  ["Lakeview", [41.940988, -87.661650]],
  ["Pilsen", [41.856840, -87.656474]],
  ["West Loop", [41.884039, -87.652262]],
  ["Andersonville", [41.980117, -87.669933]],
  ["South Loop", [41.862348, -87.625527]],
  ["Hyde Park", [41.794970, -87.592631]],
  ["Bucktown", [41.920052, -87.680267]]
  				];
  $scope.options = [["Coffee"], ["Bars"], ["Thai"], ["Burgers"], ["Italian"], ["Tacos"], ["Pizza"], ["Indian"]];

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
  			if (yName === fsName) {
  				match = true;
  			} else if (yAddress === fsAddress) {
  				match = true;
  			} else if (yPhone !== undefined && (yPhone === fsPhone)) {
  				match = true;
  			};
  			if (match === true && $scope.results.Foursquare[f].rating) {
  				var calcRating = function(yelp, foursquare) {
  					var calc = ((yelp*5)+(foursquare*1.5))/4
  					calc = Math.round(calc * 10)/10;
  					return calc;
  				}
  				var biz = {
  					name: $scope.results.Yelp[y].name,
  					rating: calcRating($scope.results.Yelp[y].rating, $scope.results.Foursquare[f].rating),
  					reviewCount: $scope.results.Yelp[y].reviewCount + $scope.results.Foursquare[f].reviewCount,
  					image: $scope.results.Yelp[y].image
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
				image: yelp[i].image_url
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
		console.log('results: ', res.data)
		return res.data;
    });
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
