// test for inline template to be rendered

describe('Component: bob_1', function () {
	beforeEach(module('tinyApp'));

	var element;
	var scope;
	beforeEach(inject(function($rootScope, $compile){
		scope = $rootScope.$new();
		element = angular.element('<bob1 town="{{town}}"></bob1>');
		element = $compile(element)(scope);
		scope.town = 'boogertown';
		scope.$apply();
	}));

	it('inline template should render properly', function() {
		var h3 = element.find('h3');

		expect(h3.text()).toBe('hi bob from boogertown');
		expect(h3.text()).toContain("boogertown");
	});

});