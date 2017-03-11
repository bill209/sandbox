describe('Main factory', function() {
	var MainFactory;

	var greeting = 'hi bob';

	var allScotches2 = [
		{ "name": "lagavulin" },
		{ "name": "laphroaig" },
		{ "name": "oban" },
		{ "name": "macallan" },
		{ "name": "talisker" },
		{ "name": "glenmorangie" }
	];
	 
	var allScotches = [{name:'lagavulin'},{name:'laphroaig'},{name:'oban'},{name:'macallan'},{name:'talisker'},{name:'glenmorangie'}];

	// Before each test load our api.users module
	beforeEach(angular.mock.module('tinyApp'));

	// Before each test set our injected Users factory (_Users_) to our local Users variable
	beforeEach(inject(function(_MainFactory_) {
		MainFactory = _MainFactory_;
	}));

	// A simple test to verify the Users factory exists
	it('should exist', function() {
		expect(MainFactory).toBeDefined();
	});

	// A set of tests for our Users.all() method
	describe('.getGreeting()', function() {
		// A simple test to verify the method all exists
		it('should exist', function() {
			expect(MainFactory.getScotches).toBeDefined();
		});
	});

	// A test to verify that calling getScotches() returns the array of scotches we hard-coded above
	it('should return a greeting to bob', function() {
		expect(MainFactory.getGreeting()).toEqual(greeting);
	});

});