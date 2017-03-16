app.controller('AboutCtrl', aboutCtrl);

function aboutCtrl($scope, MainFactory){
	var vm = this;
	vm.greeting = MainFactory.getGreeting();
};


app.controller('NavCtrl', navCtrl);

function navCtrl($scope, MainFactory) {

	$scope.test = 'abc';

}