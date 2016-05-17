$(window).scroll(function() {
    if($(this).scrollTop() > 350)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.navbar').removeClass('barra');
    } else {
        $('.navbar').addClass('barra');
    }
});


/*NAVBAR, NAVEGACION, TOOLTIP*/

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});






$(document).on('ready', function(){
    $(".menu a").smoothscrolling();

    $(window).scroll(function(){
        if ($(this).scrollTop()>100){
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    })
});






$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});






