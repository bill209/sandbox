app.component('bob3', {
		bindings: {
			nbr: '@'
		},
		controller: function() {
			this.squareIt = function(x){
				return x * x;
			}

			this.result = this.squareIt(this.nbr);
		},
		template: '<h3>result = {{ $ctrl.result }}</h3>'
});