function BrowserStorageService ($window) {
	return $window.localStorage;
}

angular
	.module('ppApp')
	.factory('browserStorage', BrowserStorageService);
