exports.config = {
    // Point config to selenium jar so that protractor starts and stops
    // selenium server. Update version accordingly.
    // https://github.com/mllrsohn/gulp-protractor
    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar',
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    multiCapabilities: [{
        browserName: 'firefox'
    }],
    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        print: function() {},
        defaultTimeoutInterval: 30000
    },
    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    }

};