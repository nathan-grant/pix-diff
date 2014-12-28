'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        clean: [
            'test/screenshots/diff/*.png',
            'test/screenshots/example-page*.png'
        ],

        protractor: {
            test: {
                options: {
                    configFile: 'test/protractor.conf.js'
                }
            }
        }

    });

    //tasks
    grunt.registerTask('test', 'Run integration tests', ['clean', 'protractor:test']);
    grunt.registerTask('default', ['test']);
};