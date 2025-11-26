module.exports = function(grunt) {
    var fs,
            parser,
            siml;

    siml = require('siml');
    fs = require('fs');

    parser = {
        'html5': siml.html5,
        'angular': siml.angular,
        'default': siml
    };

    grunt.registerMultiTask('siml', 'SIML in Grunt.', function() {
        var globOptions,
            options,
            parse;

        options = this.options({
            'delimeter': '\n',
            'curly': false,
            'pretty': true,
            'indent': '    ',
            'parse': 'default'
        });

        if (!parser[options.parse]) {
            options.parse = 'default';
        }

        parse = parser[options.parse];

        globOptions = {
            'nonull': true
        };

        this.files.forEach(function(pattern) {
            var document,
                files,
                src;

            files = grunt.file.expand(globOptions, pattern.src);

            src = files.map(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.error(
                        'Source file "' + filepath.red + '" not found.'
                    );

                    return '';
                }

                return grunt.file.read(filepath);
            });

            src = src.join(options.delimeter);

            document = parse.parse(src, options);

            grunt.file.write(pattern.dest, document);

            return grunt.log.writeln(
                [
                    'File `',
                    pattern.dest.green,
                    '` created in ',
                    options.parse,
                    ' mode.'
                ].join('')
            );
        });
    });
};

