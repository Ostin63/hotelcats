$(document).ready((function(){$(".top-slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".previewe-slider"}),$(".previewe-slider").slick({slidesToShow:3,slidesToScroll:1,arrows:!1,asNavFor:".top-slider",focusOnSelect:!0,vertical:!0,responsive:[{breakpoint:786,settings:{vertical:!1}},{breakpoint:1384,settings:{vertical:!1}}]}),$(".slide-1").owlCarousel({loop:!0,nav:!1,navText:!0,dots:!0,autoplay:!1,navText:["",""],center:!0,items:1,responsive:{1384:{nav:!0,navText:!0,navigation:!0,navigationText:["",""]}}}),$(".toogle").click((function(){$(".modal-menu").removeClass("d-none"),$(".modal-overlay").removeClass("d-none")})),$(".close").click((function(){$(".modal-menu").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".item").click((function(){$(".modal-menu").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".modal-logo").click((function(){$(".modal-menu").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".book").click((function(){$(".modal-reservation").removeClass("d-none"),$(".modal-overlay").removeClass("d-none")})),$(".reservation-close").click((function(){$(".modal-reservation").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$("#form").validate({rules:{fname:{required:!0,minlength:2},fphone:{required:!0,phoneMask:!0}},messages:{fname:{required:"Это поле обязательно",minlength:"Введите не менее 2-х символов в поле 'Имя'"},fphone:{required:"Это поле обязательно",checkMask:"Введите полный номер телефона"}}}),$("#phone").mask("+7(999)999-9999",{autoclear:!1}),$(".date").datepicker($.datepicker.regional.ru),$(".closed").click((function(){$(".modal-thank-you").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".ok").click((function(){$(".modal-thank-you").addClass("d-none"),$(".modal-overlay").addClass("d-none")}))}));