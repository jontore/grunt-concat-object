# grunt-concat-object

> Creates an object with all specified files as strings and path as key in a object with the specified name

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-concat-object --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-concat-object');
```

## The "concat_object" task

### Overview
In your project's Gruntfile, add a section named `concat_object` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  concat_object: {
    options: {
      name_space: 'concat_name' //concat object name
    },
    files: {
      target/tmp.js: ['/dir/file1', 'dir/file2']
    }
  },
})
```

### Options

#### options.name_space
Type: `String`
Default value: `'concat_object'`

The name of the concat object written to the destination file.

### Usage Examples

#### Default Options
In this example, the name space is concat_object (but can be changed with the name_space option). So if the `testing` file has the content ```Testing``` and the `123` file had the content ```1 2 3```, the generated result would be ```
concat_object = {
  'src/testing': 'Testing',
  'src/123': '1 2 3'     
};
```

```js
grunt.initConfig({
  concat_object: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
Open issue with feature requests, or bugs. Preferably with a fix.
Add unit tests for any new or changed functionality. 
Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Jon Tore Hafstad. Licensed under the MIT license.
