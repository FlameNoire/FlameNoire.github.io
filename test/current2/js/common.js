/**
 * Created by Жека on 27.07.2016.
 */
(function($) {
    // $('.selector').equalHeights();

    /*var isIE = document.body.style.msTouchAction !== undefined;

    if(!isIE) {

    } else {

    }*/

    /*$(".selector").mPageScroll2id({
        scrollSpeed: 700,
        scrollEasing: "linear"
    });*/

    
    
    function menuOpen() {
        $('.nav-show').click(function (e) {
            e.preventDefault();
            $(this).addClass("on");
            $('.navigation').addClass("active");
            menuHide();
        });
    }
    function menuHide() {
        $('.nav-show.on').click(function (e) {
            e.preventDefault();
            $(this).removeClass("on");
            $('.navigation').removeClass("active");
            menuOpen();
        });
    }
    menuOpen();
    menuHide();


})(jQuery);
