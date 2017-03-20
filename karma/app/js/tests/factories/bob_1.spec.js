// example of testing multiple http calls with one whenGet

describe('bob1 factory', function(){
	var scotches, favScotch, MF, $httpBackend, scope;

	beforeEach(angular.mock.module('tinyApp'));

	beforeEach(inject(function(_MainFactory_, _$rootScope_, _$httpBackend_){
		MF = _MainFactory_;
		$httpBackend = _$httpBackend_;
		scope = _$rootScope_.$new();
	}));

	it('mainFactory should exist', function() {
		expect(MF).toBeDefined();
	});

	it('check multiple http calls', function() {

		$httpBackend
			.when('GET', function(url) {
				// this will catch both factory calls
				return url.indexOf('getScotch') !== -1;
			})
			// but they will both have the same result
			.respond(200, { result: true });

			MF.getScotches().then(function(response) {
				scotches = response;
			})
			MF.getFavoriteScotch(2).then(function(response) {
				favScotch = response;
			})

		$httpBackend.flush();

		expect(scotches).toEqual({ result: true });
		expect(favScotch).toEqual({ result: true });

	});

})