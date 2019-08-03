(function($) {

    var $slider = $('.s_top_slider');
    $slider.slick({
        dots: true,
        arrows: true,
        infinite: true
    });

    new WOW().init();
    
    $('.menu_close').click(function () {
        $('#top_nav_collapse').collapse('hide');
    });

    var $slider2 = $('.shops_slider');
    $slider2.slick({
        dots: false,
        arrows: true,
        prevArrow: ".shops_arrow_left",
        nextArrow: ".shops_arrow_right",
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    var button = $('.catalog_menu_btn');
    var menu = $('.catalog_menu');
    var menuLink = $('.catalog_menu ul>li>a');
    $('.catalog_menu_btn').click(function () {
        button.toggleClass("active");
        menu.toggleClass("active");
    });
    menuLink.click(function () {
        button.toggleClass("active");
        menu.toggleClass("active");
    });

    $('.product_spec .show_all').click(function () {
        $('.product_spec_list').toggleClass("active");
    });

    $( "#deliveryShop" ).selectmenu();
    $( "#sort_1" ).selectmenu();
    $( "#sort_2" ).selectmenu();
    var spinner1 = $( "#spinner1" ).spinner({
        min: 1
    });
    var spinner2 = $( "#spinner2" ).spinner({
        min: 1
    });

    $('.main_filter .show_all').click(function (e) {
        e.preventDefault();
        $(this).prev('.hide_block').toggleClass("active");
    });

    var priceSlider = $( "#slider-range" );
    var minPrice = 0;
    var maxPrice = 800000;
    var priceInputValues = [minPrice, maxPrice];
    $('#startPrice').val(minPrice);
    $('#endPrice').val(maxPrice);

    priceSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [ minPrice , maxPrice],
        slide: function( event, ui ) {
            $( "#startPrice" ).val( ui.values[ 0 ]);
            $( "#endPrice" ).val( ui.values[ 1 ]);
        }
    });

    $('#startPrice').on('change', function () {
        priceInputValues[0] = $(this).val();
        priceSlider.slider( "values", priceInputValues );
    });
    $('#endPrice').on('change', function () {
        priceInputValues[1] = $(this).val();
        priceSlider.slider( "values", priceInputValues );
    });

    $('#mobFilterBtn').magnificPopup({
        items: {
            src: '#mobFilter'
        },
        type: 'inline'
    });
    
    $('#mobFilter .btns').click(function () {
        $.magnificPopup.close();
    });

    $('.back_call').magnificPopup({
        items: {
            src: '#callPopup'
        },
        type: 'inline'
    });
    $('.call_popup .submit_btn').magnificPopup({
        items: {
            src: '#thankPopup'
        },
        type: 'inline'
    });
    $('.thank_btn').click(function () {
        $.magnificPopup.close();
    });

    $('.authorization_form .close_btn').click(function (e) {
        e.preventDefault();
        $('.authorization_form').fadeOut(300);
    });

    var $productsSlider = $('.products_slider');
    $productsSlider.slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(window).on('load', function () {

        var $photoSliderTop = $('.shops_photos_slider');
        var $photoSliderBottom = $('.shops_photos_slider_thumbs');

        $photoSliderTop.slick({
            asNavFor: $photoSliderBottom,
            dots: true,
            arrows: true,
            slidesToShow: 1,
            infinite: true
        });

        $photoSliderBottom.slick({
            asNavFor: $photoSliderTop,
            dots: false,
            arrows: false,
            slidesToShow: 6,
            infinite: true,
            speed: 0,
            // centerMode: true,
            variableWidth: true
        });

        $('.shop_photo').magnificPopup({
            items: {
                src: '#shopGalleryPopup'
            },
            type: 'inline',

            callbacks: {
                beforeOpen: function () {

                },
                open: function() {
                    // Will fire when this exact popup is opened
                    // this - is Magnific Popup object
                },
                close: function() {
                    // Will fire when popup is closed
                }
            }
        });
        $('.photos_close_btn').click(function () {
            $.magnificPopup.close();
        });

        var $photoSliderTop2 = $('.product_photos_big');
        var $photoSliderBottom2 = $('.product_photos_thumbs');

        $photoSliderTop2.slick({
            dots: false,
            arrows: false,
            slidesToShow: 1,
            infinite: true
        });

        $photoSliderBottom2.slick({
            asNavFor: $photoSliderTop2,
            dots: false,
            arrows: true,
            vertical: true,
            slidesToShow: 3,
            verticalSwiping: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        vertical: false,
                        verticalSwiping: false,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        vertical: false,
                        verticalSwiping: false,
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 2,
                        vertical: false,
                        verticalSwiping: false,
                    }
                }
            ]
        });
    });

})(jQuery);


