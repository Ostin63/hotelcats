$(document).ready((function(){$(".top-slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".previewe-slider"}),$(".previewe-slider").slick({slidesToShow:3,slidesToScroll:1,arrows:!1,asNavFor:".top-slider",focusOnSelect:!0,vertical:!0,responsive:[{breakpoint:768,settings:{vertical:!1}},{breakpoint:1366,settings:{vertical:!1}}]}),$(".slide-1").owlCarousel({loop:!0,nav:!1,navText:!0,dots:!0,autoplay:!1,navText:["",""],center:!0,items:1,responsive:{1366:{nav:!0,navText:!0,navigation:!0,navigationText:["",""]}}}),$(".toogle").click((function(){$(".modal-menu").removeClass("d-none"),$(".modal-overlay").removeClass("d-none")})),$(".close").click((function(){$(".modal-menu").addClass("d-none"),$(".modal-overlay").addClass("d-none")})),$(".item").click((function(){$(".modal-menu").addClass("d-none"),$(".modal-overlay").addClass("d-none")}))}));