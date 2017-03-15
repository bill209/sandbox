app.component('bob6', {
	bindings: {
		fav: "@"
	},
	zzztemplate: '<p>fav: {{$ctrl.favScotch.name}}</p>',
	templateUrl: 'js/components/bob_6.tpl.html',
	controller: function ($scope, MainFactory) {
		var vm = this;
		vm.favScotch = { name: 'budweiser' };

		vm.getFavoriteScotch = function(fav){
			var promise = MainFactory.getFavoriteScotch(fav);
			promise.then(function (d) {
				vm.favScotch.name = d.name;
			});
		}

		vm.squareIt = function(x) {
			return x * x;
		}

	}
});