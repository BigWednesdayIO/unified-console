function RoutingConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('login', {
			url: '/',
			controller: 'LoginController as vm',
			resolve: LoginController.resolve,
			templateUrl: 'views/login.html'
		})
		.state('dashboard', {
			url: '/dashboard',
			controller: 'DashboardController as vm',
			resolve: DashboardController.resolve,
			templateUrl: 'views/dashboard.html'
		})
		.state('product-list', {
			url: '/product-list',
			views: {
				'section-heading':  {
					templateUrl: 'views/partials/products-header.html'
				},
				'sidebar': {
					templateUrl: 'views/partials/products-sidebar.html',
					controller: 'RefinementsController as vm',
					resolve: RefinementsController.resolve
				},
				'': {
					templateUrl: 'views/product-list.html',
					controller: 'ProductListController as vm',
					resolve: ProductListController.resolve
				},
				'bottom-drawer': {
					templateUrl: 'views/partials/basket-drawer.html',
					controller: 'BasketDrawerController as vm'
				}
			}
		});

	$urlRouterProvider.otherwise("/");

	$locationProvider.html5Mode(true);
}

angular
	.module('ucApp')
	.config(RoutingConfig);
