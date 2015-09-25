function SessionService ($location, browserStorage) {
	var service = {};

	service.getInfo = function() {
		return {
			token: browserStorage.getItem('session_token'),
			user_id: browserStorage.getItem('user_id')
		};
	};

	service.storeInfo = function(info) {
		browserStorage.setItem('session_token', info.token);
		browserStorage.setItem('user_id', info.user.id);
	};

	service.exists = function() {
		var session = service.getInfo(),
			exists = !!(session.token && session.user_id),
			token;
		if (!exists) {
			// Temporary
			token = $location.search().token;
			if (token) {
				service.storeInfo({
					token: token,
					user: {
						id: 3
					}
				});
				exists = true;
			}
		}
		return exists;
	};

	service.destroy = function() {
		browserStorage.clear();
	};

	return service;
}

angular
	.module('ucApp')
	.factory('session', SessionService);
