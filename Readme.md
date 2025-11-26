




# grunt_siml





> Compile SIML templates.

Checkout [Grunt](http://gruntjs.com/), and [SIMLs introduction](https://github.com/padolsey/SIML/wiki/101---Introduction).





## Usage





This plugin requires Grunt `^1.0.0-rc.1`

```sh
npm install grunt_siml --save-dev
```

Load the task with `grunt.loadNpmTasks`:

```js
grunt.loadNpmTasks('grunt-siml');
```





## `siml` task





_Run `siml` task with the `grunt siml` command._

Task targets, files and options can be specified according to the Grunt’s [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### pretty

```js
  siml: {
      options: {
          pretty: false
      }
  }
```

Output indented HTML (default: `true`).


#### indent

```js
  siml: {
      options: {
          indent: '\t'
      }
  }
```

Use custom indentation (default: `"  "`). Works only with `pretty: true`

#### curly

```js
  siml: {
      options: {
          curly: true
      }
  }
```

When true, nests with curly braces, when false, nests with white space (default: `false`).

#### parse

```js
  siml: {
      options: {
          parse: 'html5'
      }
  }
```

Which SIML parser to use: `"html5"`, `"angular"`, or `"default"`.
