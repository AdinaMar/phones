var swiper = new Swiper('.slider', {
    loop:true,
  centeredSlides: true,
 
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
  
   var swiper = new Swiper('.productsslider', {
     
     spaceBetween: 10,
     loop:true,
   centeredSlides: true,
  
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
      breakpoints: {
        0: {
          slidesPerView: 1,
         
        },
        450: {
         slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
          
        },
        1024: {
          slidesPerView: 4,
          
        },
    },
      
    }); 
   
 