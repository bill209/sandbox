// example of catching multiple http calls with one whenGet

describe('bob1 factory', function(){
	var scotches, favScotch, BF, $q, $http, $httpBackend, scope;

	beforeEach(angular.mock.module('tinyApp'));

	beforeEach(inject(function(_bob1factory_, _$rootScope_, _$httpBackend_){
		BF = _bob1factory_;
		$httpBackend = _$httpBackend_;
		scope = _$rootScope_.$new();
	}));

	it('bob1factory should exist', function() {
		expect(BF).toBeDefined();
	});

	it('check multiple http calls', function() {

		$httpBackend
			.when('GET', function(url) {
				// this will catch both factory calls
				return url.indexOf('getScotch') !== -1;
			})
			// but they will both have the same result
			.respond(200, { result: true });

			BF.getScotches().then(function(response) {
				scotches = response;
			})
			BF.getFavoriteScotch(2).then(function(response) {
				favScotch = response;
			})

		$httpBackend.flush();

		expect(scotches).toEqual({ result: true });
		expect(favScotch).toEqual({ result: true });

	});



})