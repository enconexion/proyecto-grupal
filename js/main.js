$(window).scroll(function() {
    if($(this).scrollTop() < 350)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.navbar').addClass('barra');
    } else {
        $('.navbar').removeClass('barra');
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




// Boton para que envie a TOP, plugin escuelaweb

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});




// OWL //

    $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    items:2,
    responsive:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed:700,
    responsiveClass:true,
    responsive: {
    // breakpoint from 480 up
    480 : {
        items : 1,
        
    },
    // breakpoint from 768px up
    768 : {
        items : 2,
    },
    // breakpoint from 992px up
    992 : {
        items : 3
    }
}
   
})
    });


// OWL clientes //


    $(document).ready(function() {
    $('.clients').owlCarousel({
    loop:true,
    margin:40,
    items:2,
    responsive:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed:700,
    responsiveClass:true,
    responsive: {
    // breakpoint from 480 up
    480 : {
        items : 2,
        
    },
    // breakpoint from 768px up
    768 : {
        items : 3,
    },
    // breakpoint from 992px up
    992 : {
        items : 5
    }
}
   
})
    });
