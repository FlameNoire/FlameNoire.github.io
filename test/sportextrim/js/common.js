(function($) {

    var $slider = $('.s_top_slider');

    $slider.slick({
        dots: true,
        arrows: true,
        infinite: true
    });

    $('.enter_btn').click(function (e) {
        e.preventDefault();
        $('.authorization_form').fadeIn(500);
    });
    $('.authorization_form .close_btn').click(function (e) {
        e.preventDefault();
        $('.authorization_form').fadeOut(300);
    });

})(jQuery);


