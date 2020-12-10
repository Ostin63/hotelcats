$(document).ready(function () { 
  $('.toogle').click(function () {
    $('.modal-menu').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  });
  $('.close').click(function () {
    $('.modal-menu').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });
  $('.item').click(function () {
    $('.modal-menu').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });
  $('.filter').click(function () { 
    $('.form .modal-form').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  });
  $('.close').click(function () {
    $('.form .modal-form').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  });
});