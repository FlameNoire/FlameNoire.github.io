(function($) {
    
    $("a[href*='#']").mPageScroll2id();
    
    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    }

    // Menu links

    $('.nav_list li').click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $('.nav_list li').index(this);
        $('.f_nav .nav_list li').removeClass("active").eq(index).addClass('active');
    });
    $('.f_nav .nav_list li').click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $('.f_nav .nav_list li').index(this);
        $('.nav_list li').removeClass("active").eq(index).addClass('active');
    });

    // Sliders

    $(".foto_gallery").slick({
        // autoplay: true,
        // autoplaySpeed: 5000,
        dots: false,
        speed: 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow:'<a class="slick-next"></a>',
        prevArrow:'<a class="slick-prev"></a>'
    });

    $('.popup_img').magnificPopup({type:'image'});
    $('.popup_btn').magnificPopup({type:'inline'});
    $('.form_btn').magnificPopup({type:'inline'});

    $('.form_btn').click(function (e) {
        e.preventDefault();
    });

    var clock1, clock2;

    var date = new Date(2017, 4, 1, 2, 49),
        now = new Date(),
        time = (date - now) / 1000;

    clock1 = $('.countdown_1').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
            stop: function() {
                $('.message').html('The clock has stopped!')
            }
        }
    });
    clock1.setTime(time);
    clock1.setCountdown(true);
    clock1.start();

    clock2 = $('.countdown_2').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
            stop: function() {
                $('.message').html('The clock has stopped!')
            }
        }
    });
    clock2.setTime(time);
    clock2.setCountdown(true);
    clock2.start();


})(jQuery);