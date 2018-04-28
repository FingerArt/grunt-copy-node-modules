# grunt-copy-node-modules

[![npm](https://img.shields.io/npm/v/grunt-copy-node-modules.svg)](https://www.npmjs.com/package/grunt-copy-node-modules)

Fast deploy Node.js modules to distination folder by grunt.
Copy all modules listed in 'dependencies' or 'devDependencies' field of package.json to destination folder.

The procedure:

1. Read package.json from source directoy, and read 'dependencies' or 'devDependencies' field.
2. Search existed modules in source directory, and search all dependencies.
3. Copy all modules to destination directory.

The modern applications use lots of modules, each module depends on more modules, results hundreds of modules need to be installed when typing `npm install`. When you want to pack/deploy your application to a folder which contains all needed modules, this module will help you to save time from slow `npm install`

It will save you a bunch of time to deploy stand-alone application from existed development directory, no need to fetch all modules from remote repository.

## Install

```
$ npm install --save-dev grunt-copy-node-modules
```

## Usage

```js
grunt.initConfig({
    'copy-node-modules': {
        options: {
            srcDir: './', // projectRoot, source directory contains package.json file.
            dstDir: './dist'
        }
    }
});

grunt.loadNpmTasks(grunt-copy-node-modules);

grunt.registerTask('default', ['copy-node-modules']);
```

## Options

- `srcDir`: source directory contains package.json file.
- `dstDir`: *required*, destination directory to copy modules, the modules will copy to `dstDir/node_modules` directory.
- `devDependencies`: default is *false*, also copy modules listed in `devDependencies` field.

## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
