function ApplicationsService ($http, $q, API) {
	var service = this;

	service.getApplication = function(id) {
		return $http({
			url: API.applications + '/' + id,
			method: 'GET'
		});
	};

	service.getApplicationPermissions = function(id) {
		return $http({
			url: API.applications + '/' + id + '/permissions',
			method: 'GET'
		});
	};

	service.getApplicationKeys = function(id) {
		return $http({
			url: API.applications + '/' + id + '/keys',
			method: 'GET'
		});
	};

	service.getFullApplicationInfo = function(id) {
		return $q.all({
			base: service.getApplication(id),
			permissions: service.getApplicationPermissions(id),
			keys: service.getApplicationKeys(id)
		})
			.then(function(response) {
				var info = response.base;
				info.keys = response.keys;
				info.permissions = response.permissions;
				return info;
			});
	};
}

angular
	.module('ucApp')
	.service('applicationsService', ApplicationsService);
