/* eslint-disable no-undef */
const gulp = require('gulp');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const mqpacker = require('css-mqpacker');
const cssminify = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const del = require('del');
const uglify = require('gulp-uglify-es').default;

gulp.task('clean', () => del('build'));

gulp.task('js', () => gulp.src('js/**')
  .pipe(uglify())
  .pipe(gulp.dest('build/js')));

gulp.task('copy', () => gulp.src([
  'fonts/**/*.{woff,woff2}',
  'img/**',
  'leaflet/**',
  '*.html',
  'css/**',
], {
  base: '.',
})
  .pipe(gulp.dest('build')));

gulp.task('style', ()  => gulp.src('less/style.less')
  .pipe(plumber())
  .pipe(less())
  .pipe(postcss([
    autoprefixer({
      overrideBrowserslist: [
        'last 2 versions',
      ],
    }),
    mqpacker({
      sort: true,
    }),
  ]))
  .pipe(gulp.dest('build/css'))
  .pipe(cssminify())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('build/css'))
  .pipe(server.stream()));

exports.default = () => (
  gulp.src('build/img/*.{png,jpg}')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false },
        ],
      }),
    ]))
    .pipe(gulp.dest('build/img'))
);
gulp.task('html:copy', () => gulp.src('*.html')
  .pipe(gulp.dest('build')));

gulp.task('html:update', (done) => {
  server.reload();
  done();
});

gulp.task('serve', () => {
  server.init({ server: 'build/', notify: false, open: true, cors: true, ui: false });

  gulp.watch('less/**/*.less', gulp.task('style'));
  gulp.watch('js/**/*.js', gulp.task('js'));
  gulp.watch('*.html', gulp.series('html:copy', 'html:update'));
});

gulp.task('build', gulp.series('clean', 'copy', 'js', 'style'));
