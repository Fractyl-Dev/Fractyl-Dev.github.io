$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()/2);
  });
  $('.nav-toggle').click(function () {
  	$('.nav-menu').toggleClass('open');
  });
});