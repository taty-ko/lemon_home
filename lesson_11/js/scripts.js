jQuery (function() 
{
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
 
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
  })
  });

  var mySwiper = new Swiper('.rewiew .swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination-text',
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
});

$('.header').on('click', '.menu-button', function () {
    $('.header').toggleClass('menu-opened');
});