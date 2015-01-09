module.exports = function (grunt) {
    
    var cfg = {
        bower_concat: {
          all: {
            dest: 'build/_bower.js',
            cssDest: 'build/_bower.css',
    //        exclude: [
    //          'jquery',
    //          'modernizr'
    //        ],
    //        dependencies: {
    //          'underscore': 'jquery',
    //          'backbone': 'underscore',
    //          'jquery-mousewheel': 'jquery'
    //        },
            bowerOptions: {
              relative: false
            }
          }
        }
    }
    
    grunt.initConfig(cfg);
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.registerTask('default', 'Build JS & templates for development',
            ['bower_concat:all']);
}