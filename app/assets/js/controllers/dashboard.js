function DashboardController (rulesService, ruleTypes, rulesData) {
	var vm = this;

	vm.rules = rulesData;
	vm.selectedRule = null;
	vm.selectRule = function(rule) {
		vm.selectedRule = (vm.selectedRule && vm.selectedRule.id === rule.id) ? null : rule ;
	}

	vm.publishRule = function(rule) {
		// is_published flag is updated by switch, API call is enforcing current state
		if (rule.is_published) {
			return rulesService
				.publishRule(rule)
				.then(function() {
					rule.published_at = new Date();
				}, function() {
					rule.is_published = false;
				});
		}
		return rulesService
			.unpublishRule(rule)
			.then(function() {
				rule.published_at = null;
			}, function() {
				rule.is_published = true;
			});
	}

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
