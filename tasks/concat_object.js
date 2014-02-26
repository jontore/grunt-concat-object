/*
 * grunt-concat-object
 * 
 *
 * Copyright (c) 2014 Jon Tore Hafstad
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('concat_object', 'Creates an object with all specified files as strings and path as key in a object with the specified name', function () {
    var options = this.options({
      name_space: 'concat_object'
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else if (grunt.file.isDir(filepath)) {
          return false;
        } else {
          return true;
        }
      });

      var pathSrcMap = {};

      src.forEach(function (filepath) {
        pathSrcMap[filepath] = grunt.util.normalizelf(grunt.file.read(filepath));
      });

      grunt.file.write(file.dest, options.name_space + ' = ' + JSON.stringify(pathSrcMap) + '\n');

      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
