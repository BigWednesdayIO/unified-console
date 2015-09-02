describe('LoginController', function() {
	var $controller,
		rulesData = [
			{
				id: "001",
				name: "Published and unpublished match",
				last_updated: "2015-08-18T06:36:40+00:00",
				last_published: "2015-08-18T06:36:40+00:00"
			}, {
				id: "002",
				name: "Updated, then published",
				last_updated: "2015-08-18T06:36:40+00:00",
				last_published: "2015-08-28T16:30:45+00:00"
			}, {
				id: "003",
				name: "Updated more recently than published",
				last_updated: "2015-08-18T06:36:40+00:00",
				last_published: "2015-08-08T16:30:45+00:00"
			}, {
				id: "004",
				name: "Never published",
				last_updated: "2015-08-18T06:36:40+00:00",
				last_published: null
			}
		],
		vm;

	beforeEach(module('ucApp'));

	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	describe('vm.ruleIsPublished', function() {
		beforeEach(function() {
			vm = new $controller('DashboardController', {rulesData: rulesData});
		});

		it('is true when updated and published match', function() {
			expect(vm.ruleIsPublished(vm.rules[0])).toBeTruthy();
		});

		it('is true when published is after updated', function() {
			expect(vm.ruleIsPublished(vm.rules[1])).toBeTruthy();
		});

		it('is false when updated is after published', function() {
			expect(vm.ruleIsPublished(vm.rules[2])).toBeFalsy();
		});

		it('is false when never published', function() {
			expect(vm.ruleIsPublished(vm.rules[3])).toBeFalsy();
		});
	});

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
