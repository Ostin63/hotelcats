$(document).ready((function(){function o(){let o=$("body").innerWidth(),e=$(".modal-overlay");modalForm=$(".modal-form"),o>1366?(modalForm.removeClass("d-none"),e.addClass("d-none")):modalForm.addClass("d-none")}$(".toogle").click((function(){$(".modal-menu").removeClass("d-none"),$(".modal-overlay").removeClass("d-none")})),$(".close").click((function(){$(".modal-menu").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".form-close").click((function(){$(".modal-menu").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".item").click((function(){$(".modal-menu").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".modal-logo").click((function(){$(".modal-menu").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".left-filter").click((function(){$(".form .modal-form").removeClass("d-none"),$(".modal-overlay").removeClass("d-none")})),$(".form-close").click((function(){$(".form .modal-form").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".book").click((function(){$(".modal-reservation").removeClass("d-none"),$(".modal-overlay").removeClass("d-none")})),$(".reservation-close").click((function(){$(".modal-reservation").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$("#form").validate({rules:{fname:{required:!0,minlength:2},fphone:{required:!0,phoneMask:!0}},messages:{fname:{required:"Это поле обязательно",minlength:"Введите не менее 2-х символов в поле 'Имя'"},fphone:{required:"Это поле обязательно",checkMask:"Введите полный номер телефона"}}}),$("#phone").mask("+7(999)999-9999",{autoclear:!1}),$("#dmin").datepicker($.datepicker.regional.ru),$("#dmax").datepicker($.datepicker.regional.ru),$(".closed").click((function(){$(".modal-thank-you").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".ok").click((function(){$(".modal-thank-you").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),o(),$(window).resize((function(){o()}))}));