/**
 * Created by Жека on 27.07.2016.
 */
(function($) {
    // $('.menu_wrap ul').equalHeights();

    /*var isIE = document.body.style.msTouchAction !== undefined;

    if(!isIE) {

    } else {

    }*/

    

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

    ////////// CATEGORIES MENU

    /// For desktop

    var wWidth = $(window).width();

    if( wWidth > 992 ) {
        $('.menu_item').hover(function () {
            $('.item_cont').hide();
            $(this).next().show();
        }, function () {
            $(this).next().delay(300).hide(0);
        });
        $('.item_cont').hover(function () {
            $(this).show(0);
        }, function () {
            $(this).delay(300).hide(0);
        });
    }

    /// For mobile

    $( ".menu_wrap" ).accordion({
        header: ".menu_item",
        collapsible: true,
        active: "false",
        heightStyle: "content"
    });

    //////////////////////////////////////////////

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

})(jQuery);
