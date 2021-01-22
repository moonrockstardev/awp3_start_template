$('.goto').click(function () {
   var el = $(this).attr('href').replace('#', '')
   var offset = 0
   $('body,html').animate(
      { scrollTop: $('.' + el).offset().top + offset - $('header').height() },
      700,
      function () {},
   )

   if ($('.menu__body').hasClass('active')) {
      $('.menu__body,.icon-menu').removeClass('active')
      $('body').removeClass('lock')
   }
   return false
})
