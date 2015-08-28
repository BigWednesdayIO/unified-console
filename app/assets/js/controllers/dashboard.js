function DashboardController (rulesData) {
	var vm = this;

	vm.rules = rulesData;

	vm.editRule = function(rule) {
		return rule.id;
	};
}

DashboardController.resolve = /* @ngInject */ {
	rulesData: function(rulesService) {
		return rulesService
			.getRules();
	}
};

angular
	.module('ucApp')
	.controller('DashboardController', DashboardController);
