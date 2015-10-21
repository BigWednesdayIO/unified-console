function APIConstant () {
	var API = {};

	API.base = 'http://demo6480856.mockable.io/';
	API.authentication = API.base + 'v1/authentication';
	API.users = API.base + 'v1/users';

	API.base = 'http://localhost:3000/';
	API.rules = API.base + 'v1/rules';
	API.publishRule = API.base + 'v1/publish-rule';
	API.unpublishRule = API.base + 'v1/unpublish-rule';

	return API;
}

angular
	.module('ucApp')
	.constant('API', APIConstant());
