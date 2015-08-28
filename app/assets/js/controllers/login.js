function LoginController ($state, authentication) {
	var vm = this;

	vm.submitLogin = function(e) {
		var fields = [];

		e.preventDefault();

		vm.errorMessage = null;

		if (vm.loginForm.$invalid) {
			vm.errorMessage = 'Please enter a valid ';
			if (vm.loginForm.email.$invalid) {
				fields.push('email address');
			}
			if (vm.loginForm.password.$invalid) {
				fields.push('password');
			}
			vm.errorMessage += fields.join(' and ');
			return;
		}

		authentication
			.create({
				email: vm.email,
				password: vm.password
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
	.module('ucApp')
	.controller('LoginController', LoginController);
