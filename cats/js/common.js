(function($) {

    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('.scroll_top').fadeIn();
        } else {
            $('.scroll_top').fadeOut();
        }
    });

    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    $('.navbar_toggler').click(function () {
        $('.top_navigation').slideToggle(200);
        $('.main_header').toggleClass('open');
    });

    $(document).mouseup(function (e) {
        var container = $('.main_header.open');
        if (container.has(e.target).length === 0){
            $('.top_navigation').slideUp(200);
            container.removeClass('open');
        }
    });

    var $slider = $('.posts_carousel_inner');

    $slider.slick({
        dots: false,
        arrows: true,
        prevArrow: '.posts_carousel_arrow_left',
        nextArrow: '.posts_carousel_arrow_right',
        variableWidth: true,
        slidesToShow: 3,
        slideToScroll: 1,
        focusOnSelect: true,
        draggable: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    variableWidth: false,
                }
            }
        ]
    });

    var viewportWidth = $(window).width();

    if(viewportWidth < 768) {

        var hiddenPosts = [];

        $('.latest_posts .post_item').each(function (index) {
            if(index > 5) {
                $(this).css("display", "none");
                hiddenPosts.push($(this));
            }
        });
        $('.latest_posts .show_more').click(function (e) {
            e.preventDefault();
            hiddenPosts.forEach(function (item) {
                item.css("display", "block");
            })
        })

    }

    if(viewportWidth < 640) {
        $('.latest_posts .post_item').each(function () {
            var fullText = $(this).find('.text')[0].innerText;
            var slicedText = fullText.slice(0,75);

            if (slicedText.length < fullText.length) {
                slicedText += '...';
            }
            $(this).find('.text').text(slicedText);
        });
    }

})(jQuery);


