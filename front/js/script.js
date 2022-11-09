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