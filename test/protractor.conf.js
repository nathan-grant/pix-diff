'use strict';

exports.config = {

    baseUrl: 'http://www.example.com',

    specs: ['*.spec.js'],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },

    onPrepare: function() {
        var PixDiff = require('../');
        browser.pixDiff = new PixDiff({
            basePath: 'test/screenshots',
            width: 800,
            height: 600
        });

        browser.ignoreSynchronization = true;
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000,
        showColors: true
    }
};