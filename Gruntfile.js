'use strict';

module.exports = function(grunt) {
    grunt.config.init({
        'siml' : {
            'options' : {
                'parse' : 'html5',
                'pretty' : false
            },
            'generate-fixture' : {
                'files' : [
                    {
                        'expand' : true,
                        'cwd' : 'test/fixture',
                        'src' : [ '**/*.siml' ],
                        'dest' : 'test/output',
                        'ext' : '.html'
                    }
                ]
            }
        }
    });

    grunt.registerTask('assert', 'assert the fixture succeeded', function () {
        var fs,
            output;

        fs = require('fs');
        output = fs.readFileSync('test/output/index.html', 'utf-8');

        if (
            output !==
            '<!doctype html><html lang="en-GB"><p>test</p></html>'
        ) {
            throw new Error('grunt-siml is failing...');
        }

        console.log('grunt-siml is succeeding!');
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('test', ['siml', 'assert']);

    grunt.registerTask('default', ['test']);
};
