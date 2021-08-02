/* eslint-disable no-undef */
$(document).ready(() => {

  $('.top-slider').slick({
    slidesToShow: 1, //сколько слайдов показывать в карусели
    slidesToScroll: 1, // сколько слайдов прокручивать за раз
    arrows: false,
    fade: true,
    asNavFor: '.previewe-slider',
  });
  $('.previewe-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.top-slider',
    focusOnSelect: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          vertical: false,
        },
      },
      {
        breakpoint: 1384,
        settings: {
          vertical: false,
        },
      },
    ],
  });

  $('.slide-1').owlCarousel({
    loop: true,
    nav: false,
    navText: true,
    dots: true,
    autoplay: false,
    // eslint-disable-next-line no-dupe-keys
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
  }); $('.toogle').click(() => {
    $('.modal-menu').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  });
  $('.close').click(() => {
    $('.modal-menu').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });
  $('.item').click(() => {
    $('.modal-menu').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });
  $('.modal-logo').click(() => {
    $('.modal-menu').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });

  // бронь номера

  $('.book').click(() => {
    $('.modal-reservation').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  });

  $('.reservation-close').click(() => {
    $('.modal-reservation').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });
  $('#form').validate({
    rules: {
      fname: {
        required: true,
        minlength: 2,
      },
      fphone: {
        required: true,
        phoneMask: true,
      },
    },
    messages: {
      fname: {
        required: 'Это поле обязательно',
        minlength: 'Введите не менее 2-х символов в поле \'Имя\'',
      },
      fphone: {
        required: 'Это поле обязательно',
        checkMask: 'Введите полный номер телефона',
      },
    },
  });
  $('#phone').mask('+7(999)999-9999', {
    autoclear: false,
  });
  $('.date').datepicker($.datepicker.regional['ru']);

  $('.closed').click(() => {
    $('.modal-thank-you').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });
  $('.ok').click(() => {
    $('.modal-thank-you').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });

});
