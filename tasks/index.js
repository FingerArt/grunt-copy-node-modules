'use strict';
const copyNodeModules = require('copy-node-modules')

module.exports = function (grunt) {
    grunt.registerTask('copy-node-modules', 'Copy node modules', function () {
        const done = this.async();
        let options = this.options({
            srcDir: grunt.option('srcDir') || './',
            dstDir: grunt.option('dstDir'),
            devDependencies: grunt.option('devDependencies') === true
        });

        if (!options.dstDir) {
            grunt.warn('Required property "options.dstDir" missing.');
        }

        copyNodeModules(options.srcDir, options.dstDir, {devDependencies: options.devDependencies}, function (err, results) {
            if (err) {
                grunt.warn(err);
            }
            grunt.log.writeln()
            for (var i in results) {
                grunt.log.writeln('package name: ' + results[i].name + '@' + results[i].version);
            }
            done();
        });
    });
};
