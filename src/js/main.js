
// DOM elements
const preloader = $('.preloader');
const header = $('#header');
// Prelosder
$(window).on('load', () => {
  preloader.fadeOut('slow', () => {
    preloader.remove();
  });
});

$(window).scroll(function() {
  // Any scroll events and animations here
  const circleBg = $('#circleBg');
  const circleBg2 = $('#circleBg2');
  if ($(this).scrollTop() > 150) {
    header.addClass('header-bg');
    circleBg.fadeOut('slow', () => {
      circleBg.css('opacity', 0);
    });
    circleBg2.fadeOut('slow', () => {
      circleBg2.css('opacity', 0);
    });
  } else {
    header.removeClass('header-bg');
    circleBg.fadeIn('slow', () => {
      circleBg.css('opacity', 1);
    });
    circleBg2.fadeIn('slow', () => {
      circleBg2.css('opacity', 1);
    });
  }
});
