describe('LoginController', function() {
	beforeEach(module('ucApp'));

	var $controller,
		$rootScope,
		browserStorage;

	beforeEach(inject(function(_$controller_, _$rootScope_, _browserStorage_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		browserStorage = _browserStorage_;
	}));

	describe('vm.isLoggedIn', function() {
		describe('when not logged in', function() {
			beforeEach(function() {
				window.localStorage.clear();
			});

			it('should be false', function() {
				var vm = new $controller('UserController');

				expect(vm.isLoggedIn).toBe(false);
			});

			describe('and $state changes', function() {
				it('should still be false', function() {
					var vm = new $controller('UserController');

					vm.isLoggedIn = null;

					$rootScope.$emit('$stateChangeStart');

					expect(vm.isLoggedIn).toBe(false);
				});

				it('should be true when values set', function() {
					var vm = new $controller('UserController');

					// Simulat login
					browserStorage.setItem('session_token', ':token');
					browserStorage.setItem('user_id', ':id');
					$rootScope.$emit('$stateChangeStart');

					expect(vm.isLoggedIn).toBe(true);
				});
			});
		});

		describe('when logged in', function() {
			beforeEach(function() {
				browserStorage.setItem('session_token', ':token');
				browserStorage.setItem('user_id', ':id');
			});

			it('should be true', function() {
				var vm = new $controller('UserController');

				expect(vm.isLoggedIn).toBe(true);
			});
		});			
	});
});
