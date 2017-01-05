/**
 * Created by Жека on 27.07.2016.
 */
(function($) {

    /*var isIE = document.body.style.msTouchAction !== undefined;

    if(!isIE) {

    } else {

    }*/

    ///////////// TOP MENU

    function menuOpen() {
        $('.menu-show').click(function (e) {
            e.preventDefault();
            $('.top_menu_list').addClass("active");
        });
    }
    function menuHide() {
        $('.top_menu_buttons .close').click(function () {
            $('.top_menu_list').removeClass("active");
        });
    }
    menuOpen();
    menuHide();

    /////////////////////////////////////////////


    ////////// CATEGORIES MENU

    $('.item_link').click(function (e) {

        if( $(window).width() < 1201 || device.tablet() || device.mobile() ) {
            e.preventDefault();
            $('.item_cont').not($(this).next()).slideUp(300);
            $(this).next().slideToggle();
        }

    });

    ////////////////////////////

    ///////////// TABS

    var user_tabs = $("#tabs").tabs({
        activate: function(event, ui) {
            var active = ui.newTab.index();

            if (active == 0) {
                $("div[id^='tabs-']").css("display", "");
                $("div[id='all']").css("display", "none");
            }else{
                $("#tabs").tabs( "refresh" );
            }
        },

        create: function(event, ui) {
            $("div[id^='tabs-']").css("display", "");
            $("div[id='all']").css("display", "none");
        }
    });

    /////////////////////////////


    $(".owl-carousel").owlCarousel({
        loop: true,
        autoPlay: 3000,
        autoHeight : true,
        stopOnHover: true,
        singleItem: true,
        transitionStyle : "fade",

        responsive: {

        }
    });

    $('#more').click(function () {
        $(this).hide();
        $('.desc_box').removeClass("short");
    });

    $('.sidebar-show').click(function () {
        $('.sidebar-left').addClass("active");
    });
    $('.sidebar-left .close').click(function () {
        $('.sidebar-left').removeClass("active");
    });



})(jQuery);
