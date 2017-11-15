var gulp = require('gulp')
var concat = require('gulp-concat')
var strip = require('gulp-strip-comments')
var uglify = require('gulp-uglify')
var bom = require('gulp-bom')
var cleanCSS = require('gulp-clean-css')
var stripCssComments = require('gulp-strip-css-comments')

gulp.task('build-css', function () {
  return gulp.src(['node_modules/jquery-confirm/css/jquery-confirm.css'])
    .pipe(concat({
      path: 'powertic-mautic-form-validator.css'
    }))
    .pipe(cleanCSS())
    .pipe(stripCssComments(false))
    .pipe(gulp.dest('./build/'))
})

gulp.task('dist-css', function () {
  return gulp.src([
    './credits',
    'build/powertic-mautic-form-validator.css'
  ])
    .pipe(concat({
      path: 'powertic-mautic-form-validator.css'
    }))
    .pipe(bom())
    .pipe(gulp.dest('./dist/'))
})

gulp.task('build-js', function () {
  return gulp.src([
    'node_modules/jquery-confirm/dist/jquery-confirm.min.js',
    'node_modules/mailcheck/src/mailcheck.js',
    'node_modules/jquery-mask-plugin/dist/jquery.mask.js',
    'js/app.js'
  ])
    .pipe(concat({
      path: 'powertic-mautic-form-validator.js'
    }))
    .pipe(strip())
    .pipe(gulp.dest('./build/'))
})

gulp.task('dist-js', function () {
  return gulp.src([
    './credits',
    'build/powertic-mautic-form-validator.js'
  ])
    .pipe(concat({
      path: 'powertic-mautic-form-validator.js'
    }))
    .pipe(bom())
    .pipe(gulp.dest('./dist/'))
})
