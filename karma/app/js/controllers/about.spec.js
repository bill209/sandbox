// test calling a factory service (non-AJAX)

describe('About controller', function() {
	var $controller, AC, MF;
	var testGreeting = 'hi bob';

	beforeEach(angular.mock.module('ui.router'));
	beforeEach(angular.mock.module('tinyApp'));

	beforeEach(inject(function(_$controller_, _MainFactory_) {
		$controller = _$controller_;
		MF = _MainFactory_;

		spyOn(MF, 'getGreeting').and.callFake(function() {
			return testGreeting;
		});

		AC = $controller('AboutCtrl', { MainFactory: MF });
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