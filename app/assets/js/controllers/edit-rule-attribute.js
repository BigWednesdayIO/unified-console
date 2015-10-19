function EditRuleAttributeController ($mdDialog, rule, action) {
	var vm = this;

	vm.title = action.title;
	vm.rule = rule;
	vm.action = action;

	vm.confirm = function() {
		$mdDialog.hide(vm.rule);
	};
	vm.cancel = $mdDialog.cancel;
}

angular
	.module('ucApp')
	.controller('EditRuleAttributeController', EditRuleAttributeController);
