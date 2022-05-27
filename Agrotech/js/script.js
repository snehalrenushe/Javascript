
        const swiper = new Swiper('.swiper', {
          autoplay:{
              delay:1000,
              disableonInteraction: false,
          },loop: true,

      // If we need pagination
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },

      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },});

      function navSlide(){
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        //Toggle nav
        nav.classList.toggle('nav-active');
    
        //Animate links
        navLinks.forEach((link,index) => {
            link.style.animation = `navLinkFade 0.5s ease forwords ${index / 7 + 2}s`
        });
    } 
    
    function contact(){
        alert("Thank you for contacting! We will get back to you shortly.");
    }