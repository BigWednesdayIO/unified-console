function DashboardController (rulesData) {
	var vm = this;

	vm.rules = rulesData;

	vm.ruleIsPublished = function(rule) {
		return rule.last_published && new Date(rule.last_published) >= new Date(rule.last_updated);
	};

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
