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
      	location: $scope.selectedHood +', Chicago, IL',
      }
    })
    .then(function (res) {
    	var biz = res.data.businesses;
    	for (var i = 0; i < biz.length; i++) {
    		var result = {
    			name: biz[i].name,
    			rating: biz[i].rating_img_url,
    			img: biz[i].image_url
    		}
    		$scope.results.push(result);
		}
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