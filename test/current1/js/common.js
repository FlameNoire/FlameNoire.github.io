/**
 * Created by Жека on 27.07.2016.
 */
(function($) {

    /*var isIE = document.body.style.msTouchAction !== undefined;

    if(!isIE) {

    } else {

    }*/

    $('.faq-item').equalHeights();

    // Mask with screenshot

    $('.show-mask').click(function () {
        $('.pixperf-mask').addClass("active");
    });
    $('.hide-mask').click(function () {
        $('.pixperf-mask').removeClass("active");
    });

})(jQuery);
