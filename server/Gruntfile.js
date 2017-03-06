module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      express: {
        files: ['app/*.js', 'app/*/*.js', 'app/*/*/*.js'],
        tasks: ['jshint:server', 'jscs:server', 'express:dev'],
        options: {
          spawn: false
        }
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        jshintrc: true
      },
      client: {
        src: ['resources/scripts/*.js']
      },
      server: {
        src: ['app/*.js', 'app/*/*.js', 'app/*/*/*.js']
      },
      mocha: {
        src: ['test/model/*.js', 'test/controller/*.js', 'test/preparers/*.js']
      }
    },
    jscs: {
      client: {
        src: ['resources/scripts/*.js']
      },
      server: {
        src: ['app/*.js', 'app/*/*.js', 'app/*/*/*.js']
      },
      mocha: {
        src: ['test/model/*.js', 'test/controller/*.js', 'test/preparers/*.js']
      }
    },
    open: {
      express: {
        path: 'http://localhost:3000'
      }
    },
    express: {
      dev: {
        options: {
          script: 'app/server.js'
        }
      }
    }
  });

  grunt.registerTask('default', 'serve');
  grunt.registerTask('serve', ['express:dev', 'watch']);
};
