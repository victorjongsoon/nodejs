var gulp = require('gulp');
var sass = require('gulp-sass');

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
