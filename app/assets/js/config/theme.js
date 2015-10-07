function ThemeConfig ($mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('green')
		.accentPalette('grey');
}

angular
	.module('ucApp')
	.config(ThemeConfig);
