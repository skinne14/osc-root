'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        //////////
        // HTML
        //////////
        
        // shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'cd app; ../jekyll/bin/jekyll build; cd ../'
            },
            jekyllClear: {
                command: 'cd app; rm .jekyll-metadata; cd ../'
            }
        },

        htmlmin: {
            prod: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true
                },
                files: [{
                    expand: true,
                    cwd: 'builds/dev',
                    src: '**/*.html',
                    dest: 'builds/prod/'
                }]
            }
        },

        //////////
        // Static Assets
        //////////
        copy: {
          fonts: {
            files: [{
                expand: true,
                cwd: 'builds/dev/assets/fonts',
                src: '**', 
                dest: 'builds/prod/assets/fonts/'
            }],
          },
          files: {
            files: [{
                expand: true,
                cwd: 'builds/dev/assets/files',
                src: '**', 
                dest: 'builds/prod/assets/files/'
            }],
          },
        },

        imagemin: {
            dynamic: {                      
              files: [{
                expand: true,                  
                cwd: 'builds/dev/assets/img',                   
                src: ['**/*.{png,jpg,gif}'],   
                dest: 'builds/prod/assets/img/',
              }]
            }
        },

        //////////
        // Javascript
        //////////

        // concat config
        concat: {
            options: {
              separator: ';',
            },
            dev: {
              src: ['vendor/jquery/dist/jquery.js', 'vendor/bootstrap-sass/assets/javascripts/bootstrap/collapse.js', 'vendor/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js'],
              dest: 'builds/dev/assets/js/main.js'
            }
        },

        // uglifier config
        uglify: {
            prod: {
              files: {
                'builds/prod/assets/js/main.js': ['builds/dev/assets/js/main.js']
              }
            }
        },

        //////////
        // CSS
        //////////

        // sass (libsass) config
        sass: {
            dev: {
                options: {
                    style: "expanded"
                },
                files: [{
                    src: 'app/_scss/main.scss',
                    dest: 'builds/dev/assets/css/main.css'
                }]
            }
        },

        // purify css
        purifycss: {
            options: {},
            target: {
              src: ['builds/dev/**/*.html', 'builds/dev/assets/*.js'],
              css: ['builds/dev/assets/css/main.css'],
              dest: 'builds/prod/assets/css/main.css'
            }
        },

        // minify css
        cssmin: {
          target: {
            files: [{
              src: 'builds/prod/assets/css/main.css',
              dest: 'builds/prod/assets/css/main.css',
            }]
          }
        },

        //////////
        // Validation, etc.
        //////////

       // bootlint
        bootlint: {
            options: {
              stoponerror: false,
              relaxerror: ['W005']
            },
            files: ['builds/dev/**/*.html']
        }


    });

        

    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-purifycss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bootlint');

    // Register the grunt tasks
    grunt.registerTask('build', ['shell:jekyllBuild','concat','sass']);
    grunt.registerTask('rebuild', ['shell:jekyllClear','build']);

    grunt.registerTask('test', ['bootlint']);

    grunt.registerTask('stage', ['newer:htmlmin','newer:copy','newer:imagemin',
                       'purifycss','cssmin','newer:uglify'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');

};
