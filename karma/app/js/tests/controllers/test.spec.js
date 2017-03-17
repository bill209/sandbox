describe('Controller: NavCtrl', function () {

	beforeEach(angular.mock.module('ui.router'));
	beforeEach(angular.mock.module('tinyApp'));

	var NC, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function (_$controller_, _$rootScope_) {
		scope = _$rootScope_.$new();
		NC = _$controller_('NavCtrl', { $scope: scope });
	}));

	it('navCtrl test', function () {
		expect(NC).toBeDefined();
	});
});