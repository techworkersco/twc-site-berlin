document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid', 'timeGrid'],
    height: 'parent',
    displayEventTime : false,
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    },
    defaultView: 'dayGridMonth',
    navLinks: true, // can click day/week names to navigate views
    eventLimit: true, // allow "more" link when too many events
    timeZone: 'Europe/Berlin',
    events:'/calendar-data'
  });

  calendar.render();
});
