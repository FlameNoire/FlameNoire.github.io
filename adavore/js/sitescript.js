// JavaScript Document
$(document).ready(function(){
						   
	$('#header a.trigger').click(function(){
		$('#menuMain ul').slideToggle();
		return false;
	});

	$("ul.tabs li > a").on('click', function(e) {
		e.preventDefault();
		$("ul.tabs li").removeClass("active");
		$(this).parent().addClass("active");
		$(".tab-content").removeClass("active");
		var index = $('ul.tabs li').index($(this).parent());
		$('.tab-content').eq(index).addClass('active');
		return false;
	});

	var swiper = new Swiper('.swiper-container', {
		nextButton: '.slider .links a.next',
		prevButton: '.slider .links a.prev',
		loop: true
	});
	
	var swiper2 = new Swiper('#mob_ad_slider .swiper-container', {
        nextButton: '.slider .links a.next',
        prevButton: '.slider .links a.prev',
		pagination: '.swiper-pagination',
		paginationClickable: true,
		loop: true,
		slidesPerView: 3,

		breakpoints: {
			// when window width is <= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			// when window width is <= 640px
			724: {
				slidesPerView: 2,
				spaceBetween: 30
			}
		}
    });
	
});