module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            compass: {
                files: [
                    'bower_components/gumby/sass/**/*.scss'
                ],
                tasks: ['compass']
            },
            css: {
                files: [
                    'bower_components/gumby/css/gumby.css'
                ],
                tasks: ['cssmin', 'notify:sass']
            },
            js: {
                files: [
                    'js/*'
                ],
                tasks: ['uglify', 'notify:js']
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            combinejs: {
                files: {
                    '<%= app_location %>/js/all.min.js': [
                        'js/app.js'
                    ]
                }
            }
        },

        compass: {
            dev: {
                options: {
                    config: 'gumbyConfig.rb'
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    '<%= app_location %>/css/style.css': [
                        'bower_components/gumby/css/gumby.css'
                    ]
                }
            }
        },

        notify: {
            sass: {
                options: {
                    title: "Task Complete",
                    message: "Your Sass has been compiled and concatenated!"
                }
            },
            js: {
                options: {
                    title: "Task Complete",
                    message: "Your Javascript files has been minified and concatenated!"
                }
            }
        },

        'app_location': '../'

    });

    // Load grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-notify');

};