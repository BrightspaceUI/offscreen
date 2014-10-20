var del = require('del'),
	gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	vui = require('vui-helpers');

gulp.task( 'clean', function( cb ) {
	del( [ 'offscreen.css' ], cb );
} );

gulp.task( 'css', function () {
	return vui.makeCss(
		'offscreen.css.less',
		'offscreen.css',
		{ 'lintOpts' : '.csslintrc' }
	);
} );

gulp.task( 'jshint', function() {
	return gulp.src( ['gulpfile.js'] )
		.pipe( jshint() )
		.pipe( jshint.reporter('default') );
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css', 'jshint' );
} );
