$(document).ready((function(){function e(){let e=$("body").innerWidth(),a=$(".modal-menu");overlay=$(".modal-overlay"),thank=$(".modal-thank-you"),reservation=$(".modal-reservation"),e>768&&(a.addClass("d-none"),thank.addClass("d-none"),reservation.addClass("d-none"),overlay.addClass("d-none"))}$(".slide-1").owlCarousel({loop:!0,nav:!1,navText:!0,dots:!0,autoplay:!1,navText:["",""],center:!0,items:1,responsive:{1366:{nav:!0,navText:!0,navigation:!0,navigationText:["",""]}}}),$(".slide-2").owlCarousel({loop:!0,nav:!1,navText:!0,dots:!0,autoplay:!1,center:!0,dotsEach:!0,responsive:{320:{items:1},768:{items:1.5,margin:30,center:!1},1366:{items:2.5,margin:30,center:!1,nav:!0,navText:["",""]}}}),$(".toogle").click((function(){$(".modal-menu").removeClass("d-none"),$(".modal-overlay").removeClass("d-none")})),$(".close").click((function(){$(".modal-menu").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".item").click((function(){$(".modal-menu").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".modal-logo").click((function(){$(".modal-menu").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".book").click((function(){$(".modal-reservation").removeClass("d-none"),$(".modal-overlay").removeClass("d-none")})),$(".reservation-close").click((function(){$(".modal-reservation").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$("#form").validate({rules:{fname:{required:!0,minlength:2},fphone:{required:!0,phoneMask:!0}},messages:{fname:{required:"Это поле обязательно",minlength:"Введите не менее 2-х символов в поле 'Имя'"},fphone:{required:"Это поле обязательно",checkMask:"Введите полный номер телефона"}}}),$("#phone").mask("+7(999)999-9999",{autoclear:!1}),$("#dmin").datepicker($.datepicker.regional.ru),$("#dmax").datepicker($.datepicker.regional.ru),$("#form").validator().on(".application",(function(e){e.isDefaultPrevented()||($(".modal-reservation").addClass("d-none"),$(".modal-thank-you").removeClass("d-none"))})),$(".closed").click((function(){$(".modal-thank-you").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".ok").click((function(){$(".modal-thank-you").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),e(),$(window).resize((function(){e()}))}));