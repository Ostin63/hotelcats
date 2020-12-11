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
			1366: {
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

			768: {
				items: 1.5,
				margin: 30,
				center: false
			},
			1366: {
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

	function checkWidth() {
		let windowWidth = $('body').innerWidth(),
			menu = $(".modal-menu");
		  overlay = $('.modal-overlay');
		if (windowWidth > 768) {
			menu.addClass('d-none');
			overlay.addClass('d-none');
		}
	}
	checkWidth(); // проверит при загрузке страницы
	$(window).resize(function () {
		checkWidth(); // проверит при изменении размера окна клиента
	});
});