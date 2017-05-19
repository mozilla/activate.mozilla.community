$('[data-toggle="datepicker"]').datepicker();
    $('#date').datepicker({
    	todayHighlight: true,
    	dateFormat: 'dd/mm/yyyy' 
    });

    $('#input-form').one('submit',function(){
        var inputq1 = $('input[name="q1"]:checked').val();

        var rep = document.getElementById("input-q2");
        var inputq2 = rep.options[rep.selectedIndex].value;

        var dates = $('[data-toggle="datepicker"]').datepicker("getDate").valueOf();
        var date = moment(dates).format('MM/DD/YYYY');

        var day = moment(dates).format('DD');
        var month = moment(dates).format('MM');
        var year = moment(dates).format('YYYY')
        
        console.log(day, month, year);

        // var from = ss.split("-");
        // console.log(from);
        // var date = new Date(from[2], from[1] - 1, from[0]);
        // var day = date.getUTCDate();
        // var month = date.getUTCMonth() + 1;
        // var year = date.getUTCFullYear();

        //var inputq4 = encodeURIComponent($('#input-q4').val());
        var inputq4 = $('input[name="q4"]:checked').val();

        var inputq5 = encodeURIComponent($('#input-q5').val());
        var inputq6 = encodeURIComponent($('#input-q6').val());

        //var inputq7 = encodeURIComponent($('#input-q7').val());
        var inputq7 = $('input[name="q7"]:checked').val();

        //var q1ID = "entry.336406139.other_option_response";
        var q1ID = "entry.336406139";
        var q2ID = "entry.933763970";
        var q3IDm = "entry.1231619390_month"; 
        var q3IDd = "entry.1231619390_day";
        var q3IDy = "entry.1231619390_year";
        var q4ID = "entry.266467272";
        var q5ID = "entry.1605550131";
        var q6ID = "entry.469443349";
        //var q7ID = "entry.652696487.other_option_response";
        var q7ID = "entry.652696487";

        var baseURL = 'https://docs.google.com/a/mozilla.com/forms/d/e/1FAIpQLSe47ShikqND1aL8rLtSvud-JWovRdB1MKlteGX_sneySQnbtw/formResponse?';
        var submitRef = '&submit=Submit';
        var submitURL = (baseURL + 
            q1ID + "=" + inputq1 + "&" + 
            q2ID + "=" + inputq2 + "&" + 
            q3IDm + "=" + month + "&" + 
            q3IDd + "=" + day + "&" + 
            q3IDy + "=" + year + "&" + 
            q4ID + "=" + inputq4 + "&" + 
            q5ID + "=" + inputq5 + "&" + 
            q6ID + "=" + inputq6 + "&" + 
            q7ID + "=" + inputq7 + submitRef);
        console.log(submitURL);

        $(this)[0].action=submitURL;

        $('#input-feedback').text('Thank You!');
    });