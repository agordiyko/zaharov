//Swiper

const swiper = new Swiper('.reference__slider', {
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

//Progress line

let line = document.getElementById('progress_line');
window.addEventListener('scroll', progressBar);

function progressBar(e) {
	let windowScroll = document.body.scrollTop ||
		document.documentElement.scrollTop;
	let windowHeight = document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	let width_progress_line = windowScroll / windowHeight * 100;
	line.style.width = width_progress_line + '%';
}

