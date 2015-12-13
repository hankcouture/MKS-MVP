var app = angular.module('mvp', [
  'mvp.state1',
  'mvp.state2',
  'mvp.neighborhoods',
  'ui.router'
])

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "app/views/state1.html",
      controller: "NeighborhoodController"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "app/views/state1.list.html",
      controller: "State1Controller"
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "app/views/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "app/views/state2.list.html",
      controller: "State2Controller"
    });
});