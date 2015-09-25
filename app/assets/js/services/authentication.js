function AuthenticationService ($http, $q, API, session) {
	var service = this;

	service.getProviders = function() {
		return $http({
			url: API.authentication_providers,
			method: 'GET'
		});
	}

	service.create = function(credentials) {
		return $http({
			url: API.authentication,
			method: 'POST',
			data: credentials
		})
			.then(function(response) {
				session.storeInfo(response);
				return response;
			});
	};

	service.destroy = function() {
		return $http({
			url: API.authentication + '/' + session.getInfo().token,
			method: 'DELETE'
		})
			.then(function(response) {
				session.destroy();
				return response;
			});
	};
}

angular
	.module('ucApp')
	.service('authentication', AuthenticationService);
