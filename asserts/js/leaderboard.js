$(document).ready(function() {
    var events = [];
    var activities = [];
    var tbody = $('tbody');
    tbody_html = ``;

    function get_events(url) {
        if (url === undefined) {
            url = 'https://reps.mozilla.org/api/remo/v1/events/?format=json&initiative=MozActivate&page=1';
        }
        return $.ajax({
             type: 'GET',
             url: url,
             dataType: 'json',

             success: function(data) {
                 $(data.results).each(function(index, value) {
                     $.ajax({
                          type: 'GET',
                          url: value._url,
                          dataType: 'json',

                          success: function(data) {
                              events.push(data);
                          },
                    });
                 });
                 url = data.next;
                 if (url) {
                     get_events(url);
                 }
             }
         });
    }

    get_events();

    $( document ).ajaxStop(function() {
        total_events = _
            .chain(events)
            .groupBy(function(events){ return events.owner.display_name; })
            .value();

        $.each(total_events, function(index, value) {
            tbody_html += `
                <tr>
                  <td>
                    <a href="${value[0].owner._url}" target="_blank">${value[0].owner.first_name} ${value[0].owner.last_name}</a>
                  </td>
                  <td>${value.length}</td></tr>
            `;
        });
        tbody.html(tbody_html);

        $.bootstrapSortable({ applyLast: true });
        $('thead tr th:nth-child(2)').data('firstsort', 'asc');
        $('thead tr th:nth-child(2)').click();
        $('thead tr th:nth-child(2)').click();
        $('#loading').hide();
    });
});
