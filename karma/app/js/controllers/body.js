//  body controller
app.controller('BodyCtrl', bodyCtrl);

function bodyCtrl($scope, $location) {
	var vm = this;
	vm.bodyBgColor = {'background-color': '#ffffff'}
	vm.isActive = isActive;
	vm.isAbout = isAbout;
	// nav bar functions
	// adds the active class to the chosen nav item
	function isActive(viewLocation) {
		return viewLocation === $location.path();
	};
	// this lightens the nav items on the dark background of the about page
	function isAbout(bmd) {
		return $location.path() === '/about';
	}
};