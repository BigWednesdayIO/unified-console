function LoginController ($state, $window, authentication, authenticationProviders) {
	var vm = this;

	vm.authenticationProviders = authenticationProviders;

	vm.loginWith = function(provider) {
		$window.location = provider.url;
	}
}

LoginController.resolve = /* @ngInject */ {
	authenticationProviders: function(authentication) {
		return authentication
			.getProviders();
	},
	sessionExists: function($location, $state, session) {
		if (session.exists()) {
			// return $state.go('dashboard');
			$location.url('/dashboard');
		}
	}
};

angular
	.module('ucApp')
	.controller('LoginController', LoginController);
