// example of calling multiple factory http calls separately

describe('bob2 factory', function(){
	var allScotches = [{name:'lagavulin'},{name:'laphroaig'},{name:'oban'},{name:'macallan'},{name:'talisker'},{name:'glenmorangie'}];
	var scotches, favScotch, BF, $q, $http, $httpBackend, scope;

	beforeEach(angular.mock.module('tinyApp'));

	beforeEach(inject(function(_bob2factory_, _$rootScope_, _$httpBackend_){
		BF = _bob2factory_;
		$httpBackend = _$httpBackend_;
		scope = _$rootScope_.$new();
	}));

	it('bob2factory should exist', function() {
		expect(BF).toBeDefined();
	});

	it('getScotches returns all scotches', function() {

		$httpBackend
			.when('GET', function (url) {
				return url.indexOf('getScotches') !== -1;
			})
			.respond(200, allScotches);

		BF.getScotches().then(function (response) {
			scotches = response;
		})

		$httpBackend.flush();

		expect(scotches).toEqual(allScotches);
	});

	it('getScotch returns one scotch', function() {

		$httpBackend
			.when('GET', function(url) {
				return url.indexOf('2') !== -1;
			})
			.respond(200, { name: 'oban' });

		BF.getFavoriteScotch(2).then(function(response) {
			favScotch = response;
		})

		$httpBackend.flush();

		expect(favScotch).toEqual({ name: 'oban'});
	});
})