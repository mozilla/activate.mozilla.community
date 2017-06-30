$(document).ready(function() {
  var response = {};
  var activities = [];

  function get_responses(url) {
    return $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',

      success: function(data) {
        console.log(data);
          response = data;
      },

      error: function(err) {
        console.log('err', err);
      }
     });
  }

  get_responses('http://localhost:5500/');

  $(document).ajaxStop(function() {
    $('.total-responses').text(response.totals.totalResponses);
    $('.total-events').text(response.totals.totalEvents);
    $('.overall-nps').text(response.totals.overallNPS);

    $.each(response.totals.typeOfEvents, function(type, total) {
      $('.total-event-types').append('<tr><td>' + type + '</td><td>' + total + '</td></tr>');
    });

    $.each(response.events, function(key, event) {
      $('.events-table').append('<tr><td>' + event.eventName + '</td><td>' + event.eventDate + '</td><td>' + event.organizerName + '</td><td>' + event.nps + '</td><td>' + event.numberOfResponses + '</td></tr>');
    });

    $('#loading').hide();
  });
});
