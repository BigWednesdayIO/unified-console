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
		});

	$urlRouterProvider.otherwise("/");

	$locationProvider.html5Mode(true);
}

angular
	.module('ucApp')
	.config(RoutingConfig);
