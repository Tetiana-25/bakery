window.addEventListener('load', function(){
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
      
        pagination: {
          el: '.formats-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.arrow-next',
          prevEl: '.arrow-prev',
        },
      
    });
});