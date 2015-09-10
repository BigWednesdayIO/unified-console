function RulesService ($http, $q, API) {
	var service = this;

	service.getRules = function() {
		return $http({
			method: 'GET',
			url: API.rules
		});
	};

	service.ruleIsPublished = function(rule) {
		return rule.last_published && new Date(rule.last_published) >= new Date(rule.last_updated);
	};
}

angular
	.module('ucApp')
	.service('rulesService', RulesService);
