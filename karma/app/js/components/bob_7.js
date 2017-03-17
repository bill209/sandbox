app.component('bob7', {
		bindings: {
			ftemp: '@'
		},
		controller: function(MainFactory) {
			var vm = this;
			vm.ctemp = 0;

			var promise = MainFactory.convertFtoC(this.ftemp);
			promise.then(function (d) {
				vm.ctemp = d;
			});
		},
		template: '<h3>result - {{$ctrl.ctemp}}</h3>'
});