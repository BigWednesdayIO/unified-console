function RulesService ($http, $q, $mdDialog, API, toastService, ruleActions) {
	var service = this;

	service.getRules = function() {
		return $http({
			method: 'GET',
			url: API.rules
		});
	};

	service.getRule = function(id) {
		return $http({
			method: 'GET',
			url: API.rules + '/' + id
		})
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
		return rule.last_published && new Date(rule.last_published) >= new Date(rule.last_updated);
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
