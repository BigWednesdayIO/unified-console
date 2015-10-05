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
		.state('applications', {
			url: '/applications',
			controller: 'ApplicationsController as vm',
			resolve: ApplicationsController.resolve,
			templateUrl: 'views/applications.html'
		})
		.state('timeline', {
			url: '/timeline',
			controller: 'TimelineController as vm',
			templateUrl: 'views/timeline.html'
		});

	$urlRouterProvider.otherwise("/");

	$locationProvider.html5Mode(true);
}

angular
	.module('ucApp')
	.config(RoutingConfig);
