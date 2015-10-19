function DashboardController (rulesService, ruleTypes, rulesData) {
	var vm = this;

	vm.rules = rulesData;
	vm.selectedRule = null;
	vm.selectRule = function(rule) {
		vm.selectedRule = (vm.selectedRule && vm.selectedRule.id === rule.id) ? null : rule ;
	}

	vm.ruleIsPublished = rulesService.ruleIsPublished;

	vm.ruleTypes = ruleTypes;
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
