function ApplicationsController (userApplications) {
	var vm = this;

	vm.applications = userApplications;
}

ApplicationsController.resolve = /* @ngInject */ {
	userApplications: function(userService) {
		return userService
			.getUserApplications();
	}
};

angular
	.module('ucApp')
	.controller('ApplicationsController', ApplicationsController);
