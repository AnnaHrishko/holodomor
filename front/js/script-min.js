$(".gumb").click(function(){$(this).toggleClass("open"),$(".header .right").toggleClass("active")}),$(".search_box").hover(function(){$(".nav_menu").hide()},function(){$(".nav_menu").show()}),$(".nav_menu .nav_page").click(function(){return $(".nav_menu .nav_page").removeClass("active"),$(this).toggleClass("active"),!1}),$(document).ready(function(){var e=$(".flex_prsnl_card");e.children().each(function(e){$(this).attr("data-position",e)}),e.owlCarousel({center:!1,loop:!1,autoplay:!1,smartSpeed:1500,autoplayTimeout:3e3,autoplayHoverPause:!1,nav:!0,dots:!1,dotsEach:!1,pagination:!0,responsiveClass:!0,responsive:{400:{items:1.5,margin:20},500:{items:1.5,margin:20},600:{items:3,margin:20},768:{items:3.5,margin:20},992:{items:4,margin:20},1024:{items:4,margin:20},1200:{items:4.7,margin:20}}})}),$(function(){$.validator.addMethod("emailRegex",function(e,a){return this.optional(a)||/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(e)},"")}),$(function(){$(".send_message_form").validate({rules:{first_name:{required:!0,minlength:3},last_name:{required:!0,minlength:3},email:{required:!0,emailRegex:!0}},messages:{email:{required:"You must enter a email name",emailRegex:"Login format not valid"},first_name:{required:"Required true",minlength:"Enter your full name"},last_name:{required:"Required true",minlength:"Enter your full last name"}}})});