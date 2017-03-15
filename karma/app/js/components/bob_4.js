app.component('bob4', {
		bindings: {
			town: '@'
		},
		controller: function() {
			this.myTitle = 'hi bob';
		},
		templateUrl: 'js/components/bob_4.tpl.html'
});