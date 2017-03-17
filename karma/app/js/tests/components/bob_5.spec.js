// test for inline template to be rendered

describe('Component: bob_5', function () {
	beforeEach(module('tinyApp'));

	var $compile, scope, controller;

	beforeEach(module('my.templates'));

	beforeEach(inject(function(_$rootScope_, _$compile_, _$componentController_){
		scope = _$rootScope_.$new();
		$compile = _$compile_;
		controller = _$componentController_('bob5', {$scope: scope}, { town: 'eastwood', nbr: '5'} );
	}));

	it('should expose scope.myTitle', function() {
		expect(controller.myTitle).toBeDefined();
		expect(controller.myTitle).toBe('hi elwood');
	});

	it('should expose scope.squareIt function', function() {
		expect(controller.squareIt).toBeDefined();
		expect(controller.squareIt(3)).toEqual(9);
	});

	it('templateUrl is created correctly', function () {
		// Compile a piece of HTML containing the directive
		var element = $compile('<bob5 town="eastwood"></bob5>')(scope);
		scope.$digest();
		// Check that the compiled element contains the templated content
		expect(element.html()).toContain("eastwood");
	});

});