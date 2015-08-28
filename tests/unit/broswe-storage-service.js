describe('BrowserStorageService', function() {
	beforeEach(module('ucApp'));

	var browserStorage;

	beforeEach(inject(function(_browserStorage_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		browserStorage = _browserStorage_;
	}));

	describe('browserStorage', function() {
		it('should set and retrieve a string', function() {
			browserStorage.setItem('foo', 'bar');

			expect(browserStorage.getItem('foo')).toEqual('bar');
		});

		it('should allow a specific value to be removed', function() {
			browserStorage.setItem('foo', 'bar');
			browserStorage.removeItem('foo');
			expect(browserStorage.getItem('foo')).not.toEqual('bar');
		});

		it('should allow all values to be removed', function() {
			browserStorage.setItem('foo', 'bar');
			browserStorage.setItem('bar', 'baz');

			expect(browserStorage.getItem('foo')).toEqual('bar');
			expect(browserStorage.getItem('bar')).toEqual('baz');

			browserStorage.clear();

			expect(browserStorage.getItem('foo')).not.toEqual('bar');
			expect(browserStorage.getItem('bar')).not.toEqual('baz');
		});
	});
});
