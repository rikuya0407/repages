document.addEventListener('DOMContentLoaded', function(){
  new HeroSlider();
});

class HeroSlider {
  constructor(){
    this.swiper = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        grabCursor:true,
        effect:'coverflow',
        centerSlides:true,
        slidesPerView:1,
        speed:2000,
        breakpoints:{
          1024:{
            slidesPerView:3,
          }
        },
        autoplay:{
          delay:3000,
          disableOnInteraction:false,
        },
      
    });

  }
}
  

