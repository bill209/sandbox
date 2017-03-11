
var app = angular
	.module('tinyApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/main');

	$stateProvider
		.state('stateOne', {
			url: '/main',
			controller: 'MainCtrl as mc',
			templateUrl: 'views/main.html'
		})
		.state('stateTwo', {
			url: '/about',
			controller: 'AboutCtrl as ac',
			templateUrl: 'views/about.html'
		})
});


