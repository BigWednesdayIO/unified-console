function DashboardController (rulesService, rulesData) {
	var vm = this;

	vm.rules = rulesData;

	vm.ruleIsPublished = rulesService.ruleIsPublished;

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
