app.controller('MainCtrl', mainCtrl);

function mainCtrl($scope, MainFactory) {
	var vm = this;

	vm.greeting = MainFactory.getGreeting();

	var promise = MainFactory.getScotches();
	promise.then(function (d) {
		vm.scotches = d;
	});

};



