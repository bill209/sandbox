// test for scope variables and bound variables

describe('Component: bob_2', function () {
	beforeEach(module('tinyApp'));

	var controller;
	var scope;
	beforeEach(inject(function($rootScope, $componentController){
		scope = $rootScope.$new();
		controller = $componentController('bob2', {$scope: scope}, {town: 'apex'});
	}));

	it('should expose scope.myTitle', function() {
		expect(controller.myTitle).toBeDefined();
		expect(controller.myTitle).toBe('hi adam');
	});

	it('should expose bound scope.town', function() {
		expect(controller.town).toBeDefined();
		expect(controller.town).toBe('apex');
	});

});