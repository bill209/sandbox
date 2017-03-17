// Karma configuration
// Generated on Tue Mar 07 2017 15:38:34 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-mocks/angular-mocks.js',
			'app/js/main.js',
      'app/js/controllers/about.js',
      'app/js/controllers/main.js',
      'app/js/factories/mainFactory.js',
			'app/js/components/main.js',
			'app/js/components/bob_1.js',
			'app/js/components/bob_2.js',
			'app/js/components/bob_3.js',
			'app/js/components/bob_4.js',
			'app/js/components/bob_5.js',
			'app/js/components/bob_6.js',

			// test files
      // 'app/js/tests/controllers/test.spec.js',
      // 'app/js/tests/controllers/about.spec.js',
      'app/js/tests/controllers/main.spec.js',
      'app/js/tests/components/main.spec.js',
      'app/js/tests/components/bob_1.spec.js',
      'app/js/tests/components/bob_2.spec.js',
      'app/js/tests/components/bob_3.spec.js',
      'app/js/tests/components/bob_4.spec.js',
			'app/js/tests/components/bob_5.spec.js',
			'app/js/tests/components/bob_6.spec.js',
			'app/js/tests/factories/main.spec.js',
			'app/js/tests/factories/bob_1.spec.js',
			'app/js/tests/factories/bob_2.spec.js',
			'app/js/tests/factories/bob_3.spec.js',

			// templates
			'app/js/**/*.tpl.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

		preprocessors: {
			"app/js/**/*.tpl.html": ["ng-html2js"]
		},

		ngHtml2JsPreprocessor: {
			// the name of the Angular module to create
			stripPrefix: 'app/',
			moduleName: "my.templates"
		},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity


  })
}
