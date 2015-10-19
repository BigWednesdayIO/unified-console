function RuleRemoveFromListingDirective (_) {
	return {
		restrict: 'EA',
		scope: {
			actions: '='
		},		
		controller: function() {
			var vm = this;

			vm.index = _.findIndex(vm.actions, {name: 'removeIds'});
			if (vm.index === -1) {
				vm.index = vm.actions.length;
				vm.actions.push({
					name: 'removeIds',
					parameters: {
						ids: []
					}
				});
			}
		},
		controllerAs: 'vm',
		bindToController: true,
		template: '<md-chips ng-model="vm.actions[vm.index].parameters.ids" secondary-placeholder="Type something and hit enter"></md-chips>'
	}	
}

angular
	.module('ucApp')
	.directive('ruleRemoveFromListing', RuleRemoveFromListingDirective);
