var grunt = require('grunt');
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {

                }
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