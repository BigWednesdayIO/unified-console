describe('LoginController', function() {
	var $controller,
		rulesData = [
			{
				id: "001",
				name: "Highlight expensive products",
				last_updated: "2015-08-18T06:36:40+00:00",
				last_published: "2015-08-28T16:30:45+00:00"
			}, {
				id: "002",
				name: "Highlight cheap products",
				last_updated: "2015-08-18T06:36:40+00:00",
				last_published: "2015-08-28T16:30:45+00:00"
			}, {
				id: "003",
				name: "Canned results for 'help'",
				last_updated: "2015-08-18T06:36:40+00:00",
				last_published: "2015-08-28T16:30:45+00:00"
			}, {
				id: "004",
				name: "Canned results for 'sale'",
				last_updated: "2015-08-18T06:36:40+00:00",
				last_published: "2015-08-28T16:30:45+00:00"
			}, {
				id: "005",
				name: "Test promo",
				last_updated: "2015-08-18T06:36:40+00:00",
				last_published: null
			}, {
				id: "006",
				name: "Test promo 2",
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

		it('handles a never published rule', function() {
			vm.ruleIsPublished(vm.rules[5]);
			expect(vm.errorMessage).toBeFalsy();
		});		
	});
});
