// example of testing non-http functions

describe('Main factory', function () {
	var MainFactory;

	beforeEach(angular.mock.module('tinyApp'));

	// Before each test set our injected Users factory (_Users_) to our local Users variable
	beforeEach(inject(function (_MainFactory_) {
		MainFactory = _MainFactory_;
	}));

	// A simple test to verify the Users factory exists
	it('MainFactory should exist', function () {
		expect(MainFactory).toBeDefined();
	});

	describe('non-http functions', function () {
		it('getGreeting should exist', function () {
			expect(MainFactory.getGreeting).toBeDefined();
		});

		it('getGreeting should return a greeting to bob', function () {
			expect(MainFactory.getGreeting()).toEqual('hi bob');
		});
	})
});