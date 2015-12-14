var neighborhoods = angular.module('mvp.neighborhoods', [])

neighborhoods.controller('NeighborhoodController', ['$scope', '$http', function($scope, $http) {
  $scope.hoods = ["Wicker Park", "Lincoln Park", "Logan Square", "The Loop", "Wrigleyville", "Lakeview", "Pilsen", "West Loop"
  					, "Andersonville", "South Loop", "Hyde Park", "Bucktown"
  				];
  $scope.options = ["Coffee", "Bars", "Thai", "Burgers", "Italian", "Tacos", "Pizza", "Indian"];

  $scope.results = [];

  $scope.selectedHood = undefined;
  $scope.selectedOption = undefined;
  $scope.selectHood = function(hood) {
	$scope.selectedHood = hood;
  }
  $scope.selectOption = function(option) {
  	$scope.selectedOption = option;
  	$scope.getResults();
  	console.log('Hood: ', $scope.selectedHood);
  	console.log('Option: ', $scope.selectedOption);
  }

  $scope.getResults = function() {
  	console.log('need to send post request to server');
  	return $http({
      method: 'POST',
      url: '/',
      data: {
      	term: $scope.selectedOption,
      	location: $scope.selectedHood +', IL',
      }
    })
    .then(function (res) {
    	var yelp = res.data.Yelp.businesses;
    	for (var i = 0; i < yelp.length; i++) {
    		var result = {
    			name: yelp[i].name + ': ' + yelp[i].rating
    		}
    		$scope.results.push(result);
		}
		var foursquare = res.data.Foursquare.response.groups[0].items;
		for (var x = 0; x < foursquare.length; x++) {
    		var result = {
    			name: foursquare[x].venue.name + ': ' + foursquare[x].venue.rating
    		}
    		$scope.results.push(result);
		}
		console.log(foursquare)
      console.log('results: ', res.data)
      return res.data;
    });
  }

}]);

neighborhoods.directive('myBackgroundImage', function () {
        return function (scope, element, attrs) {
        	console.log(attrs.myBackgroundImage)
            element.css({
                'background-image': 'url("assets/'+ attrs.myBackgroundImage + '/' + scope.item + '.jpg")',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center center'
            });
        };
    });