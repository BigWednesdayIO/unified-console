function EditRuleAttributeController ($mdDialog, rule, action) {
	var vm = this;

	vm.title = action.title;
	vm.rule = rule;
	vm.action = action;

	vm.confirm = function() {
		vm.rule.actions = vm.rule.actions.filter(function(action) {
			return action.parameters.ids.length;
		});
		$mdDialog.hide(vm.rule);
	};
	vm.cancel = $mdDialog.cancel;
}

angular
	.module('ucApp')
	.controller('EditRuleAttributeController', EditRuleAttributeController);
