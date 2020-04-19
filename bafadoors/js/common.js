(function($) {
    $("body").children().each(function() {
        document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ' ');
    });

    $('.collection_item').hoverIntent(function () {
        $('.collection_items').toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.mask_btn_outer').hoverIntent(function () {
        $('.s_top .img_mask .right').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.phone_input input').on('focus', function () {
        $('.phone_input').addClass('active');
    });
    $('.phone_input input').mask("+7(999) 999-99-99");

    var wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       50,
            mobile:       false,
            live:         true,
            resetAnimation: true
        }
    );
    wow.init();

    var collectionGallery = $('#collectionsGallery');

    collectionGallery.on('init', function(slick){
        setTimeout(function () {
            $('.slick-current').css("z-index", 1000);
            $('.slick-current').next('.slick-slide').css({
                'z-index': 999,
                'opacity': 1
            });
        },300);
    });

    collectionGallery.slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        infinite: false,
        fade: true,
        speed: 50,
        prevArrow: '.collections_gallery_prev',
        nextArrow: '.collections_gallery_next',
    });
    collectionGallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if(nextSlide > currentSlide) {
            console.log('go forward');
            console.log(slick.$slides.length);
            // if(nextSlide === slick.$slides.length - 1) {
            //     $('.slick-current').addClass("opacity_1");
            // }
            $('.slick-current').animate({
                opacity: 0
            }, 300)
        } else {
            console.log('go back');
            // if(nextSlide === slick.$slides.length - 2) {
            //     $('.slick-current').prev('.slick-slide').removeClass("opacity_1");
            // }
            $('.slick-current').addClass("opacity_1");
            $('.slick-current').prev('.slick-slide').animate({
                opacity: 1
            }, 300)
        }
    });
    collectionGallery.on('afterChange', function(slick){
        setTimeout(function () {
            $('.slick-current').css("z-index", 1000);
            $('.slick-current').next('.slick-slide').css({
                'z-index': 999,
                'opacity': 1
            }).removeClass("opacity_1");
        },100);
    });
    // $('.collections_gallery_prev').click(function (e) {
    //     e.preventDefault();
    //     collectionGallery.slick('slickPrev');
    // });
    // $('.collections_gallery_next').click(function (e) {
    //     e.preventDefault();
    //     collectionGallery.slick('slickNext');
    // });

    var $productSliderTop = $('#productGallery');
    var $productSliderBottom = $('.product_gallery_thumbs');

    $productSliderTop.slick({
        asNavFor: $productSliderBottom,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        fade: true,
        prevArrow: '.product_gallery_prev',
        nextArrow: '.product_gallery_next',
    });

    $productSliderBottom.slick({
        asNavFor: $productSliderTop,
        dots: false,
        arrows: false,
        slidesToShow: 6,
        speed: 200,
        swipeToSlide: true,
        variableWidth: true,
        focusOnSelect: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 6,
                }
            },
        ]
    });

    $('.navbar-toggler').click(function () {
        $('html').toggleClass('modal_open');
    });
    $('.mob_navigation a').click(function () {
        setTimeout(function () {
            $('html').toggleClass('modal_open');
            $('.navbar-collapse').removeClass('show');
            $('.navbar-toggler').addClass('collapsed');
        },300)
    });

    $('.popup_btn').magnificPopup({
        items: {
            src: '#popupForm'
        },
        type: 'inline',
        alignTop: true,
        callbacks: {
            open: function() {
                $('html').toggleClass('modal_open');
            },
            close: function() {
                $('html').toggleClass('modal_open');
            }
        }
    });

    $('#popupClose').click(function () {
        $.magnificPopup.close();
    });

    // Catalog Filter

    var catalogContainer = $('.catalog_items .container');

    $('.catalog_filter a').click(function (e) {
        e.preventDefault();
        var catID = $(this).data("cat-id"),
            menuItem = $(this).closest('li');
        $('.catalog_filter li').removeClass("active");
        menuItem.addClass("active");
        console.log(catID);

        // $.ajax({
        //     url: "some.php",
        //     data: { catID: catID }
        // }).done(function( msg ) {
        //     alert( "Data Saved: " + msg );
        // });

        // catalogContainer.html(msg)

        // Animation test
        $('.catalog_item').each(function () {
            $(this).removeClass('animated');
        });
        setTimeout(function () {
            $('.catalog_item').each(function () {
                $(this).addClass('animated');
            });
        }, 300)


    })

    // Catalog Pagination

    $('.pagination a').click(function () {
        var pageNum = $(this).html();
        console.log(pageNum);

        // $.ajax({
        //     url: "some.php",
        //     data: { pageNum: pageNum }
        // }).done(function( msg ) {
        //     alert( "Data Saved: " + msg );
        // });

        // catalogContainer.html(msg)

    });


    $(".top_navigation li a").mPageScroll2id({
        offset: 80
    });
    $(".mob_navigation li a").mPageScroll2id({
        offset: 75
    });

    var wW = $(window).width();
    var catalogFilterCtn = $('.page_catalog .top');
    if(catalogFilterCtn[0]) {
        var filterBlock = $('#catalogCatFilter');
        var top = filterBlock[0].getBoundingClientRect().top;
        catalogFilterCtn.css("height", catalogFilterCtn[0].offsetHeight);
        // console.log(top);

        $(window).on("scroll", function () {
            var st = $(document).scrollTop();
            // console.log(st);

            if (st > 200 && wW > 1580) {
                filterBlock.addClass("stick");
            } else if (st > 140 && wW < 1580) {
                filterBlock.addClass("stick");
            } else {
                filterBlock.removeClass("stick");
            }
        });
    }


})(jQuery);


