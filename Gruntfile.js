'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        'copy-node-modules': {
            options: {
                srcDir: './',
                dstDir: './dist'
            }
        },
        clean: {
            test: ['dist/']
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'copy-node-modules']);
}