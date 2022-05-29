
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


      //Burger Menu

      const navSlide = ()=> 
      {
          const burger = document.querySelector('.burger');
          const nav = document.querySelector('.nav-links');
          const navLinks = document.querySelectorAll('.nav-links li');

          //Toggle nav
          burger.addEventListener('click',()=>
          {
            nav.classList.toggle('nav-active');   

            //Animate links

            navLinks.forEach((link,index) => {
                if(link.style.animation)
                {
                    link.style.animation = ''
                }
                else
                {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;

                }

            });
            //Burger animation
            
            burger.classList.toggle('toggle');
          });

      }

      navSlide();