const { src, task, dest } = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const uglifycss = require('gulp-uglifycss');

async function calendarJS(){
 src(
   ['assets/fullcalendar-4.4.0/packages/core/main.js',
    'assets/fullcalendar-4.4.0/packages/interaction/main.js',
    'assets/fullcalendar-4.4.0/packages/bootstrap/main.js',
    'assets/fullcalendar-4.4.0/packages/daygrid/main.js',
    'assets/fullcalendar-4.4.0/packages/timegrid/main.js',
    'assets/fullcalendar-4.4.0/custom.js']
  )
  .pipe(concat('calendar.js'))
  .pipe(dest('\_includes/generated/'))
  .pipe(rename({ extname: '.min.js' }))
  .pipe(uglify())
  .pipe(dest('\_includes/generated/'));

  calendarCSS();
}

async function calendarCSS(){
 src(['assets/fullcalendar-4.4.0/packages/core/main.css',
      'assets/fullcalendar-4.4.0/packages/bootstrap/main.css',
      'assets/fullcalendar-4.4.0/packages/timegrid/main.css',
      'assets/fullcalendar-4.4.0/packages/daygrid/main.css',
      'assets/fullcalendar-4.4.0/custom.css'])
  .pipe(uglifycss())
  .pipe(concat('calendar.css'))
  .pipe(dest('\_includes/generated/'));
}


module.exports.default = calendarJS;
