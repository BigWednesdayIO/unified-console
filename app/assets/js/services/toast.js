function toastService ($mdToast) {
	var service = this;

	function createToast (message) {
		return {
			templateUrl: 'views/partials/toast.html',
			position: 'bottom left',
			locals: {
				message: message
			},
			controller: function($scope, message) {
				$scope.message = message;
			}
		};
	}

	service.success = function(message) {
		$mdToast
			.show(createToast(message));
	};

	service.error = function(message, errors) {
		if (errors) {
			message += '\n' + errors.join('\n');
		}
		$mdToast
			.show(createToast(message));
	};
}

angular
	.module('ucApp')
	.service('toastService', toastService);
