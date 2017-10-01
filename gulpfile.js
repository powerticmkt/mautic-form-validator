var gulp = require('gulp')
var concat = require('gulp-concat')
var strip = require('gulp-strip-comments')
var uglify = require('gulp-uglify')
var bom = require('gulp-bom')

gulp.task('js', function () {
  return gulp.src([
    'js/credits.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/jquery-confirm/dist/jquery-confirm.min.js',
    'node_modules/mailcheck/src/mailcheck.min.js',
    'node_modules/jquery-mask-plugin/dist/jquery.mask.js',
    'js/app.js'])
    .pipe(concat({ path: 'powertic-mautic-form-validator.js'}))
    .pipe(strip())
    .pipe(uglify())
    .pipe(bom())
    .pipe(gulp.dest('./dist/'))
})
