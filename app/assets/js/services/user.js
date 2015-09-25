function UserService ($http, $q, API, session) {
	var service = this;

	function getUserId () {
		var deferred = $q.defer(),
			user_id = session.getInfo().user_id;

		if (user_id) {
			deferred.resolve(user_id);
		} else {
			deferred.reject({
				message: 'No user id stored'
			});
		}

		return deferred.promise;
	}

	service.getUserInfo = function() {
		return getUserId()
			.then(function(user_id) {
				return $http({
					method: 'GET',
					url: API.users + '/' + user_id
				});
			});
	};

	service.getUserApplications = function() {
		return getUserId()
			.then(function(user_id) {
				return $http({
					url: API.users + '/' + user_id + '/applications',
					method: 'GET'
				})
			});
	};
}

angular
	.module('ucApp')
	.service('userService', UserService);
