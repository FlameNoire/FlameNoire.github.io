/**
 * Created by Жека on 26.06.2016.
 */

$(document).ready(function() {

    $("#portfolio_grid").mixItUp();

    $(".portfolio_row li").click(function() {
        $(".portfolio_row li").removeClass("active");
        $(this).addClass("active");
    });

    $(".popup").magnificPopup({type:"image"});
    $(".popup_content").magnificPopup({
        type:"inline",
        midClick: true
    });

    heightDetect();

    function heightDetect() {
        var h = $(window).height();
        $(".main_head, .s_contacts").css("height", h);
    }

    $(window).resize(function() {
        heightDetect();
    });

    $(".navigation ul a, .footer_scroll a").mPageScroll2id();
});

$(window).load(function() {


    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".navigation").animated("fadeInDown", "fadeOutUp");
    $(".footer_scroll p").animatedFull("fadeInDown", "fadeOutUp");
    $(".scroll_icon span").animatedFull("fadeInDown", "fadeOutUp");
    $(".about_foto").animated("fadeInLeft", "fadeOutRight");
    $(".about_text").animated("fadeInRight", "fadeOutLeft");
    $(".my_mail").animated("fadeInLeft", "fadeOutRight");
    $(".my_phone").animated("fadeInRight", "fadeOutLeft");
    $(".social_wrap").animated("fadeInLeft", "fadeOutRight");

});