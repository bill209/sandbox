// test for scoped var, scoped function, external template to be rendered, and http factory call

describe('Component: bob_6', function () {

	var $compile, scope, controller;
	var MF, $q, $httpBackend;
	var RESPONSE_SUCCESS = [{'name':'oban'}];
	var API = 'http://localhost:8081/getScotch/';

	beforeEach(module('tinyApp'));
	beforeEach(module('my.templates'));

	beforeEach(inject(function(_$rootScope_, _$compile_, _$componentController_){
		scope = _$rootScope_.$new();
		$compile = _$compile_;
		controller = _$componentController_('bob6', {$scope: scope}, { fav: '2'} );
	}));

	it('should expose scope.fav', function() {
		expect(controller.fav).toBeDefined();
		expect(controller.fav).toBe('2');
	});

	it('should expose scope.squareIt function', function() {
		expect(controller.squareIt).toBeDefined();
		expect(controller.squareIt(3)).toEqual(9);
	});

	it('templateUrl is created correctly', function () {
		var element = $compile('<bob6 fav="2"></bob6>')(scope);
		scope.$digest();
		expect(element.html()).toContain("favorite");
	});

	describe('getFavoriteScotch()', function() {
		var result;

		beforeEach(inject(function( _MainFactory_, _$q_, _$httpBackend_){
			MF = _MainFactory_;
			$q = _$q_;
			$httpBackend = _$httpBackend_;
		}));

		beforeEach(function() {
			result = {};
			spyOn(MF, "getFavoriteScotch").and.callThrough();
		});

		it('MainFactory should exist', function() {
			expect(MF).toBeDefined();
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