// example of testing multiple http calls

describe('bob2 factory', function(){
	var allScotches = [{name:'lagavulin'},{name:'laphroaig'},{name:'oban'},{name:'macallan'},{name:'talisker'},{name:'glenmorangie'}];
	var scotches, favScotch, MF, $q, $http, $httpBackend, scope;

	beforeEach(angular.mock.module('tinyApp'));

	beforeEach(inject(function(_MainFactory_, _$rootScope_, _$httpBackend_){
		MF = _MainFactory_;
		$httpBackend = _$httpBackend_;
		scope = _$rootScope_.$new();
	}));

	it('mainFactory should exist', function() {
		expect(MF).toBeDefined();
	});

	it('getScotches returns all scotches', function() {

		$httpBackend
			.when('GET', function (url) {
				return url.indexOf('getScotches') !== -1;
			})
			.respond(200, allScotches);

		MF.getScotches().then(function (response) {
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

		MF.getFavoriteScotch(2).then(function(response) {
			favScotch = response;
		})

		$httpBackend.flush();

		expect(favScotch).toEqual({ name: 'oban'});
	});
})