
var swiper = new Swiper('.reference__slider', {
	cssMode: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination'
	},
	mousewheel: true,
	keyboard: true,
});