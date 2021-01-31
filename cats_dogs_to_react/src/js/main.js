$('.carousel').carousel({
    interval: false
});

$('.sidebar_toggler').click(function(){
  $('.sidebar').addClass('sidebar_active');
});

$('.sb_close').click(function(){
  $('.sidebar').removeClass('sidebar_active');
})