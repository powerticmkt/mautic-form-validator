var gulp = require('gulp')
var concat = require('gulp-concat')
var strip = require('gulp-strip-comments');
var uglify = require('gulp-uglify');

gulp.task('js', function () {
  return gulp.src([
      'js/credits.js',
      'node_modules/jquery/dist/jquery.js',
      'node_modules/jquery-confirm/dist/jquery-confirm.min.js',
      'node_modules/mailcheck/src/mailcheck.min.js',
      'js/app.js'])
      .pipe(strip())
      .pipe(uglify())
     .pipe(concat({ path: 'powertic-mautic-form-validator.js', stat: { mode: 0666 }}))
    .pipe(gulp.dest('./dist/'))
})
