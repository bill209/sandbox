'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl as v1c'
  });
}])

.controller('View1Ctrl', [function() {
  var vm = this;
  vm.radio = 1;
  vm.cb = true;
  vm.colors = ['red', 'white', 'blue'];
}]);