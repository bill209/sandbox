describe("testit", function() {
	var testfunc;

	beforeEach(function() {
		testfunc = new PID_Controller();
	});

	it("should double the number", function() {
		testfunc.double(3);

		expect(testfunc.result).toEqual(6);

	});
});
