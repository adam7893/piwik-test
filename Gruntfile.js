var grunt = require('grunt');
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        uglify: {
            options: {
                mangle:false
            }
        },
        php: {
            dist: {
                options: {
                    port: 5000
                }
            },
        },
        watch: {
            files: ['**/*.js'],
            tasks: ['dist']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['php']);
    grunt.registerTask('test', ['php', 'mocha']);
}