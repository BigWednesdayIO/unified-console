function UserController ($rootScope, $state, authentication, session) {
	var vm = this;

	vm.isLoggedIn = session.exists();

	vm.logOut = function(e) {
		e.preventDefault();

		authentication
			.destroy()
			.then(function() {
				$state.go('login');
			});
	};

	$rootScope.$on('$stateChangeStart', function() {
		vm.isLoggedIn = session.exists();
	});
}

angular
	.module('ucApp')
	.controller('UserController', UserController);
