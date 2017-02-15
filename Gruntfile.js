var grunt = require('grunt');
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        uglify: {
            options: {
                mangle:false
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
                    keepalive: true,
                    open: true
                }
            },
        },
        watch: {
            files: ['**/*.js'],
            tasks: ['default', 'dist']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['php']);
    grunt.registerTask('test', ['php', 'mocha']);
}