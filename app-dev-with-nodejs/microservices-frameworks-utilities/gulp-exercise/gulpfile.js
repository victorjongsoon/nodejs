var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', ['hello']);

gulp.task('hello', function() {
  console.log('Hello Gulp!');
});

gulp.task('hai', function() {
  console.log('Hai Gulp!');
});

gulp.task('browsersync', function() {    
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });
});

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Add a watch task to monitor changes in your SCSS files
gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

