function RuleScheduleDirective () {
	return {
		restrict: 'EA',
		scope: {
			rule: '='
		},
		controller: function() {
			var vm = this;

			vm.startOptions = [
				{
					label: 'now',
					value: null,
				}, {
					label: 'today',
					value: new Date()
				}
			];

			vm.endOptions = [
				{
					label: 'always',
					value: null
				}
			];
		},
		controllerAs: 'vm',
		bindToController: true,
		templateUrl: 'views/partials/rule-schedule.html'
	};
}

angular
	.module('ucApp')
	.directive('ruleSchedule', RuleScheduleDirective);
