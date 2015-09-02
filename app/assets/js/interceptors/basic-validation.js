function BasicValidationInterceptor ($q, $log) {
	function handleResponseError (response) {
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

	return {
		response: function(response) {
			if (response.headers()['content-type'].match('application/json')) {
				if ((!response.data || typeof response.data !== 'object') && response.status !== 204) {
					return $q.reject(handleResponseError(response));
				}
				return response.data;
			}
			return response;
		},
		responseError: handleResponseError
	};
}

angular
	.module('ucApp')
	.factory('BasicValidationInterceptor', BasicValidationInterceptor);
