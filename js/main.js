
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

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})




$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
    }
});


