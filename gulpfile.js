const gulp = require('gulp')
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

gulp.task('css', function () {
  return gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions, > 1%'))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream())
})

gulp.task('browser-sync', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./scss/**/*.scss', gulp.series('css'), reload)
  gulp.watch('./*.html').on('change', reload)
})

gulp.task('default', gulp.series(['browser-sync', 'css']))