// test calling a factory HTTP service

describe('Main controller', function() {
	var MF, $q, $httpBackend;
	var RESPONSE_SUCCESS = [{name:'lagavulin'},{name:'laphroaig'},{name:'oban'},{name:'macallan'},{name:'talisker'},{name:'glenmorangie'}];
	var API = 'http://localhost:8081/getScotches';

	beforeEach(angular.mock.module('tinyApp'));

	// Inject $q and $httpBackend
	beforeEach(inject(function(_MainFactory_, _$q_, _$httpBackend_) {
		MF = _MainFactory_;
		$q = _$q_;
		$httpBackend = _$httpBackend_;
	}));

	it('should exist', function() {
		expect(MF).toBeDefined();
	});

	describe('getScotches()', function() {
		var result;

		beforeEach(function() {
			result = {};
			spyOn(MF, "getScotches").and.callThrough();
		});

		it('return list of scotches', function() {

			// Declare the endpoint to hit and return mocked values
			$httpBackend.whenGET(API).respond(200, $q.when(RESPONSE_SUCCESS));

			expect(MF.getScotches).not.toHaveBeenCalled();
			expect(result).toEqual({});

			MF.getScotches()
				.then(function(res) {
					result = res;
				});

			$httpBackend.flush();

			expect(MF.getScotches).toHaveBeenCalled();
			// just check the first one for this test
			expect(result[0].name).toEqual('lagavulin');
		});
	})

});
