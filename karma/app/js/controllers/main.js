app.controller('MainCtrl', mainCtrl);

function mainCtrl($scope, MainFactory) {
	var vm = this;

	vm.message = { msg: 'hi' };

	vm.greeting = MainFactory.getGreeting();
	console.log("vm.greeting",vm.greeting);
	

	var promise = MainFactory.getScotches();
	promise.then(function (d) {
		vm.scotches = d;
		console.log("getScotches",JSON.stringify(d));
	});

};



