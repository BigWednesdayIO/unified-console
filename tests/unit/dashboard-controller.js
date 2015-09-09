describe('DashboardController', function() {
	var $controller,
		vm;

	beforeEach(module('ucApp'));

	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	describe('vm.rules', function() {
		beforeEach(function() {
			vm = new $controller('DashboardController', {rulesData: rulesData});
		});

		it('is defined', function() {
			expect(vm.rules).toBeDefined();
		});

		it('has as many rules as rulesData', function() {
			expect(vm.rules.length).toBe(rulesData.length);
		});
	})
});
