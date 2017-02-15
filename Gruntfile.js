var grunt = require('grunt');
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: './piwik',
                dest: 'building/piwik'
            }
        },
        php: {
            dist: {
                options: {
                    port: process.env.PORT + 1 || 8001,
                    hostname: "0.0.0.0",
                    keepalive: true,
                    base: './piwik'
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('default', ['php']);
}