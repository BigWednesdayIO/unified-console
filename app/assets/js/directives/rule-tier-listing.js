function RuleTierListingDirective (_) {
	return {
		restrict: 'EA',
		scope: {
			actions: '='
		},		
		controller: function() {
			var vm = this;

			var numberedTiers = _.range(0, 10).map(function(tier) {
				return 'tier-' + tier;
			});

			var positions = ['positionTop'].concat(numberedTiers, ['positionBottom']);

			vm.actions = positions.map(function(name) {
				return _.find(vm.actions, {name: name}) || {
					name: name,
					parameters: {
						ids: []
					}
				};
			});

			vm.tabHeadings = {
				'positionTop': 'top',
				'tier-0': '0',
				'tier-1': '1',
				'tier-2': '2',
				'tier-3': '3',
				'tier-4': '4',
				'tier-5': '5',
				'tier-6': '6',
				'tier-7': '7',
				'tier-8': '8',
				'tier-9': '9',
				'tier-10': '10',
				'positionBottom': 'bottom'
			}
		},
		controllerAs: 'vm',
		bindToController: true,
		templateUrl: 'views/partials/rule-tier-listing.html'
	}	
}

angular
	.module('ucApp')
	.directive('ruleTierListing', RuleTierListingDirective);
