// Gruntfile

module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  /**
   * Define Configuration Variables.
   * Note: cwd is './setup' so the `setup` variable defined below is only to be used
   *       when cwd has been changed to `app` and grunt needs to reference './setup'
   */
  var gruntConfig = grunt.file.readJSON('Gruntconfig.json');

  // Grunt Config
  grunt.initConfig({
    cvars: gruntConfig.configVars,
    bower: {
      setup: {
        options: { install: true, copy: false }
      }
    },
    copy: {
      build: {
        files: [
          {
            cwd: '<%= cvars.app %>/', expand: true,
            dest: '<%= cvars.build %>/',
            src: gruntConfig.buildFiles
          }
        ]
      },
      deploy: {
        files: [
          {
            cwd: '<%= cvars.build %>/', expand: true,
            dest: '<%= cvars.dist %>/',
            src: ['<%= cvars.appcss %>/**', 'images/**', 'bower_components/**']
          }
        ]
      }
    },
    clean: {
      options: { force: true },
      build: ['<%= cvars.build %>'],
      'post-requirejs': ['<%= cvars.build %>/<%= cvars.appjs %>/ext'],
      deploy: [
        '<%= cvars.dist %>/*'
      ]
    },
    cssmin: {
      build: {
        files: {
          '<%= cvars.build %>/<%= cvars.appcss %>/main.css': [
            '<%= cvars.app %>/<%= cvars.appcss %>/ext/bootstrap.css',
            '<%= cvars.app %>/<%= cvars.appcss %>/main.css'
          ]
        }
      }
    },
    preprocess: {
      build: {
        src : '<%= cvars.app %>/index.html',
        dest : '<%= cvars.build %>/index.build.html'
      }
    },
    htmlmin: {
      // See https://github.com/yeoman/grunt-usemin/issues/44 for using 2 passes
      build: {
        options: {
          removeComments: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          // Cannot remove empty elements with angular directives
          removeEmptyElements: false
        },
        files: [
          { '<%= cvars.build %>/index.html': '<%= cvars.build %>/index.build.html' },
          {
            cwd: '<%= cvars.app %>/views/', expand: true, flatten: false,
            dest: '<%= cvars.build %>/views/',
            src: ['*.html']
          }
        ]
      },
      deploy: {
        options: {
          collapseWhitespace: true
        },
        files: [
          { '<%= cvars.dist %>/index.html': '<%= cvars.build %>/index.html' },
          {
            cwd: '<%= cvars.build %>/<%= cvars.appjs %>/main/templates/', expand: true,
            dest: '<%= cvars.dist %>/<%= cvars.appjs %>/main/templates/',
            src: ['*.html']
          },
          {
            cwd: '<%= cvars.build %>/views/', expand: true,
            dest: '<%= cvars.dist %>/views/',
            src: ['**/*.html']
          }
        ]
      }
    },
    requirejs: {
      build: {
        options: {
          baseUrl: '<%= cvars.app %>/<%= cvars.appjs %>',
          mainConfigFile: '<%= cvars.app %>/<%= cvars.appjs %>/main.js',
          removeCombined: true,
          findNestedDependencies: true,
          optimize: 'none',
          dir: '<%= cvars.build %>/<%= cvars.appjs %>/',
          modules: [
            { name: 'app' },
            {
              name: 'controllers/main/home_ctrl',
              exclude: ['common']
            },
            {
              name: 'controllers/rooms/rooms_ctrl',
              exclude: ['common']
            },
            {
              name: 'controllers/users/users_ctrl',
              exclude: ['common']
            }
          ]
        }
      }
    },
    uglify: {
      deploy: {
        options: {
          preserveComments: 'some',
          sourceMapIncludeSources: true,
          sourceMap: true
        },
        files: [
          {
            cwd: '<%= cvars.build %>/<%= cvars.appjs %>/', expand: true,
            dest: '<%= cvars.dist %>/<%= cvars.appjs %>/',
            src: '**/*.js'
          }
        ]
      }
    },
    jshint: {
      build: {
        options: {
          jshintrc: '.jshintrc'
        },
        files: {
          src: [
            '<%= cvars.app %>/<%= cvars.appjs %>/controllers/*.js',
            '<%= cvars.app %>/<%= cvars.appjs %>/controllers/main/*.js',
            '<%= cvars.app %>/<%= cvars.appjs %>/controllers/rooms/*.js',
            '<%= cvars.app %>/<%= cvars.appjs %>/controllers/users/*.js'
          ]
        }
      }
    },

    watch: {
      www: {
        files: ['<%= cvars.app %>/**/*'],
        tasks: [],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },
    connect: {
      server: {
        livereload: true,
        options: {
          port: gruntConfig.configVars.port,
          base: '<%= cvars.app %>'
        }
      }
    }
  });


  /**
   * build task
   * Use r.js to build the project
   */
  grunt.registerTask('build', [
    'jshint:build',
    'preprocess:build',
    'htmlmin:build',
    'cssmin:build',
    'requirejs:build',
    'clean:post-requirejs',
    'copy:build'
  ]);

  /**
   * Rebuild css files on file change
   */
  grunt.registerTask('css', [
  	'cssmin:build',
	'copy:build'
  ]);

  /**
   * Rebuild html files
   */
  grunt.registerTask('html', [
	'preprocess:build',
	'htmlmin:build',
	'copy:build'
  ]);

  /**
   * deploy task
   * Deploy to dist_www directory
   */
  grunt.registerTask('deploy', [
    'build',
    'htmlmin:deploy',
    'copy:deploy',
    'uglify:deploy'
  ]);
};
