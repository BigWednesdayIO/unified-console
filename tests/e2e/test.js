describe('My app', function() {
	beforeEach(function() {
		browser.get('/');
	});

	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('Big Wednesday IO');
	});
});
