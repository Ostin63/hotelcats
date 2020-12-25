$(document).ready(function () {
	$(".slide-1").owlCarousel({
		loop: true,
		nav: false,
		navText: true,
		dots: true,
		autoplay: false,
		navText: ["", ""],
		center: true,
		items: 1,
		responsive: {
			1384: {
				nav: true,
				navText: true,
				navigation: true,
				navigationText: ["", ""]
			}
		}
	});
	$(".slide-2").owlCarousel({
		loop: true,
		nav: false,
		navText: true,
		dots: true,
		autoplay: false,
		center: true,
		dotsEach: true,
		responsive: {

			320: {
				items: 1
			},

			786: {
				items: 1.5,
				margin: 30,
				center: false
			},
			1384: {
				items: 2.5,
				margin: 30,
				center: false,
				nav: true,
				navText: ["", ""]
			}
		}
	});
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
	$('.modal-logo').click(function () {
		$('.modal-menu').addClass('d-none');
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

	jQuery.validator.addMethod("checkMask", function (value, element) {
		return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
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
		menu = $(".modal-menu");
		overlay = $('.modal-overlay');
		thank = $('.modal-thank-you');
		reservation = $('.modal-reservation');
		if (windowWidth > 768) {
			menu.addClass('d-none');
			thank.addClass('d-none');
			reservation.addClass('d-none');
			overlay.addClass('d-none');
		}
	}
	checkWidth(); // проверит при загрузке страницы
	$(window).resize(function () {
		checkWidth(); // проверит при изменении размера окна клиента
	});
});