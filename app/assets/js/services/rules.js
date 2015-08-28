function RulesService ($http, $q, API) {
	var service = this;

	service.getRules = function() {
		return $http({
			method: 'GET',
			url: API.rules
		});
	};
}

angular
	.module('ucApp')
	.service('rulesService', RulesService);
