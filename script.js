searchForm = document.querySelector('.search');

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = ()=>{
    loginForm.classList.toggle('active');

}

document.querySelector('#close-login-btn').onclick = ()=>{
    loginForm.classList.remove('active');
    
}




window.onscroll= () => {
    searchForm.classList.remove('active');

    if(window.scroll > 80){
        document.querySelector('.header .head-2').classList.add('active');
    }
    else{
        document.querySelector('.header .head-2').classList.remove('active');
    }

}

window.onload= () => {

    if(window.scroll > 80){
        document.querySelector('.header .head-2').classList.add('active');
    }
    else{
        document.querySelector('.header .head-2').classList.remove('active');
    }

}

var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  let signup = document.querySelector('.sign-form-container');

  document.querySelector('#sign').onclick = ()=>{
      signup.classList.toggle('active');
  
  }
  
  document.querySelector('#close-sign-btn').onclick = ()=>{
      signup.classList.remove('active');
      
  }




  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  




