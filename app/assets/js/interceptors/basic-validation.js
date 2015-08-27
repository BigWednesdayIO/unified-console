function BasicValidationInterceptor ($q, $log) {
	return {
		responseError: function(response) {
			var error = (response.data && typeof response.data === 'object') ? response.data : {};

			if (!error.status) {
				error.status = response.status;
			}

			if (!error.message) {
				error.message = 'An unknown error occurred';
			}

			if (error.status === 401) {
				$state.go('login');
			} else {
				$log.error('API Call failed:', response.config.url, error.status, '-', error.message);
			}

			return $q.reject(error);
		}
	};
}

angular
	.module('ppApp')
	.factory('BasicValidationInterceptor', BasicValidationInterceptor);
