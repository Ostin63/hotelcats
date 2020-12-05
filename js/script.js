$(document).ready(function () {
	$(".slide-1").owlCarousel({
		loop: true,
		nav: false,
		navText: true,
		dots: true,
		autoplay: false,
		center: true,
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
				items: 2.5
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
				items: 2.5
			}
		}
	});
});

