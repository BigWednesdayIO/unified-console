function RulesService ($http, $q, $mdDialog, API, toastService, ruleActions) {
	var service = this;

	function setPublishedFlag (rule) {
		rule.is_published = service.ruleIsPublished(rule);
		return rule;
	}

	service.getRules = function() {
		return $http({
			method: 'GET',
			url: API.rules
		})
			.then(function(rules) {
				return rules.map(setPublishedFlag);
			});
	};

	service.getRule = function(id) {
		return $http({
			method: 'GET',
			url: API.rules + '/' + id
		})
			.then(setPublishedFlag);
	};

	service.saveRule = function(rule) {
		var config = {
			method: 'POST',
			url: API.rules,
			data: rule
		};

		if (rule.id) {
			config.method = 'PUT'
			config.url += '/' + rule.id
		}

		return $http(config)
			.then(function(response) {
				toastService.success('Rule saved')
				return response;
			}, function(error) {
				toastService.error('Failed to save rule', error.messages)
				return $q.reject(error);
			});
	};

	service.deleteRule = function(rule) {
		return $http({
			method: 'DELETE',
			url: API.rules + '/' + rule.id,
			data: rule
		})
			.then(function(response) {
				toastService.success('Rule deleted')
				return response;
			}, function(error) {
				toastService.error('Failed to delete rule', error.messages)
				return $q.reject(error);
			});
	};

	service.publishRule = function(rule) {
		return $http({
			method: 'POST',
			url: API.publishRule,
			params: {
				id: rule.id
			},
			data: rule
		})
			.then(function(response) {
				toastService.success('Rule published');
				return response;
			}, function(error) {
				toastService.error('Failed to pushlish rule', error.messages);
				return $q.reject(error);
			});
	};

	service.unpublishRule = function(rule) {
		return $http({
			method: 'POST',
			url: API.unpublishRule,
			params: {
				id: rule.id
			},
			data: rule
		})
			.then(function(response) {
				toastService.success('Rule unpublished');
				return response;
			}, function(error) {
				toastService.error('Failed to unpushlish rule', error.messages);
				return $q.reject(error);
			});
	};

	service.editRuleAttribute = function($event, action, rule) {
		return $mdDialog
			.show({
				targetEvent: $event,
				locals: {
					rule: rule,
					action: action
				},
				templateUrl: 'views/partials/rule-modal.html',
				controller: 'EditRuleAttributeController',
				controllerAs: 'vm',
				bindToController: true,
				clickOutsideToClose: true
			});
	}

	service.getActionsForRule = function(rule) {
		return rule.tags.reduce(function(actions, tag) {
			return actions.concat(ruleActions[tag]);
		}, []);
	};

	service.ruleIsPublished = function(rule) {
		return rule.published_at && new Date(rule.published_at) >= new Date(rule.modified_at);
	};

	service.shellRule = function(type) {
		return {
			id: null,
			name: "",
			tags: type? [type] : [],
			trigger_operator: "OR",
			segment_operator: "AND",
			triggers: [],
			actions: [],
			segments: []
		};
	};
}

angular
	.module('ucApp')
	.service('rulesService', RulesService);
