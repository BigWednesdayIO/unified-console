function InterceptorsConfig ($httpProvider) {
	$httpProvider.interceptors.push(
		'BasicValidationInterceptor'
	);
}

angular
	.module('ppApp')
	.config(InterceptorsConfig);
