function RuleController ($state, rulesService, ruleData) {
	var vm = this;

	vm.rule = ruleData;

	vm.actions = rulesService.getActionsForRule(vm.rule);

	vm.saveRule = function() {
		rulesService
			.saveRule(vm.rule)
			.then(function(updatedRule) {
				if (vm.rule.id) {
					vm.rule = updatedRule;
				} else {
					$state.go('edit-rule', {id: updatedRule.id});
				}
			});
	};

	vm.deleteRule = function() {
		rulesService
			.deleteRule(vm.rule)
			.then(function() {
				$state.go('personalisations');
			});
	};

	vm.editRuleAttribute = function($event, action) {
		return rulesService
			.editRuleAttribute($event, action, vm.rule)
			.then(function(updatedRule) {
				vm.rule = updatedRule;
			});
	};

	vm.trigger = {
		title: 'Triggers',
		component: 'triggers',
		label: 'Edit triggers'
	};

	vm.schedule = {
		title: 'Schedule',
		component: 'schedule',
		label: 'Edit schedule'
	};
}

RuleController.resolve = /* @ngInject */ {
	ruleData: function($state, $stateParams, rulesService) {
		if ($stateParams.id) {
			return rulesService
				.getRule($stateParams.id)
				.catch(function() {
					$state.go('home');
				});
		}
		return new rulesService.shellRule($stateParams.type);
	}
};

angular
	.module('ucApp')
	.controller('RuleController', RuleController);
