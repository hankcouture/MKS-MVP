var app = angular.module('mvp', [
  'mvp.neighborhoods',
  'ui.router'
])

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/search");

  // Now set up the states
  $stateProvider
    .state('search', {
      url: "/search",
      templateUrl: "app/views/search.html",
      controller: "NeighborhoodController"
    })
});