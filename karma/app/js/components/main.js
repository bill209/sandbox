var mainController = function($scope, MainFactory){
	var vm = this;

	var promise = MainFactory.getFavoriteScotch(2);
	promise.then(function (d) {
		vm.favScotch = d;
	});

}

app.component('mainComponent', {
	template: "<p>favorite: {{mcomp.favScotch.name}}</p>",
	controller: mainController,
	controllerAs: "mcomp",
	bindings: {
		data: "="
	}
});
