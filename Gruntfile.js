'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        clean: {
            screens: {
                src: [
                    "test/screenshots/*",
                    "!test/screenshots/diff/**",
                    "!test/screenshots/example-fail*.png",
                    "test/screenshots/diff/*.png"
                ]
            }
        },

        protractor: {
            test: {
                options: {
                    configFile: 'test/protractor.conf.js'
                }
            }
        }

    });

    //tasks
    grunt.registerTask('test', 'Run integration tests', ['clean:screens', 'protractor:test']);
    grunt.registerTask('default', ['test']);
};