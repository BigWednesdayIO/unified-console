function ProductListController (productListData, sortOptions) {
	var vm = this;

	vm.products = productListData;

	vm.sortOptions = sortOptions;
	vm.selectedSort = 'relevance';
	vm.actions = ['Select all', 'View tied', 'View recently bought', 'View previously bought'];
}

ProductListController.resolve = /* @ngInject */ {
	productListData: function($http) {
		return $http({
			method: 'GET',
			url: '/mocks/products.json'
		});
	}	
};

angular
	.module('ucApp')
	.controller('ProductListController', ProductListController);
