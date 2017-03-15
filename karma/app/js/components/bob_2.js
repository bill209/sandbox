app.component('bob2', {
		bindings: {
			town: '@'
		},
		controller: function() {
			this.myTitle = 'hi adam';
		},
		template: '<h3>{{ $ctrl.myTitle }} from {{ $ctrl.town }}</h3>'
});