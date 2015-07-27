//= libs/jquery.min.js
//= libs/swiper.jquery.min.js

var mySwiper = new Swiper(".slider", {
	loop: true,
	spaceBetween: 0,
	centeredSlides: true,
	slidesPerView: 1,
	nextButton: '.slider__control--right',
	prevButton: '.slider__control--left',
	pagination: ".slider__thumbs",
	bulletClass: "slider__thumb",
	bulletActiveClass: "slider__thumb--active",
	paginationClickable: true,
	paginationBulletRender: function (index, className) {
		return "<div class=\"slider__thumb slider__thumb--" + (index + 1) +"\"></div>";
	}
});