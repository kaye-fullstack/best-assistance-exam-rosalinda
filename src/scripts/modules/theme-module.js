AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiper_banner = new Swiper('.swiper-banner', {
     autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
      pagination: {
        el: '.swiper-pagination-banner',
      },
    });
  };

  
    var swiper_reading = new Swiper('.swiper-reading', {
      slidesPerView: 0,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination-reading',
        clickable: true,
      },
      breakpoints:{
        575:{
          slidesPerView: 0,
          spaceBetween: 0,
        },

      767:{
        slidesPerView: 0,
        spaceBetween: 0,
      },
      991:{
        slidesPerView: 0,
        spaceBetween: 0,
      },
      1199:{
        slidesPerView: 0,
        spaceBetween: 0,
      }
    },
    });

    function lockScroll() {
      if ($('body').hasClass('lock-scroll')) {
          $('body').removeClass('lock-scroll');
      }
      else {
          $('body').addClass('lock-scroll');
      }
    }  
    
    $(document).ready(function() {
      $('.icon-bar').click(function() {
         lockScroll();
      }); 
    });

    function initHeader() {
      var Header = document.querySelector("header");
    
      var HeaderContainer = document.querySelector("header");
    
      document.addEventListener('scroll', function () {
            if (window.scrollY > 114) {
                Header.classList.add('sticky');
                HeaderContainer.classList.add('sticky');
            } else {
                Header.classList.remove('sticky');
                HeaderContainer.classList.remove('sticky');
            }
      });
    }
    
    window.onload = initHeader;

 
  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
  };

  return {
    init: init,
  };
})();


 