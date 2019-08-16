$(function() {

    var wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       100,
            mobile:       false,
            live:         true
        }
    );
    wow.init();

    $('select').not('.auction_restriction select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        var selectName = '<span>' + $this.parent('.select').prev('label').html() + '</span>';
        $styledSelect.html(selectName + $this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.append(selectName);
            // $styledSelect.text($(this).text()).removeClass('active');
            $styledSelect.html(selectName + $(this).text()).removeClass('active').addClass('chosen');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
            console.log($this.parent('.select').prev('label').html());
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });


    $('.btn_enter').magnificPopup({
        items: {
            src: '#login_form',
            type: 'inline'
        },
        callbacks: {
            open: function() {
                $('body').css('overflow', 'hidden');
            },

            close: function() {
                $('body').css('overflow', '');
            }
        }
    });
    $('.btn_sign-in').magnificPopup({
        items: {
            src: '#reg_form',
            type: 'inline'
        },
        callbacks: {
            open: function() {
                $('body').css('overflow', 'hidden');
            },

            close: function() {
                $('body').css('overflow', '');
            }
        }
    });
    $('.btn_send_email').magnificPopup({
        items: {
            src: '#email_form',
            type: 'inline'
        }
    });
    $('.image_popup_trigger').magnificPopup({
        mainClass: 'popup_slider_bg',
        items: {
            src: '#photo_slider',
            type: 'inline'
        },
        callbacks: {
            open: function() {
                $('body').css('overflow', 'hidden');
            },

            close: function() {
                $('body').css('overflow', '');
            },
            beforeOpen: function () {

                //Load images here ...


                $('#photo_slider_slides').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    infinite: false,
                    arrows: true,
                    fade: true,
                    prevArrow: '.slider_control-prev',
                    nextArrow: '.slider_control-next',
                    asNavFor: '#photo_slider_thumbs'
                });
                $('#photo_slider_slides').slick('resize');
                $('#photo_slider_thumbs').slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    asNavFor: '#photo_slider_slides',
                    // centerMode: true,
                    variableWidth: true,
                    infinite: false,
                    prevArrow: '.thumb-prev',
                    nextArrow: '.thumb-next',
                    focusOnSelect: true,
                    responsive: [
                        {
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 4
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 2
                            }
                        }
                    ]
                });

            },
            afterClose: function() {
                $('#photo_slider_slides').slick('destroy');
                $('#photo_slider_thumbs').slick('destroy');
            }
        }
    });


    // document.addEventListener("mousewheel DOMMouseScroll", function (e) {
    //
    // }, { passive: false });

    // if (!(navigator.userAgent.indexOf("Firefox") > -1)) {
    //
    //     var $window = $(window);
    //     var scrollTime = 1;
    //     var scrollDistance = 550;
    //
    //     $window.on("mousewheel DOMMouseScroll", function(event){
    //
    //         // event.preventDefault();
    //
    //         var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    //         var scrollTop = $window.scrollTop();
    //         var finalScroll = scrollTop - parseInt(delta*scrollDistance);
    //         console.log('delta - ' + delta, 'scrollTop - ' + scrollTop, 'finalScroll - ' + finalScroll);
    //
    //         TweenMax.to($window, scrollTime, {
    //             scrollTo : { y: finalScroll, autoKill:true },
    //             ease: Power1.easeOut,
    //             overwrite: 5
    //         });
    //     });
    //
    // }


    if (device.mobile() || (device.tablet())) {

        var owl1 = $('.owl-carousel').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: true,
            mouseDrag: true,
            touchDrag: true,
            variableWidth: true,
            items:1,
            smartSpeed:900,
            responsive: {
                768: {
                    items:2
                },
                1200: {
                    items:3
                }
            }
        });
        owl1.owlCarousel();

    }

    $('.yc_gallery .slide .inner').mCustomScrollbar({
        theme:"dark",
        axis:"x",
        scrollButtons:{
            enable: true,
            scrollAmount: 500,
            scrollType: "stepped"
        },
        mouseWheel:{ enable: false }
    });


    if (!device.mobile()) {

        $(".parallax_scene_1").paroller({
            factor: -0.3,            // multiplier for scrolling speed and offset
            // factorXs: 0.1,           // multiplier for scrolling speed and offset
            type: 'foreground',     // background, foreground
            direction: 'vertical', // vertical, horizontal
            transition: 'none' // CSS transition
        });

    }
    $(".parallax_scene_2").paroller({
        factor: 0.5,
        type: 'foreground',
        direction: 'vertical',
        transition: 'transform 0.2s ease-in'
    });
    $(".lifehacks_item .waves_1").paroller({
        factor: 0.1,
        type: 'foreground',
        direction: 'horizontal',
        transition: 'transform 0.2s ease-in'
    });
    $(".s_bottom .waves").paroller({
        factor: -0.1,
        type: 'foreground',
        direction: 'horizontal',
        transition: 'transform 0.2s ease-in'
    });

    $(".certificates_item .waves_1").paroller({
        factor: -0.1,
        type: 'foreground',
        direction: 'horizontal',
        transition: 'transform 0.2s ease-in'
    });
    $(".certificates_item .waves_2").paroller({
        factor: 0.1,
        type: 'foreground',
        direction: 'horizontal',
        transition: 'transform 0.2s ease-in'
    });
    $(".certificates .waves_3").paroller({
        factor: 0.2,
        type: 'foreground',
        direction: 'horizontal',
        transition: 'transform 0.2s ease-in'
    });
    $(".what_include .waves").paroller({
        factor: 0.1,
        type: 'foreground',
        direction: 'horizontal',
        transition: 'transform 0.2s ease-in'
    });
    $(".cabinet .reviews .waves_1").paroller({
        factor: -0.4,
        type: 'foreground',
        direction: 'vertical',
        transition: 'transform 0.2s ease-in'
    });
    $(".page_news_inside .waves_1").paroller({
        factor: -0.4,
        type: 'foreground',
        direction: 'vertical',
        transition: 'transform 0.2s ease-in'
    });
    $(".page_news_inside .waves_2").paroller({
        factor: 0.1,
        type: 'foreground',
        direction: 'horizontal',
        transition: 'transform 0.2s ease-in'
    });

    $('.insta_imgs_wrap .outer').mCustomScrollbar({
        theme:"minimal-dark",
        setTop: '-83px'
    });


    $('#yc_datepicker_2').datepicker({
        onSelect: function(formattedDate, date) {
            // Send date data here
        }
    });

    $('.choose_date_top').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.01
    });

    $('.s_bottom').ripples({
        resolution: 512,
        dropRadius: 40,
        perturbance: 0.01
    });
    $('.main_footer').ripples({
        resolution: 512,
        dropRadius: 40,
        perturbance: 0.01
    });
    $('.page_contact_us .s_top').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.01
    });
    $('.cabinet .s_top').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.01
    });


    $('.reviews_more').on('click', function (e) {
        e.preventDefault();

        // Add reviews with AJAX here

        // Test adding reviews
        var reviewsArrTest;
        reviewsArrTest = $('.reviews_container').html();
        $('.reviews_container').append(reviewsArrTest);
        ///////////////////////////
    });

    $('.page_certificates .certificates_item').on('click', function () {
        $('.certificates_item').removeClass('active');
        $(this).addClass('active');
    });

    $(window).on('load', function () {

        $('.yacht_item').on('click', function () {
            $('.yacht_item').not(this).removeClass('active');
            $(this).toggleClass('active');
        });

        $('.yacht_item .choose_link').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        $('.yacht_item .gallery_link').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        var sectionYachtHeight = $('.choose_yacht').height() + 90;
        $('.choose_yacht').css('height', sectionYachtHeight);

        if (!device.mobile() && !device.tablet()) {

            $('.choose_yacht').ripples({
                resolution: 512,
                dropRadius: 20,
                perturbance: 0.01
            });

        }

        $('.yacht_item .show_more-open').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).closest('.yacht_item').toggleClass('open');
            $(this).closest('.yacht_item').find('.more_block').slideDown(0);
        });
        $('.yacht_item .show_more-close').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).closest('.yacht_item').toggleClass('open');
            $(this).closest('.yacht_item').find('.more_block').slideUp(0);
        });

    });


    $('.faqs_list li .question').on('click', function(e){
        e.preventDefault();
        var q = $(this),
            a = $(this).next('.answer');
        $('.faqs_list li .answer').not(a).slideUp(300);
        $('.faqs_list li .question').not(q).removeClass('active');
        if (q.hasClass('active')) {
            a.slideUp(300);
            q.removeClass('active');
        } else {
            a.slideDown(300);
            q.addClass('active');
        }
    });

    var lastScrollTop = 0;

    $(window).on('scroll', function () {
        var scrollVal = $(window).scrollTop();
        var transformRatio = 1.20 - scrollVal / 4000;
        var a = $('.parallax_scene_1 .inner').css('transform').split(',')[5];

        $('.s_top > .bg_image').css('transform', 'scale(' + transformRatio + ')');

        var myEfficientFn = debounce(function(scrollDelta) {

            var b;
            if(scrollDelta) {
                b = parseInt(a) - 120;
                $('.parallax_scene_1 .inner').css("transform" , 'translateY(' + b + 'px)');
            } else if (!scrollDelta) {
                b = parseInt(a) + 120;
                $('.parallax_scene_1 .inner').css("transform" , 'translateY(' + b + 'px)');
            }

        }, 1100);

        if (scrollVal > lastScrollTop){
            myEfficientFn(1);
        } else {
            myEfficientFn(0);
        }

        lastScrollTop = scrollVal;
    });

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }


    /*--water_wheel_carousel--*/
    var carousel = $("#yc_slider3d").waterwheelCarousel({
        flankingItems: 2,
        separation:200,
        sizeMultiplier:0.8,
        separationMultiplier:0.7,
        opacityMultiplier: 0.2,
        speed:250,
    });
    $('#prev').on('click', function (){
        carousel.prev();
        return false;
    });
    $('#next').on('click', function (){
        carousel.next();
        return false;
    });

    $("#yc_slider3d").swipe( {
        swipeStatus:function(event, phase, direction, distance)
        {
            if (phase=="end"){
                if(direction == "right") {
                    carousel.prev();
                }
                else if(direction =="left") {
                    carousel.next();
                }else { return false;}
            }
        },
        triggerOnTouchEnd:false,
        threshold:100
    });

});


