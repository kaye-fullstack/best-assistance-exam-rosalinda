AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    var _swiperReading = new Swiper('.swiper-reading', {
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slidesPerView: 'auto',
    });

     const _swiperBanner = new Swiper('.swiper-banner', {
      autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
       pagination: {
         el: '.swiper-pagination-banner',
        },
      });
    };
  
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

    // private stuff
    var _footerUp = $('.back-to-top');
    _footerUp.on('click', function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 800);
      });
    
    
   
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
  


