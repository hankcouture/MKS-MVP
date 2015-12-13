var neighborhoods = angular.module('mvp.neighborhoods', [])

neighborhoods.controller('NeighborhoodController', ['$scope', function($scope) {
  $scope.hoods = ["Wicker Park", "Lincoln Park", "Logan Square", "River North", "The Loop", "Lakeview", "Pilsen", "West Loop"
  					, "Andersonville", "South Loop", "Hyde Park", "Bucktown"
  				];
  $scope.options = ["Coffee", "Beer", "Thai", "Burgers", "Italian", "Tacos", "Pizza", "Indian"];

  $scope.results = [];

  $scope.selectedHood = undefined;
  $scope.selectedOption = undefined;
  $scope.selectHood = function(hood) {
	$scope.selectedHood = hood;
  }
  $scope.selectOption = function(option) {
  	$scope.selectedOption = option;
  	console.log('Hood: ', $scope.selectedHood);
  	console.log('Option: ', $scope.selectedOption);
  }

}]);