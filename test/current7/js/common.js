$(function() {

    $('.countdown1').downCount({
        date: '06/06/2017 12:00:00'
    });
    $('.countdown2').downCount({
        date: '06/06/2017 12:00:00'
    });

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

    $(".certificates_carousel").slick({
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
    });

});