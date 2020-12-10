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
  $('.left-filter').click(function () { 
    $('.form .modal-form').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  });
  $('.form-close').click(function () {
    $('.form .modal-form').addClass('d-none');
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