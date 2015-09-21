var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function(){
  return gulp.src('lib/*.js')
  .pipe(uglify({
      mangle: false
    }))
  .pipe(gulp.dest('dist'));
});
