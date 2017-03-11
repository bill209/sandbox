// test calling a factory HTTP service

describe('Main component', function() {
	var MF, $q, $httpBackend;
	var RESPONSE_SUCCESS = [{'name':'oban'}];
	var API = 'http://localhost:8081/getScotch/';

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


	describe('getFavoriteScotch()', function() {
		var result;

		beforeEach(function() {
			result = {};
			spyOn(MF, "getFavoriteScotch").and.callThrough();
		});

		it('it should return chosen scotch', function() {
			var search = '2';

			// Declare the endpoint to hit and return mocked values
			$httpBackend.whenGET(API + search).respond(200, $q.when(RESPONSE_SUCCESS));

			expect(MF.getFavoriteScotch).not.toHaveBeenCalled();
			expect(result).toEqual({});

			MF.getFavoriteScotch(search)
				.then(function(res) {
					result = res;
				});

			$httpBackend.flush();

			expect(MF.getFavoriteScotch).toHaveBeenCalledWith(search);
			expect(result[0].name).toEqual('oban');
		});
	})
});
 