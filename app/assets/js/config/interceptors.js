function InterceptorsConfig ($httpProvider) {
	$httpProvider.interceptors.push(
		'BasicValidationInterceptor'
	);
}

angular
	.module('ucApp')
	.config(InterceptorsConfig);
