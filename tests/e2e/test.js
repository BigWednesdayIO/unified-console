describe('My app', function() {
	beforeEach(function() {
		browser.get('/');
	});

	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('Unified Console | Big Wednesday IO');
	});
});
