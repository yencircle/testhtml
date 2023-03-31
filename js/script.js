$(document).ready(function () {
    /* HAMBURGER */
    $('.hamburger-menu .hamburger').on('click', function () {
        $(".hamburger").toggleClass("active")
        $(".side-widget").toggleClass("active")
        $(".section-wrapper").toggleClass("no-transform")
    });
});

/* Image parallax */
$(document).ready(function () {
    function parallax(){ 
        var windowPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        $('.--parallax').each(function() { 
            var elementImage = $(this).find('img');
            var imageHeight = elementImage.height();
            var elementBottom = $(this).position().top + $(this).outerHeight(true);
            scrollPercent = 200 * (elementBottom - windowPosition) / (windowHeight + imageHeight);
            elementImage.css('object-position', '0%' + scrollPercent + '%');
        });
        var windowPosition_2 = $(window).scrollTop();
        var windowHeight_2 = $(window).height();
        $('.--parallax2').each(function() { 
            var elementImage_2 = $(this).find('img');
            var imageHeight_2 = elementImage_2.height();
            var elementBottom_2 = $(this).position().top + $(this).outerHeight(true);
            scrollPercent_2 = 500 * (elementBottom_2 - windowPosition_2) / (windowHeight_2 + imageHeight_2);
            elementImage_2.css('object-position', '50%' + -scrollPercent_2 + '%');
        });
    };
    
    $(document.body).on('touchmove', parallax);
    $(window).bind('scroll', parallax);
});
/* Image parallax */

/* Circle animation */
$(document).ready(function () {
    const text = document.querySelector('.text a');
    text.innerHTML = text.innerText.split("").map(
        (char, i) =>
        `<span style="transform:rotate(${i * 14.8}deg)">${char}</span>`
    ).join("")

    $(".circle .text a").click(function() {
        $('html, body').animate({
            scrollTop: $(".common-content, .img-with-content, .zigzag-team").offset().top
        }, 500);
    });
});
$(document).ready(function () {
    const ply = document.querySelector('.text p');
    ply.innerHTML = ply.innerText.split("").map(
        (char, i) =>
        `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
    ).join("")
});
/* Circle animation */

/*Window scroll off */
$(document).ready(function () {
    $('.hamburger-menu .hamburger').on('click', function () {
        if ($(this).hasClass('active')){
            $('body').addClass('overflow-hidden');
        } else {
            $('body').removeClass('overflow-hidden');
        }
    });
});
/*Window scroll off */

/* Swiper */
$(document).ready(function () {
    var supply_slider = new Swiper(".supply-slider", {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 50,
        mousewheel: true,
        keyboard: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          },
    });
    var saying_slider = new Swiper(".saying-slider", {
        loop: true,
        centeredSlides: true,
        spaceBetween: 50,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1.8,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 50,
            },
          },
    });
    var categories_slider = new Swiper(".categories-slider", {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 50,
        mousewheel: true,
        keyboard: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          },
    });
});
/* Swiper */

/* window load */
$(document).ready(function() {
  setTimeout(function() {
    $('#subscribeModal').addClass('show');
    $('.modal-backdrop').addClass('show');
    if ($('#subscribeModal').hasClass('show')){
      $('body').addClass('modal-open');
    } else {
      $('body').removeClass('overflow-hidden');
    }
  }, 50000);
  $('.btn-close').on('click', function () {
    $('#subscribeModal').removeClass('show');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').removeClass('show');
  });
});
setTimeout(function() {
  $('#ageModal').modal('show');
}, 1000);
/* window load */