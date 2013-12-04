module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            compass: {
                files: [
                    'scss/*',
                    'bower_components/normalize-css/normalize.css'
                ],
                tasks: ['compass']
            },
            css: {
                files: [
                    'css/*'
                ],
                tasks: ['cssmin']
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            combinejs: {
                files: {
                    '<%= ghost_location %>content/themes/<%= ghost_theme_name %>/assets/js/all.min.js':
                        [
                            'bower_components/modernizr/modernizr.js',
                            'custom_components/responsive_iframes/responsive_iframes.js'
                        ]
                }
            }
        },

        compass: {
            dev: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'css'
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    '<%= ghost_location %>content/themes/<%= ghost_theme_name %>/assets/css/style.css': ['bower_components/normalize-css/normalize.css', 'css/style.css']
                }
            }
        },

        'ghost_location': '../Ghost/',
        'ghost_theme_name': 'YourThemeName',

    });

    // Load grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

};