describe('LoginController', function() {
	beforeEach(module('ucApp'));

	var $controller;

	beforeEach(inject(function(_$controller_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
	}));

	describe('v.errorMessage', function() {
		it('should not be defined initially', function() {
			var vm = this,
				controller = new $controller('LoginController', {$scope: {}}, vm);

			expect(vm.errorMessage).toBeFalsy();
		});
	});
});
