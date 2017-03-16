// test calling a factory service (non-AJAX)

describe('About controller', function() {
	var $controller, $rootScope, scope, AC, MF;
	var testGreeting = 'hi bob';

	beforeEach(angular.mock.module('ui.router'));
	beforeEach(angular.mock.module('tinyApp'));

	beforeEach(inject(function(_$rootScope_, _$controller_, _MainFactory_) {
		$rootScope = _$rootScope_;
		scope = $rootScope.$new();
		$controller = _$controller_;
		MF = _MainFactory_;

		spyOn(MF, 'getGreeting').and.callFake(function() {
			return testGreeting;
		});
		// not sure why scope is not needed here but needed in other controller tests....
		AC = $controller('AboutCtrl', { '$scopezzz': scope, MainFactory: MF });
	}));

	// Verify our controller exists
	it('AboutCtrl should be defined', function() {
		expect(AC).toBeDefined();
	});

	it('call to getGreeting()', function() {
		expect(MF.getGreeting).toHaveBeenCalled();
		expect(AC.greeting).toEqual(testGreeting);
	});

});