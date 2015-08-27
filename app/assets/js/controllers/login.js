function LoginController ($state, authentication) {
	var vm = this;

	vm.submitLogin = function(e) {
		e.preventDefault();

		vm.errorMessage = null;

		authentication
			.create({
				email: vm.loginForm.email,
				password: vm.loginForm.password
			})
			.then(function() {
				$state.go('dashboard');
			}, function(error) {
				vm.errorMessage = error.message;
			});
	};
}

LoginController.resolve = /* @ngInject */ {
	sessionExists: function($location, $state, session) {
		if (session.exists()) {
			// return $state.go('dashboard');
			$location.url('/dashboard');
		}
	}
};

angular
	.module('ppApp')
	.controller('LoginController', LoginController);
