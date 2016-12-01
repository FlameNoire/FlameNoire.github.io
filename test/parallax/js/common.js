$(function() {

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {
        
    };


    var sect2Pos = $('.screen-2').offset(),
        sect3Pos = $('.screen-3').offset(),
        sect4Pos = $('.screen-4').offset(),
        sect5Pos = $('.screen-5').offset(),
        title2Pos = $('.screen-2 h2').offset(),
        title3Pos = $('.screen-3 h2').offset(),
        title4Pos = $('.screen-4 h2').offset(),
        title5Pos = $('.screen-5 h2').offset();


    $(window).scroll(function() {

        (function () {
            var st = $(window).scrollTop(),
                st1 = st / 30,
                st2 = ( st - sect2Pos.top ) / 30,
                st3 = ( st - sect3Pos.top ) / 30,
                st4 = ( st - sect4Pos.top ) / 30,
                st5 = ( st - sect5Pos.top ) / 30;
            // console.log(st);

            $(".screen-1 > .bg-wrapper").css({
                "transform" : "translate3d(0px, " + st1  + "%, .01px)",
                "-webkit-transform" : "translate3d(0px, " + st1  + "%, .01px)"
            });

            $(".screen-2 > .bg-wrapper").css({
                "transform" : "translate3d(0px, " + st2  + "%, .01px)",
                "-webkit-transform" : "translate3d(0px, " + st2  + "%, .01px)"
            });

            $(".screen-3 > .bg-wrapper").css({
                "transform" : "translate3d(0px, " + st3  + "%, .01px)",
                "-webkit-transform" : "translate3d(0px, " + st3  + "%, .01px)"
            });

            $(".screen-4 > .bg-wrapper").css({
                "transform" : "translate3d(0px, " + st4  + "%, .01px)",
                "-webkit-transform" : "translate3d(0px, " + st4  + "%, .01px)"
            });

            $(".screen-5 > .bg-wrapper").css({
                "transform" : "translate3d(0px, " + st5  + "%, .01px)",
                "-webkit-transform" : "translate3d(0px, " + st5  + "%, .01px)"
            });
        })();

        (function () {
            var st = $(window).scrollTop(),
                wh = $(window).height(),
                st1 = st / 10,
                st2 = ( st + wh - title2Pos.top ) / 10,
                st3 = ( st + wh - title3Pos.top ) / 10,
                st4 = ( st + wh - title4Pos.top ) / 10,
                st5 = ( st + wh - title5Pos.top ) / 10;
            console.log(st2 + " " + st3 + " " + st4 + " " + st5);

            $(".screen-1 h2").css({
                "transform" : "translate3d(0px, " + st1  + "px, .01px)",
                "-webkit-transform" : "translate3d(0px, " + st1  + "px, .01px)"
            });

            $(".screen-2 h2").css({
                "transform" : "translate3d(0px, " + st2  + "px, .01px)",
                "-webkit-transform" : "translate3d(0px, " + st2  + "px, .01px)"
            });

            $(".screen-3 h2").css({
                "transform" : "translate3d(0px, " + st3  + "px, .01px)",
                "-webkit-transform" : "translate3d(0px, " + st3  + "px, .01px)"
            });

            $(".screen-4 h2").css({
                "transform" : "translate3d(0px, " + st4  + "px, .01px)",
                "-webkit-transform" : "translate3d(0px, " + st4  + "px, .01px)"
            });

            $(".screen-5 h2").css({
                "transform" : "translate3d(0px, " + st5  + "px, .01px)",
                "-webkit-transform" : "translate3d(0px, " + st5  + "px, .01px)"
            });

        })();

    });

    // console.log(title2Pos.top + " " + title3Pos.top + " " + title4Pos.top + " " + title5Pos.top);


});
