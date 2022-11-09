 $('.gumb').click(function(){
     $(this).toggleClass('open')
      $('.header .right').toggleClass('active')
});

$('.search_box').hover(function(){
     $('.nav_menu').hide()
},function(){
     $('.nav_menu').show()
});


$('.nav_menu .nav_page').click(function(){
     $('.nav_menu .nav_page').removeClass('active')
     $(this).toggleClass('active')
     return false
})

$(document).ready(function(){
  var $owl = $('.flex_prsnl_card');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({ 
    center: false,
    loop: false,
    autoplay:false,
    smartSpeed: 1500,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    nav: true,
    dots: false,
    dotsEach: false,
    pagination : true,
    responsiveClass:true,
   // navText: ['<img src="img/Left.svg">', '<img src="img/Right.svg">'],
    responsive:{
       400:{
            items:1.5,
            margin:20
        }, 
        500:{
            items:1.5,
            margin:20
        }, 
        600:{
            items:3,
            margin:20
        },
         768:{
            items:3.5,
            margin:20
        }, 
        992:{
            items:4,
            margin:20
        }, 
        1024:{
            items:4,
            margin:20
        }, 
        1200:{
            items:4.7,
            margin:20
        } 
    }
});
});

$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});

$(function() {
    $(".send_message_form").validate({
        rules: {
            "first_name": {
                required: true,
                minlength: 3,
            },
            "last_name": {
                required: true,
                minlength: 3,
            },
            "email":{
                required: true,
                emailRegex: true,
            },

        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid"
            },
            "first_name": {
                required: "Required true",
                minlength: "Enter your full name",
            },
            "last_name": {
                required: "Required true",
                minlength: "Enter your full last name",
            },
            
        },
    });
});