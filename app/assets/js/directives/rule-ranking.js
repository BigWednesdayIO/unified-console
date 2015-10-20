function RuleRankingDirective (metrics, _) {
	return {
		restrict: 'EA',
		scope: {
			actions: '='
		},		
		controller: function() {
			var vm = this;

			var name = 'applyRankingFormula';

			var newAction = {
				name: name,
				parameters: {
					metrics: metrics.map(function(metric) {
						return {
							metric: metric,
							weight: 0
						};
					})
				}
			};

			vm.index = _.findIndex(vm.actions, {name: name});
			if (vm.index === -1) {
				vm.index = vm.actions.length;
				vm.actions.push(newAction);
			}
		},
		controllerAs: 'vm',
		bindToController: true,
		templateUrl: 'views/partials/rule-ranking.html'
	}	
}

angular
	.module('ucApp')
	.directive('ruleRanking', RuleRankingDirective);
