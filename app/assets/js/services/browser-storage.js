function BrowserStorageService ($window) {
	return $window.localStorage;
}

angular
	.module('ucApp')
	.factory('browserStorage', BrowserStorageService);
