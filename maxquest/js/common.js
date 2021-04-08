(function($) {

    /////////////// Screens Slider

    var ww = $(window).width();

    if ( ww > 991 ) {

        var owl = $(".screens_wrapper").owlCarousel({
            animateOut: 'rotateOut',
            animateIn: 'fadeIn',
			mouseDrag: false,
            items:1,
            smartSpeed:450
        });

        var indicator = new WheelIndicator({
            elem: document.querySelector('.owl-stage'),
            callback: function(e){
                console.log(e.direction); // "up" or "down"

                if(e.direction === 'down') {
                    owl.trigger('next.owl');
                } else {
                    owl.trigger('prev.owl');
                }
            }
        });
		
        owl.on('changed.owl.carousel', function() {
            animateDots()
        });
    }

    animateDots();

    function animateDots() {
        var dots = $('.owl-dot');
        var dotActiveIndex = $('.owl-dot.active').index();
        var dotsBeforeActive = [];
        var dotsAfterActive = [];

        for(var i = 0; i < dots.length; i++) {
            if (i < dotActiveIndex) {
                dotsBeforeActive.push(dots[i]);
            } else if (i > dotActiveIndex) {
                dotsAfterActive.push(dots[i]);
            }
        }

        dotsBeforeActive = dotsBeforeActive.reverse();
        dotsBeforeActive = $(dotsBeforeActive);
        dotsAfterActive = $(dotsAfterActive);

        var rotateAngle = 0;
        var rotateAngle2 = 0;
        var scaleIntensity = 1;
        var scaleIntensity2 = 1;
        var sinus = 75;
        var sinus2 = 75;
        function getRad(deg) {
            return deg * Math.PI/180;
        }

        dotsAfterActive.each(function (index) {
            rotateAngle += 15;
            if( index < 3 ) {
                scaleIntensity -= 0.15;
                $(this).css({
                    "transform": "rotateZ(" + rotateAngle + "deg) scale(" + scaleIntensity + ")"
                });

            } else if ( index >= 3) {

                if ( Math.sin(getRad(sinus)) > 0 ) {
                    scaleIntensity += 0.15;
                    $(this).css({
                        "transform": "rotateZ(" + rotateAngle + "deg) scale(" + scaleIntensity + ")"
                    });
                } else {
                    scaleIntensity -= 0.15;
                    $(this).css({
                        "transform": "rotateZ(" + rotateAngle + "deg) scale(" + scaleIntensity + ")"
                    });
                }

                sinus < 300 ?  sinus += 75 : sinus = 75;

            }
        });

        dotsBeforeActive.each(function (index) {
            rotateAngle2 += 15;
            if( index < 3 ) {
                scaleIntensity2 -= 0.15;
                $(this).css({
                    "transform": "rotateZ(" + rotateAngle2 + "deg) scale(" + scaleIntensity2 + ")"
                });

            } else if ( index >= 3) {

                if ( Math.sin(getRad(sinus2)) > 0 ) {
                    scaleIntensity2 += 0.15;
                    $(this).css({
                        "transform": "rotateZ(" + rotateAngle2 + "deg) scale(" + scaleIntensity2 + ")"
                    });
                } else {
                    scaleIntensity2 -= 0.15;
                    $(this).css({
                        "transform": "rotateZ(" + rotateAngle2 + "deg) scale(" + scaleIntensity2 + ")"
                    });
                }

                sinus2 < 300 ?  sinus2 += 75 : sinus2 = 75;

            }
        });
    }

    ///////////////////////////////////// Screens Slider End


    $(function() {
        $('.ico_countdown').countdown({
            date: "may 4, 2018 15:03:26",
            render: function(data) {
                $(this.el).html("<div>" +
                    this.leadingZeros(data.days, 2) + " " + "<span>Days</span></div><div>" +
                    this.leadingZeros(data.hours, 2) + " <span>Hours</span></div><div>" +
                    this.leadingZeros(data.min, 2) + " <span>Mins</span></div><div>" +
                    this.leadingZeros(data.sec, 2) + " <span>Secs</span></div>"
                );
            }

        });
    });


    $('.navbar-toggle').on('click', function () {
        $('.main_header').toggleClass("open");
    });


    ///////////////// SLIDERS

    $('.press_slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });
    $('.media_slider').slick({
        infinite: true,
        arrows: true,
        prevArrow: '.media_slider_arrows .arrow-prev',
        nextArrow: '.media_slider_arrows .arrow-next',
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.team_slider').slick({
        infinite: true,
        arrows: true,
        centerMode: true,
        variableWidth: true,
        prevArrow: '.team_slider_arrows .arrow-prev',
        nextArrow: '.team_slider_arrows .arrow-next',
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1
    });

})(jQuery);

