function RoutingConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('login', {
			url: '/',
			controller: 'LoginController as vm',
			resolve: LoginController.resolve,
			templateUrl: 'views/login.html'
		})
		.state('personalisation', {
			views: {
				'section-heading': {
					templateUrl: 'views/partials/personalisation-header.html'
				},
				'sidebar': {
					templateUrl: 'views/partials/menu.html'
				}
			}
		})
			.state('home', {
				parent: 'personalisation',
				url: '/personalisation/',
				views: {
					'@': {
						templateUrl: 'views/dashboard.html',
						controller: 'DashboardController as vm',
						resolve: DashboardController.resolve
					}
				}
			})
			.state('new-rule', {
				parent: 'personalisation',
				url: '/rule/?type',
				views: {
					'@': {
						templateUrl: 'views/preview.html'
					},
					'sidebar-right@': {
						templateUrl: 'views/rule.html',
						controller: 'RuleController as vm',
						resolve: RuleController.resolve
					}
				}
			})
			.state('edit-rule', {
				parent: 'personalisation',
				url: '/rule/:id/',
				views: {
					'@': {
						templateUrl: 'views/preview.html'
					},
					'sidebar-right@': {
						templateUrl: 'views/rule.html',
						controller: 'RuleController as vm',
						resolve: RuleController.resolve
					}
				}
			});

	$urlRouterProvider.otherwise("/personalisation/");

	$locationProvider.html5Mode(true);
}

angular
	.module('ucApp')
	.config(RoutingConfig);
