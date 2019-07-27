(function($) {

    var $slider = $('.s_top_slider');
    $slider.slick({
        dots: true,
        arrows: true,
        infinite: true
    });

    new WOW().init();

    var $slider2 = $('.shops_slider');
    $slider2.slick({
        dots: false,
        arrows: true,
        prevArrow: ".shops_arrow_left",
        nextArrow: ".shops_arrow_right",
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });


    var button = $('.catalog_menu_btn');
    var menu = $('.catalog_menu');
    var menuLink = $('.catalog_menu ul>li>a');
    $('.catalog_menu_btn').click(function () {
        button.toggleClass("active");
        menu.toggleClass("active");
    });
    menuLink.click(function () {
        button.toggleClass("active");
        menu.toggleClass("active");
    });

    $('.authorization_form .close_btn').click(function (e) {
        e.preventDefault();
        $('.authorization_form').fadeOut(300);
    });

})(jQuery);


