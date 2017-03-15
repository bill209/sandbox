app.component('bob1', {
		bindings: {
			town: '@'
		},
		controller: function() {
			this.myTitle = 'hi bob';
		},
		template: '<h3>{{ $ctrl.myTitle }} from {{ $ctrl.town }}</h3>'
});