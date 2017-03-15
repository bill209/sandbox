// test for inline template to be rendered

describe('Component: bob_4', function () {
	beforeEach(module('tinyApp'));

	var $compile;
	var scope;

	beforeEach(module('my.templates'));

	beforeEach(inject(function(_$rootScope_, _$compile_){
		$compile = _$compile_;
		scope = _$rootScope_.$new();
	}));

	it('templateUrl is created correctly', function () {
		// Compile a piece of HTML containing the directive
		var element = $compile('<bob4 town="deltaville"></bob4>')(scope);
		scope.$digest();
		// Check that the compiled element contains the templated content
		expect(element.html()).toContain("deltaville");
	});

});