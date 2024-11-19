window.addEventListener('load', function(){

  const toggleModalBtn = document.querySelectorAll('.header-btn, .modal-overflow, .modal-close');
  const modal = document.querySelector('.modal');
  const modalOveflow = document.querySelector('.modal-overflow');

  if (toggleModalBtn){
    toggleModalBtn.forEach(btn=>{
      btn.addEventListener('click', function(){
        modal.classList.toggle('is-hidden');
      })
    })
  }

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