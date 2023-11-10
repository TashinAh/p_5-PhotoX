$(document).ready(function(){
  $(window).on('scroll', function(){
    var scroll = $(this).scrollTop();
    if(scroll > 60) {
      $('.navbar').addClass('nav-shadow');
    }else{
      $('.navbar').removeClass('nav-shadow');
    }
  })
  $('.fa-magnifying-glass').click(function(){
    $('#search-form').animate({top: '0'}, 700)
  })
  $('.fa-close').click(function(){
    $('#search-form').animate({top: '-120vh'}, 600)
  })
  $('.protfolio-menu ul li').on('click', function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
   })
  $('.protfolio-item').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
  $('.protfolio-menu ul li').attr('data-filter', function(){  
    $('.protfolio-item').isotope({
      filter:selector
    });
      return false;
  });
})
