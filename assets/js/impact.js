$(document).ready(function() {
  var response = {};
  var activities = [];

  var today = new Date();
  $('[data-toggle="datepicker"]').datepicker({
      todayHighlight: true,
      endDate: today,
      dateFormat: 'dd/mm/yyyy'
  });

  function get_responses(url) {
    return $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',

      success: function(response) {
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
      },

      error: function(err) {
        console.log('err', err);
      }
     });
  }

  get_responses(window.ACTIVATE_API_BASE_URL + '/');

  function get_repsnames(url) {
    return $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',

      success: function(response) {
        $.each(response, function(key, name) {
          $('#search-name').append('<option>' + name + '</option>');
        });
      },

      error: function(err) {
        console.log('err', err);
      }
     });
  }

  get_repsnames(window.ACTIVATE_API_BASE_URL + '/reps');

  $('#impact-event-search').submit(function (event) {
    event.preventDefault();

    var params = '?';
    var name = $('#search-name :selected').text();
    var date = $('#date').val();

    if (name) {
      params += 'name=' + name;
    }

    if (name && date) {
      params += '&';
    }

    if (date) {
      params += 'eventDate=' + date;
    }

    $.ajax({
      type: 'GET',
      url: window.ACTIVATE_API_BASE_URL + '/search' + params,
      dataType: 'json',

      success: function(response) {
        $('.events-table').empty();
        response.map(function(event) {
          $('.events-table').append('<tr><td>' + event.eventName + '</td><td>' + event.eventDate + '</td><td>' + event.organizerName + '</td><td>' + event.nps + '</td><td>' + event.numberOfResponses + '</td></tr>');
        });
      },

      error: function(err) {
        console.log('err', err);
      }
     });

    return false;
  });
});
