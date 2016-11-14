$(function() {
	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	detectLocation();
	elementSize();
	windowResize();
	animateElements();

	$('.navigation__button-show').click(function (e) {
		e.preventDefault();

		$('.sidebar').addClass("active");
		$('.mask').addClass("active");
		$('.sidebar__button-close')
			.fadeIn(800)
			.add('.navigation__item_aside > .item__link').click(function () {
			$(this).closest('.sidebar__button-close').fadeOut(100);
			$('.sidebar').removeClass("active");
			$('.mask').removeClass("active");
		});

		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".sidebar"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.removeClass("active"); // скрываем его
				$('.mask').removeClass("active");
			}
		});
	});

	$('.navigation__item > .item__link').on('click', function (e) {
		e.preventDefault();

		var item = $(this).closest('.navigation__item'),
			contentItem = $('.main__content'),
			itemSpot = item.data('class'),
			itemAll = $('.navigation__item'),
			itemConnected = itemAll.filter(function (i, element) {

				var a = $(element).data('class');
				return ( a == itemSpot);

			});

		localStorage.setItem('locPoint', itemSpot);

		console.log(itemConnected);

		contentItem.filter('.main__content_' + itemSpot)
			.add(itemConnected)
			.addClass('active')
			.siblings()
			.removeClass('active');

		elementSize();
		
	});

	function detectLocation() {

		var location = localStorage.getItem('locPoint');

		if (location) {
			var itemsAll = $('.navigation__item'),
				contentItems = $('.main__content'),
				itemActive = itemsAll.filter(function (i, element) {
					var a = $(element).data('class');
					return ( a == location);
				}),
				contentItemActive = contentItems.filter('.main__content_' + location);

			itemsAll.add(contentItems).removeClass('active');
			itemActive.add(contentItemActive).addClass('active');
		}
	}

	function animateElements() {

		$(".show__demo").animated("fadeIn", "fadeOut");
		$(".content__text").animated("fadeInUp");
	}

	function windowResize() {
		$(window).resize(function () {
			elementSize();
		});
	}

	function elementSize() {
		var element = $('.item__content'),
			eWidth = $(element).width(),
			eHeight = eWidth * 5 / 4;

		$(element).css("height", eHeight);

		console.log(eWidth + ' / ' + eHeight);
	}

});




