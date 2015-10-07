function RefinementsController (refinementsData) {
	var vm = this;

	vm.refinements = refinementsData;
	vm.selectedRefinements = {
		category: {
			spirits: true
		}
	};
	vm.openNav = 'category';
}

RefinementsController.resolve = /* @ngInject */ {
	refinementsData: function($http) {
		return $http({
			method: 'GET',
			url: '/mocks/refinements.json'
		});
	}	
};

angular
	.module('ucApp')
	.controller('RefinementsController', RefinementsController);
