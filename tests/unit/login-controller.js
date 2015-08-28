describe('LoginController', function() {
	var $controller,
		$event = {
			preventDefault: function() {}
		};

	beforeEach(module('ucApp'));

	beforeEach(inject(function(_$controller_) {
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
	}));

	describe('vm.errorMessage', function() {
		it('should not be defined initially', function() {
			var vm = new $controller('LoginController');

			expect(vm.errorMessage).toBeFalsy();
		});

		describe('when form is submitted', function() {
			var vm;

			beforeEach(function() {
				vm = new $controller('LoginController');
			});

			it('should flag invalid email', function() {
				vm.loginForm = {
					$invalid: true,
					email: {$invalid: true},
					password: {$invalid: false}
				};

				vm.submitLogin($event);

				expect(vm.errorMessage).toMatch('email');
			});

			it('should flag invalid password', function() {
				vm.loginForm = {
					$invalid: true,
					email: {$invalid: false},
					password: {$invalid: true}
				};

				vm.submitLogin($event);

				expect(vm.errorMessage).toMatch('password');
			});

			it('should not exist for valid form', function() {
				vm.loginForm = {$invalid: false};

				vm.submitLogin($event);

				expect(vm.errorMessage).toBeFalsy();
			});
		});
	});
});
