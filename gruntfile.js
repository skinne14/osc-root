'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        //////////
        // HTML
        //////////
        
        // shell commands for use in Grunt tasks
        exec: {
            jekyllBuild: {
                command: 'cd app; ../jekyll/bin/jekyll build; cd ../',
                stderr: false,
                callback: function (error, stdout, stderr) {
                    if (stderr) {
                        grunt.warn(stderr)
                  }
                }
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
        // Other Files to Move Around
        //////////
        copy: {
          bootstrapCustom: {
            files: [{
                src: 'app/_scss/_bootstrap-custom.scss', 
                dest: 'vendor/bootstrap-sass/assets/stylesheets/_bootstrap-custom.scss'
            }]
          },
          fonts: {
            files: [{
                expand: true,
                cwd: 'builds/dev/assets/fonts',
                src: '**', 
                dest: 'builds/prod/assets/fonts/'
            }]
          },
          files: {
            files: [{
                expand: true,
                cwd: 'builds/dev/assets/files',
                src: '**', 
                dest: 'builds/prod/assets/files/'
            }]
          },
          sitemap:{
            files: [{
                src: 'builds/dev/sitemap.xml', 
                dest: 'builds/prod/sitemap.xml'
            }]
          },
          hopeAwards:{
            files: [{
                expand: true,
                cwd: 'builds/dev/programs/hope/awards',
                src: '**', 
                dest: 'builds/prod/programs/hope/awards'
            }]
          },
          htaccess:{
            files: [{
                src: 'builds/dev/.htaccess', 
                dest: 'builds/prod/.htaccess'
            }]
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
        },

        // broken links
        linkChecker: {
          options: {
            maxConcurrency: 20,
            callback: function (crawler) {
                crawler.addFetchCondition(function(parsedURL) {
                    // mailto links are obfuscated and confuse the crawler, exclude them
                    return !parsedURL.path.match(/&$/i);
                });
                crawler.addFetchCondition(function(parsedURL) {
                    // don't check the assets folder, causes error and doesn't make sense
                    return !parsedURL.path.match(/assets/i);
                });
              }
          },
          dev: {
            site: 'dev.osc.hul.harvard.edu',
          }
        },


        //////////
        // Deploying
        //////////

        // rsync
        rsync: {
            options: {
                args: ['-avz'],
                exclude: ['.DS_Store']
            },
            stage: {
                options: {
                    src: './builds/prod/',
                    dest: '/home/osc/osc-dev/htdocs',
                    host: 'oscusr@eaton.hul.harvard.edu',
                    delete: false // Careful this option could cause data loss, read the docs!
                }
            }
        }


    });

        

    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-purifycss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bootlint');
    grunt.loadNpmTasks('grunt-link-checker');
    grunt.loadNpmTasks("grunt-rsync")

    // Register the grunt tasks
    grunt.registerTask('build', ['copy:bootstrapCustom','exec:jekyllBuild','concat','sass']);
    grunt.registerTask('rebuild', ['exec:jekyllClear','build']);

    grunt.registerTask('test', ['bootlint', 'linkChecker:dev']);

    grunt.registerTask('stage', ['newer:htmlmin','newer:copy:fonts','newer:copy:files','newer:copy:sitemap',
                       'newer:copy:hopeAwards', 'newer:copy:htaccess', 'newer:imagemin',
                       'purifycss','cssmin','newer:uglify', 'rsync:stage'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');

};
