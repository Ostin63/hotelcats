$(document).ready(function () { 
  $('.toogle').click(function () {
    $('.modal-menu').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  });
  $('.close').click(function () {
    $('.modal-menu').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });
  $('.form-close').click(function () {
    $('.modal-menu').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });
  $('.item').click(function () {
    $('.modal-menu').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });
  $('.modal-logo').click(function () {
    $('.modal-menu').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });
  $('.left-filter').click(function () { 
    $('.form .modal-form').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  });
  $('.form-close').click(function () {
    $('.form .modal-form').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });

  // бронь номера

  $('.book').click(function () {
    $('.modal-reservation').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  });

  $('.reservation-close').click(function () {
    $('.modal-reservation').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });
  $('#form').validate({
    rules: {
      fname: {
        required: true,
        minlength: 2
      },
      fphone: {
        required: true,
        phoneMask: true
      }
    },
    messages: {
      fname: {
        required: "Это поле обязательно",
        minlength: "Введите не менее 2-х символов в поле 'Имя'"
      },
      fphone: {
        required: "Это поле обязательно",
        checkMask: "Введите полный номер телефона"
      }
    }
  });
  $('#phone').mask("+7(999)999-9999", {
    autoclear: false
  });
  $(".date").datepicker($.datepicker.regional["ru"]);

  // Спасибо за заявку
/*
  $('#form').validator().on('.application', function (e) {
    if (!e.isDefaultPrevented()) {
      $('.modal-reservation').addClass('d-none');
      $('.modal-thank-you').removeClass('d-none');
    }
  });*/
  $('.closed').click(function () {
    $('.modal-thank-you').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });
  $('.ok').click(function () {
    $('.modal-thank-you').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });

  function checkWidth() {
    let windowWidth = $('body').innerWidth(),
      overlay = $('.modal-overlay');
      modalForm = $(".modal-form");
    if (windowWidth > 1366) {
      modalForm.removeClass('d-none');
      overlay.addClass('d-none');
    } else {
      modalForm.addClass('d-none');
    }
  }
  checkWidth(); // проверит при загрузке страницы
  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
});