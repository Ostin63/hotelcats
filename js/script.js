/* eslint-disable no-undef */
/* eslint-disable no-dupe-keys */
$(document).ready(() => {
  $('.slide-1').owlCarousel({
    loop: true,
    nav: false,
    navText: true,
    dots: true,
    autoplay: false,
    navText: ['', ''],
    center: true,
    items: 1,
    responsive: {
      1384: {
        nav: true,
        navText: true,
        navigation: true,
        navigationText: ['', ''],
      },
    },
  });
  $('.slide-2').owlCarousel({
    loop: true,
    nav: false,
    navText: true,
    dots: true,
    autoplay: false,
    center: true,
    dotsEach: true,
    responsive: {

      320: {
        items: 1,
      },

      786: {
        items: 1.5,
        margin: 30,
        center: false,
      },
      1384: {
        items: 2.5,
        margin: 30,
        center: false,
        nav: true,
        navText: ['', ''],
      },
    },
  });

  const noAddMenu = () => {
    $('.modal-menu').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  };
  const noRemoveMenu = () => {
    $('.modal-menu').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  };

  const checkWidth = () => {
    const win = $(this);
    if (win.width() >= 786) {
      noRemoveMenu();
    }
  };

  $(window).resize(checkWidth);
  $('.toogle').click(noAddMenu);
  $('.close').click(noRemoveMenu);
  $('.item').click(noRemoveMenu);
  $('.modal-logo').click(noRemoveMenu);
});
