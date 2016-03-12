# NewDug2016 #
Presentation to 2016 [NewDug Code Camp](http://newcodecamp.com/) on March 12, 2016

##Setup##
1. npm install
2. bower install

## Slides ##
[PowerPoint slides](ppt/GulpAllTheThings.pptx) from presentation

##Demos##
**Demo 1**- Introduct the gulp.task API and run _gulp taskTheFirst_ demonstrates a simple task

_gulp taskTheSecond_ demonstrates injecting a task (first task) into another task (taskTheSecond)

**Demo 2**- Install your first gulp plugin. __npm install gulp-util --save_dev--_ 
and then run the previous tasks, this time using the plugin, _gulp utilTaskTheSecond_

**Demo 3**- Introduce the gulpConfig.js file and run a task to show a value, _gulp displayConfig_

**Demo 4**- Introduce the gulp.src and gulp.dest APIs. Copy files from
the src directory the dist directory. _gulp moveStatic_ moves static
HTML and JSON files

**Demo 5**- Introduce JSHint plugin and demo it catching an error by removing
a semi-colon on a JS file. _gulp jsValidate_

**Demo 6**- Introduce the Gulp SASS plugin to compile SASS files to CSS. _gulp sass_

**Demo 7**- Introduce new copy functions to account for new CSS, etc. _gulp moveStatic2_

**Demo 8**- Introduce Gulp Watch API to setup a file watcher for SASS, HTML and JS files. _gulp watchAll_

**Demo 9**- Introduce Connect and Open plugins to create a dev server. _gulp startDevServer_

**Demo 10**- Introduce concatanation. _gulp moveCss2_

**Demo 11**- Introduce Yargs and Gulp-if plugins. Run _gulp_ and _gulp --prod_ to demonstrate

## Plugins used ##
* [gulp-util](https://www.npmjs.com/package/gulp-util) - Gulp Utilities, for example logging
* [gulp-jshint](https://www.npmjs.com/package/gulp-jshint) - Gulp JsHint provides code anlaysis for Javascript 
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) - Gulp SASS plugin to compile SASS files to CSS
* [gulp-connect](https://www.npmjs.com/package/gulp-connect) - Gulp plugin to run a web server
* [gulp-open](https://www.npmjs.com/package/gulp-open) - Opens a URL on a web server
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) - Concatenates files together
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) - Uglifies Javascript files
* [yargs](https://www.npmjs.com/package/yargs) - Provides command line arguments
* [gulp-if](https://www.npmjs.com/package/gulp-if) - Provides if/then logic in Gulp files


