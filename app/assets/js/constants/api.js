function APIConstant () {
	var API = {};

	API.base = 'http://demo6480856.mockable.io/';
	API.authentication = API.base + 'v1/authentication';
	API.users = API.base + 'v1/users';
	API.rules = API.base + 'v1/rules';

	return API;
}

angular
	.module('ucApp')
	.constant('API', APIConstant());
