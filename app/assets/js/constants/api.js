function APIConstant () {
	var API = {};

	API.base = 'http://demo6480856.mockable.io/';
	API.authentication = API.base + 'v1/authentication';

	return API;
}

angular
	.module('ppApp')
	.constant('API', APIConstant());
