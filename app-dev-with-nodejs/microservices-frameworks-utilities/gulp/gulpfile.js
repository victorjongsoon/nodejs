// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// link task
gulp.task('lint', function () {
    return gulp.src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// compile our sass
gulp.task('sass', function () {
    return gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
});

// concatenate & minify JS
gulp.task('scripts', function () {
    return gulp.src('./src/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

// watch files for changes
gulp.task('watch', function () {
    gulp.watch('./src/*.js', ['lint', 'scripts']);
    gulp.watch('./src/*.scss', ['sass']);
});

// default task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);