$(document).ready(function() {
    $('#markdown-toc > li a').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    });

    $('.retired-activities-hide-link, .retired-activities-show-link').click(function(event){
        event.preventDefault();
        $('#retired-activities-content').toggleClass('hidden');
        $('.retired-activities-hide-link').toggleClass('hidden');
        $('.retired-activities-show-link').toggleClass('hidden');
    });

    // #back-top
    function show_back() {
        if ($(window).scrollTop() > 200) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    }
    $(window).scroll(function () {
        show_back();
    });
    show_back();

    // scroll body to 0px on click
    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('.frontpage-slider').bxSlider({
      auto: true,
      controls: true,
      pager: false,
      pause: 6000,
      speed: 800
    });
});
