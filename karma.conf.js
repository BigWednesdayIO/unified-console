module.exports = function(config){
	config.set({

		basePath : './',

		files : [
			'app/assets/vendor/angular/angular.js',
			'app/assets/vendor/angular-ui-router/release/angular-ui-router.js',
			'app/assets/vendor/angular-aria/angular-aria.js',
			// 'app/assets/vendor/angular-mocks/angular-mocks.js',
			'app/assets/vendor/angular-material/angular-material.js',
			'app/assets/js/app.js'
		],

		autoWatch : true,

		frameworks: ['jasmine'],

		browsers : ['Chrome'],

		plugins : [
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-jasmine',
			'karma-junit-reporter'
		],

		junitReporter : {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}

	});
};
