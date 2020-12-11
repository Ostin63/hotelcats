$(document).ready(function () {

	$('.top-slider').slick({
		slidesToShow: 1, //сколько слайдов показывать в карусели
		slidesToScroll: 1, // сколько слайдов прокручивать за раз
		arrows: false,
		fade: true,
		asNavFor: '.previewe-slider'
		
	});
	$('.previewe-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.top-slider',
		focusOnSelect: true,
		vertical: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					vertical: false,
				}
			},
			{
				breakpoint: 1366,
				settings: {
					vertical: false,
				}
			}
		]
	});

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
	}); $('.toogle').click(function () {
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
});