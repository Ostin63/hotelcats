$(document).ready(function () {
  const onAddMenu = () => {
    $('.modal-menu').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  };
  const onCloseMenu = () => {
    $('.modal-menu').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  };
  const onAddForm = () => {
    $('.form .modal-form').addClass('d-block');
    $('.modal-overlay').removeClass('d-none');
  };
  const onCloseForm = () => {
    $('.form .modal-form').removeClass('d-block');
    $('.modal-overlay').addClass('d-none');
  };
  const onAddReservationMenu = () => {
    $('.modal-reservation').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  };
  const onCloseReservationMenu = () => {
    $('.modal-reservation').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  };
  const onAddThankYou = () => {
    $('.modal-thank-you').removeClass('d-block');
    $('.modal-overlay').removeClass('d-none');
  };

  $('.toogle').click(onAddMenu);
  $('.close').click(onCloseMenu);
  $('.item').click(onCloseMenu);
  $('.modal-logo').click(onCloseMenu);
  $('.left-filter').click(onAddForm);
  $('.form-close').click(onCloseForm);
  $('.btn-yellow').click(onCloseForm);
 
  $(window).resize(function () {
    const win = $(this);
    if (win.width() >= 1384) {
      onCloseForm();
    }
  });

  $('#filter-form').submit(function (evt) {
    evt.preventDefault()
  });
  $('#form').submit(function (evt) {
    evt.preventDefault()
  });

  // бронь номера

  $('.book').click(onAddReservationMenu);
  $('.reservation-close').click(onCloseReservationMenu);
  
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

});

