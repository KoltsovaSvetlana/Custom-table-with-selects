module.exports = function(grunt) {

    grunt.registerTask('watch', [ 'watch' ]);

    grunt.initConfig({
        concat: {
            js: {
                options: {
                    separator: '\n'
                },
                src: [
                    'javascript/*.js',
                    'javascript/controllers/*.js',
                    'javascript/directives/*.js'
                ],
                dest: 'public/js/main.min.js'
            },
        },
        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    'public/js/main.min.js': ['public/js/main.min.js']
                }
            }
        },
        less: {
            style: {
                files: {
                    "public/css/style.css": "less/style.less"
                }
            }
        },
        watch: {
            js: {
                files: ['javascript/*.js'],
                tasks: ['uglify:js','concat:js'],
                options: {
                    livereload: true,
                }
            },
            css: {
                files: ['less/*.less'],
                tasks: ['less:style'],
                options: {
                    livereload: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};

