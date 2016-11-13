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
        $(".s_contacts").css("height", h);
    }

    $(window).resize(function() {
        heightDetect();
    });

    $(".navigation ul a, .footer_scroll a").mPageScroll2id();
});

$(window).load(function() {

    // $(".loader_inner").fadeOut();
    // $(".loader").delay(200).fadeOut("slow");

    $("section .top_text h1").animated("fadeInDown");
    $("section .navigation").animated("fadeInDown");
    $("section .footer_scroll").animatedFull("fadeIn");
    $(".about_foto").animated("fadeInLeft");
    $(".about_text").animated("fadeInRight");
    $(".my_mail").animated("fadeInLeft");
    $(".my_phone").animated("fadeInRight");
    $(".social_wrap").animated("fadeInLeft");

});