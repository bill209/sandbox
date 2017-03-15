app.component('bob5', {
	bindings: {
		town: '@',
		nbr: '@'
	},
	templateUrl: 'js/components/bob_5.tpl.html',
	controller: function () {
		this.myTitle = 'hi elwood';

		this.squareIt = function (x) {
			return x * x;
		}

		this.result = this.squareIt(this.nbr);
	}
});