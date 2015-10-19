function NaturalLanguageDateDirective ($filter) {
	return {
		restrict: 'EA',
		scope: {
			label: '=',
			options: '=',
			date: '='
		},
		controller: function() {
			var vm = this;

			var customDateOption = {
				label: 'choose date',
				value: 'choose date'
			};

			vm.hoursOfDay = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
			vm.minutesOfHour = [0, 15, 30, 45];

			vm.customDate = vm.date;

			vm.dateOptions = vm.options.concat([customDateOption]);
			vm.nlDate = null;

			vm.updateDate = function() {
				if (vm.nlDate === 'choose date') {
					vm.inputCustomDate = true;
				}
			}

			vm.customDateSelected = function() {
				if (vm.day && vm.day !== '') {
					vm.dateOptions = [{
						label: vm.day,
						value: vm.day
					}].concat(vm.options, [customDateOption]);
				}

				vm.nlDate = vm.dateOptions[1].value;
				vm.inputCustomDate = false;
			};

			vm.updateTime = function() {
				vm.date = vm.day + 'T' + vm.hours + ':' + vm.minutes + ':00Z';
			};
		},
		controllerAs: 'vm',
		bindToController: true,
		templateUrl: 'views/partials/natural-language-date.html'
	};
}

angular
	.module('ucApp')
	.directive('naturalLanguageDate', NaturalLanguageDateDirective);
