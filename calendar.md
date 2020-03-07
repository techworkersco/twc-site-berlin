---
layout: default_without_footer
title: Event Calendar
permalink: /calendar/
---

<link href='https://use.fontawesome.com/releases/v5.0.6/css/all.css' rel='stylesheet'>
<link href='/assets/js/fullcalendar-4.4.0/packages/core/main.css' rel='stylesheet' />
<link href='/assets/js/fullcalendar-4.4.0/packages/bootstrap/main.css' rel='stylesheet' />
<link href='/assets/js/fullcalendar-4.4.0/packages/timegrid/main.css' rel='stylesheet' />
<link href='/assets/js/fullcalendar-4.4.0/packages/daygrid/main.css' rel='stylesheet' />
<script src='/assets/js/fullcalendar-4.4.0/packages/core/main.js'></script>
<script src='/assets/js/fullcalendar-4.4.0/packages/interaction/main.js'></script>
<script src='/assets/js/fullcalendar-4.4.0/packages/bootstrap/main.js'></script>
<script src='/assets/js/fullcalendar-4.4.0/packages/daygrid/main.js'></script>
<script src='/assets/js/fullcalendar-4.4.0/packages/timegrid/main.js'></script>
<script>

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

</script>
<style>
  .fc-title {
    color: white;
  }
</style>
<body>
  <div id='calendar-container'>
    <div id='calendar'></div>
  </div>
</body>

<div id="calendar"></div>
