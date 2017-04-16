$(function() {

    var isIE = document.body.style.msTouchAction !== undefined;
    
    /*if(!isIE) {
        
    } else {
        
    }*/

    $("a[href*='#']").mPageScroll2id();

    // $(".to_top").click(function() {
    //     $("html, body").animate({ scrollTop: 0 }, "slow");
    //     return false;
    // });

    //Back to top button

    var limit     = $(window).height()/3,
        backToTop = $('.to_top');

    scrollButton();

    function scrollButton() {
        $(window).scroll(function () {
            if ( $(this).scrollTop() > limit ) {
                backToTop.fadeIn();
            } else {
                backToTop.fadeOut();
            }
        });

        backToTop.click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    }
    
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

    $(".reviews_carousel").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        speed: 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow:'<a class="slick-next"></a>',
        prevArrow:'<a class="slick-prev"></a>'
    });
    $(".services_carousel").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow:'<a class="slick-next"></a>',
        prevArrow:'<a class="slick-prev"></a>'
    });

});

$(document).ready(function() {

    //E-mail Ajax Send
    $(".forms").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                // Done Functions
                $.magnificPopup.close();
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $('.form_btn').magnificPopup({type:'inline'});

    $('.form_btn').click(function (e) {
        e.preventDefault();
    })

    var clock;

    $(document).ready(function() {
        var clock1, clock2;

        clock1 = $('.countdown_1').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            callbacks: {
                stop: function() {
                    $('.message').html('The clock has stopped!')
                }
            }
        });
        clock1.setTime(220880);
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
        clock2.setTime(220880);
        clock2.setCountdown(true);
        clock2.start();

    });


});