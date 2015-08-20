'use strict';

// Declare app level module which depends on views, and components
angular.module('notely', [ //this is an array of other modules that this app depends on
  'ngRoute',
  'notely.notes',
  'notely.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/notes'});  //this tells it what the default page is
}]);
