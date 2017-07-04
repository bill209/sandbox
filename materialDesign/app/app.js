'use strict';

var app = angular.module('app', ['ngMaterial', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/main');

	$stateProvider
		.state('main', {
			url: '/main',
			controller: 'MainCtrl as mc',
			templateUrl: './main/main.html'
		})

		.state('about', {
			url: '/about',
			controller: 'AboutCtrl as ac',
			templateUrl: './about/about.html'
		})

});

app.controller("AppCtrl", appCtrl);

function appCtrl($scope){
	$scope.currentNavItem = 'main';
}