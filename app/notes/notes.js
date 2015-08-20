'use strict';

angular.module('notely.notes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/notes',{
    templateUrl: 'notes/notes.html',
    controller: 'NotesController' //capitalize controllers
  });
}])

.controller('NotesController', [function(){

}]);
