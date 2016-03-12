var gulp = require('gulp');

//02
var gutil = require('gulp-util');  // Gulp-Util 

//03
var config = require('./gulpConfig')();  // requires then run


//05
var jshint = require('gulp-jshint');

//06
var sass = require('gulp-sass');

//09
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser

//10
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//11 Args and iffs
var argv       = require('yargs').argv; // Allows command line arguments (aka dev or prod)
var gulpif     = require('gulp-if'); // Allows conditional

//01 - Demo start task
gulp.task('taskTheFirst', function() {
    console.log('Hello from taskTheFirst');
});

//01a - Demo task the second
gulp.task('taskTheSecond', ['taskTheFirst'], function() {
    console.log('Hello from taskTheSecond');
});

//02 - Demo start task gutil
gulp.task('utilTaskTheFirst', function() {
    gutil.log('Hello from utilTaskTheFirst');
});

//02a - Demo task the second
gulp.task('utilTaskTheSecond', ['utilTaskTheFirst'], function() {
    gutil.log('Hello from utilTaskTheSecond');
});

//03 - introduce gulpConfig
gulp.task('displayConfig', function() {
    gutil.log(config.paths.jsValidate);
});

//04 Move files
gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.distDirectory));
});

gulp.task('json', function() {
    gulp.src(config.paths.json)
        .pipe(gulp.dest(config.paths.distDirectory + '/scripts'));
});

gulp.task('moveStatic', ['html', 'json'], function() {
    gutil.log('Moving files');
}
);

// 05 - jsHint
gulp.task('jsValidate', function() {
    // Read in files from script directory, pipe to JSHINT
    gutil.log('Javascript validation');

    gulp.src(config.paths.jsValidate)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));

});

gulp.task('js', ['jsValidate', 'moveJs'], function() {
    // Get iles rom the src directory

    gutil.log('Javascript tasks');

});
// 06 - Compile SASS
gulp.task('sass', function() {
    // Compile SASS, flag error, make css
    gutil.log('Compile SASS ' + config.paths.sass   );
    gulp.src(config.paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.paths.srcDirectory + '/css'))
});

// 07 - Move Files to dist directory
gulp.task('moveJs', function() {
    gutil.log(config.paths.js);
    gulp.src(config.paths.js)
        .pipe(gulp.dest(config.paths.distDirectory + '/scripts'));
});

gulp.task('moveCss', function() {
    gutil.log('CSS files/Dirs ' + config.paths.css);
    gutil.log('GoTo files/Dirs ' + config.paths.distDirectory + 'css');
    gulp.src(config.paths.css)
        .pipe(gulp.dest(config.paths.distDirectory + 'css'));
});
gulp.task('moveImages', function() {
    gutil.log('Image files/Dirs ' + config.paths.images);
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.distDirectory + 'images'));
});

gulp.task('moveStatic2', ['html', 'json','moveJs','moveImages','moveCss'], function() {
    gutil.log('Moving files');
}
);


//08 - Watch files
gulp.task('sassWatch', function()  {
    // comile SAS and move
    gutil.log('Firing up watch for '+ config.paths.sass);
    gulp.watch([config.paths.sass], ['sass','moveCss']);
  }
);

gulp.task('htmlWatch', function()  {
    // comile HTML and move
    gutil.log('Firing up watch for '+ config.paths.html);
    gulp.watch([config.paths.html], ['html']);
  }
);


gulp.task('jsWatch', function()  {
    // comile HTML and move
    gutil.log('Firing up watch for '+ config.paths.js);
    gulp.watch([config.paths.js], ['js']);
  }
);

gulp.task('watchAll',['sassWatch','htmlWatch','jsWatch'], function() {
    gutil.log('watching all the things');
    gulp.watch([config.paths.js], ['js']);
});


//09 - Start server
//Start a local development server
gulp.task('connect', function () {
    gutil.log('starting up ' + config.devBaseUrl + ':' + config.port);
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('startDevServer', ['connect'], function() {
	gulp.src('dist')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/index.html'}));
});

//10 concat together
gulp.task('moveCss2', function() {
    gutil.log('CSS files/Dirs ' + config.paths.css);
    gutil.log('GoTo files/Dirs ' + config.paths.distDirectory + 'css');
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.distDirectory + 'css'));
});

// 07 - Move Files to dist directory
gulp.task('moveJs2', function() {
    gutil.log(config.paths.js);
    gulp.src(config.paths.js)
        .pipe(uglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(config.paths.distDirectory + '/scripts'));
});

//11

var isProd = argv.prod ? true: false;

  if (isProd) {
    gutil.log('Production Deploy')
  }
  else {
    gutil.log('Dev Deploy')
  }


gulp.task('moveStatic3', ['html', 'json','moveJs2','moveImages','moveCss2'], function() {
    gutil.log('Moving files');
}
);

gulp.task('default', ['sass','jsValidate','moveStatic3','watchAll','startDevServer']);
