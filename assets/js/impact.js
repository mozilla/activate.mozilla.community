$(document).ready(function() {
    var response = {};
    var activities = [];
    console.log('here??');

    function get_responses(url) {
      console.log('getting url...');
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
      console.log(response);
        $('.total-responses').text(response.totals.totalResponses);
        $('.total-events').text(response.totals.totalEvents);
        $('.overall-nps').text(response.totals.overallNPS);

        $.each(response.totals.typeOfEvents, function(type, total) {
          $('.total-event-types').append('<tr><td>' + type + '</td><td>' + total + '</tr>');
        });

        $('#loading').hide();
    });
});
