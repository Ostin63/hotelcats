/* eslint-disable no-undef */
$(document).ready(() => {
  const dataSabmitUrl = 'https://echo.htmlacademy.ru/';

  const onAddMenu = () => {
    $('.modal-menu').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  };
  const onCloseMenu = () => {
    $('.modal-menu').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  };
  const onAddForm = () => {
    $('.form .modal-form')
      .removeClass('d-none')
      .addClass('z-index');
    $('.modal-overlay').removeClass('d-none');
  };
  const onCloseForm = () => {
    $('.form .modal-form')
      .addClass('d-none')
      .removeClass('z-index');
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
    $('.modal-thank-you').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  };
  const onRemoveThankYou = () => {
    $('.modal-thank-you').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  };
  const winThis = () => {
    const win = $(this);
    if (win.width() >= 1384) {
      onCloseForm();
    }
  };

  $(window).resize(winThis);

  // const isEscEvent = (evt) => evt.key === keys.escape || evt.key === keys.esc;

  const onEscRemove = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      onCloseForm();
    }
  };

  const onEscReservationMenu = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      onCloseReservationMenu();
    }
  };

  const onEscThankYou = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      onRemoveThankYou();
    }
  };

  $('.toogle').click(onAddMenu);
  $('.close').click(onCloseMenu);
  $('.item').click(onCloseMenu);
  $('.modal-logo').click(onCloseMenu);
  $('.left-filter').click(onAddForm);
  $('.form-close').click(onCloseForm);
  $('.btn-yellow').click(onCloseForm);
  $('.closed').click(onRemoveThankYou);
  $('.ok').click(onRemoveThankYou);

  $(document).keyup(onEscRemove);
  $(document).keyup(onEscReservationMenu);
  $(document).keyup(onEscThankYou);

  // бронь номера

  $('.book').click(onAddReservationMenu);
  $('.reservation-close').click(onCloseReservationMenu);

  const sendData = (url, bodyForm, alertSucces, error) => {
    fetch(url, {
      method: 'POST',
      body: bodyForm,
    })
      .then((response) => {
        if (response.ok) {
          alertSucces();
        } else {
          error();
        }
      })
      .catch(() => {
        error();
      });
  };

  $('#phone').mask('+7(999)999-9999', {
    autoclear: false,
  });
  const onClickAlert = () => {
    $('.error-loading').removeClass('d-flex');
  };
  const onRemovealertError = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      onClickAlert();
    }
  };

  const alertError = () => {
    onCloseReservationMenu();
    $('.error-loading').addClass('d-flex');
    $(document).keydown(onRemovealertError);
    $(document).click(onClickAlert);
  };

  const alertForm = () => {
    onCloseReservationMenu();
    onAddThankYou();
  };

  const onFormSend = (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    sendData(dataSabmitUrl, formData, alertForm, alertError);
  };

  $('#form').submit(onFormSend);

});

