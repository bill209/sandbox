// example of testing factory http call that modifies returned data

describe('bob3 factory', function(){

	beforeEach(angular.mock.module('tinyApp'));

	beforeEach(inject(function(_MainFactory_, _$rootScope_, _$httpBackend_){
		MF = _MainFactory_;
		$httpBackend = _$httpBackend_;
		scope = _$rootScope_.$new();
	}));

	it('mainFactory should exist', function() {
		expect(MF).toBeDefined();
	});

	it('convertFtoC should convert F to C, and round result', function() {

		$httpBackend
			.when('GET', function (url) {
				return url.indexOf('getFtoC') !== -1;
			})
			.respond(200, '22.222');

		MF.convertFtoC(72).then(function (response) {
			cTemp = response;
		})

		$httpBackend.flush();

		// the call to convertFtoC rounds 22.222 to 22
		expect(cTemp).toEqual(22);
	});

})