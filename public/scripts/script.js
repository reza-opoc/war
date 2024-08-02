let menu = document.querySelector('.menuOpen')
let mobileMenu = document.querySelector('.mobile-menu')
let chose = document.querySelector('.chose')
let isFlag = false

menu.addEventListener('click', () => {

    if (isFlag) {
        mobileMenu.style.height = '0'
        isFlag = false
    }else {
        mobileMenu.style.height = '100vh'
        isFlag = true
    }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed : 400,
    autoplay : true,
    slidesPerView : 2,
    effect : 'coverflow',
    loop: true,
  
  
    navigation: {
        prevEl: '.swiper-button-prev_custom',
        nextEl: '.swiper-button-next_custom',
      },
    
  });

  const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    speed : 400,
    autoplay : true,
    slidesPerView : 2,
    spaceBetween : 5 ,
    loop: true,
    centeredSlides : true,
    effect : 'coverflow'

  })