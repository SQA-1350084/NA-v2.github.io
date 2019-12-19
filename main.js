$(function functionName() {
  $('.menu-toggle, .fa-times').on('click' , function () {
    $('.navbar').toggleClass('active');
    $('this').toggleClass('menu-open');
  });
  $('.overlay').on('click' , function () {
    $('.navbar').removeClass('active');
    $(this).removeClass('menu-open');
  });

});
