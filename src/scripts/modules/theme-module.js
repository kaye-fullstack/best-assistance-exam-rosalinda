AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff
    const _swiper_banner = new Swiper('.swiper-banner', {
     autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
      pagination: {
        el: '.swiper-pagination-banner',
      },
    });

    var _swiper_reading = new Swiper('.swiper-reading', {
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slidesPerView: 'auto',
    });

    var _swiperAbout = new Swiper('.swiper-mini', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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

    $(window).scroll(function() {
      if ($(this).scrollTop() > 50){  
        $('header').addClass("sticky");
      }
      else {
        $('header').removeClass("sticky");
      }

      console.log('scroll')
    });
  };
  

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _footerUp();
  };

  return {
    init: init,
  };
})();

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
  }


