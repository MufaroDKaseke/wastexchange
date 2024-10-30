
const preloader = $('.preloader');
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
  if ($(this).scrollTop() > 250) {
    circleBg.fadeOut('slow', () => {
      circleBg.css('opacity', 0);
    });
    circleBg2.fadeOut('slow', () => {
      circleBg2.css('opacity', 0);
    });
  }
});
