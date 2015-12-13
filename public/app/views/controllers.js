var neighborhoods = angular.module('mvp.neighborhoods', [])

neighborhoods.controller('NeighborhoodController', ['$scope', function($scope) {
  $scope.hoods = ["Wicker Park", "Lincoln Park", "Logan Square", "River North", "The Loop", "Lakeview", "Pilsen", "West Loop"];
}]);





var state1 = angular.module('mvp.state1', [])

state1.controller('State1Controller', ['$scope', function($scope) {
  $scope.items = ["A", "List", "Of", "Items"];
}]);


var state2 = angular.module('mvp.state2', [])

state2.controller('State2Controller', ['$scope', function($scope) {
  $scope.things = ["A", "List", "Of", "THINGS"];
}]);


