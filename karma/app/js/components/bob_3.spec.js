// test for scope function to be exposed and working

describe('Component: bob_3', function () {
	beforeEach(module('tinyApp'));

	var controller;
	var scope;
	beforeEach(inject(function($rootScope, $componentController){
		scope = $rootScope.$new();
		controller = $componentController('bob3', {$scope: scope}, {nbr: '3'});
	}));

	it('should expose scope.squareIt function', function() {
		expect(controller.squareIt).toBeDefined();
		expect(controller.squareIt(3)).toEqual(9);
	});

});