function APIConstant () {
	var API = {};

	API.base = 'http://demo6480856.mockable.io/';
	API.authentication = API.base + 'v1/authentication';
	API.users = API.base + 'v1/users';
	API.rules = API.base + 'v1/rules';

	API.base = 'https://dashboard.bigwednesday.io:8081/';
	API.applications = API.base + 'applications'
	API.authentication_providers = API.base + 'authentication_providers'
	API.users = API.base + 'users';

	return API;
}

angular
	.module('ucApp')
	.constant('API', APIConstant());
