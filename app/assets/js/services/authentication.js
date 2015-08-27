function AuthenticationService ($http, $q, API, session) {
	var service = this;

	service.create = function(credentials) {
		return $http({
			url: API.authentication,
			method: 'POST',
			data: credentials
		})
			.then(function(response) {
				if (typeof response.data !== 'object') {
					return $q.reject(response);
				}
				session.storeInfo(response.data);
				return response.data;
			});
	};

	service.destroy = function() {
		return $http({
			url: API.authentication + '/' + session.getInfo().token,
			method: 'DELETE'
		})
			.then(function(response) {
				session.destroy();
				return response.data;
			});
	};
}

angular
	.module('ppApp')
	.service('authentication', AuthenticationService);
