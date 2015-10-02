'use strict';

var gulp = require('gulp');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'production') {
	// Build, deploy and run server on port 80. Dont watch updates.
	gulp.task('default',    ['serve']);
	gulp.task('serve',      ['grunt'],    require('./tasks/serve').nodemon);
	gulp.task('grunt',	['test'],     require('./tasks/grunt'));
} else if (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'development') {
	// Setup watchers and run node server
	gulp.task('default', 	['serve']);
	gulp.task('serve',	['watch'], 	require('./tasks/serve')); 
	gulp.task('watch',	['grunt'],	require('./tasks/grunt'));
	if (process.env.NODE_ENV === 'testing') {
		// Run tests first if environment is testing
		gulp.task('grunt',	['test'],      	require('./tasks/grunt'));
	} else {
		// Show welcome message and run grunt
		gulp.task('grunt',	['welcome'],	require('./tasks/grunt'));
	}
}

gulp.task('build',                    require('./tasks/build'));
// Bumps version and creates a commit to repository about it
gulp.task('bump',       ['version'],  require('./tasks/chore').bump);
// Bumps version by 0.0.1
gulp.task('version',                  require('./tasks/chore').version);
// Check code quality
gulp.task('control',                  require('./tasks/control'));
// Run tests
gulp.task('test',                     require('./tasks/test').test);
// Show welcome message
gulp.task('welcome',		      require('./tasks/chore').welcome);
