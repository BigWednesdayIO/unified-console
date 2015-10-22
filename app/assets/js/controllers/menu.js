function MenuController (ruleTypes) {
	var vm = this;

	vm.ruleTypes = ruleTypes;
}

angular
	.module('ucApp')
	.controller('MenuController', MenuController);
