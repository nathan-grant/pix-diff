'use strict';

exports.config = {

    specs: [
        '*.spec.js'
    ],

    capabilities: {
        browserName: 'chrome'
    },

    baseUrl: 'http://www.example.com',

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