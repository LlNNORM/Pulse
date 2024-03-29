const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  nav: false,
  controlsText: ['<img src="icons/arrow_left.png" alt="arrow"/>',
                  '<img src="icons/arrow_right.png" alt="arrow"/>']
});
  (function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function  toggleSlide(item) {
        $(item).each (function(i) {
          $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        })
      }
      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');
    });
    //Modal
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    })

    // $('form').submit (function(e) {
    //   e.preventDefault();
    //   $.ajax({
    //     type:'POST',
    //     url: 'mailer/smart.php',
    //     data: $(this).serialize()
    //   }).done(function() {
    //     $(this).find('input').val('');
    //   })
    // })
    $(window).scroll(function() {
      if ($(this).scrollTop()>1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    })

    new WOW().init();
    })(jQuery);