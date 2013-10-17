// Karma configuration
// Generated on Mon Jun 03 2013 08:56:31 GMT-0400 (Eastern Daylight Time)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,
  'test/test-main.js',
  'test/lib/jasmine-fixture.js',
  {pattern: 'js/**/*.js', included: false},
  {pattern: 'js/templates/*.html', included: false},
  {pattern: 'test/lib/jasmine-jquery.js'},

  {pattern: 'test/**/apps/*Spec.js', included: false},
  {pattern: 'test/**/collections/*Spec.js', included: false},
  {pattern: 'test/**/models/*Spec.js', included: false},

  {pattern: 'lib/**/*.js', included: false},
  {pattern: 'test/lib/**/*.js', included: false}
];


// list of files to exclude
exclude = [
  'js/init.js',
  'js/app.js'
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
