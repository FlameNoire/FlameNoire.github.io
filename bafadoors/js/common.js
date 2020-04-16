(function($) {

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

    $('#collectionsGallery').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        fade: true,
        prevArrow: '.collections_gallery_prev',
        nextArrow: '.collections_gallery_next',
    });

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
        // centerMode: true,
        slidesToShow: 6,
        speed: 200,
        // slidesToScroll: 2,
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

    $('#popupFormBtn').magnificPopup({
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

    $('.catalog_filter a').click(function () {
        var catID = $(this).data("cat-id");
        console.log(catID);

        // $.ajax({
        //     url: "some.php",
        //     data: { catID: catID }
        // }).done(function( msg ) {
        //     alert( "Data Saved: " + msg );
        // });

        // catalogContainer.html(msg)

        // Animation test / Delete in the end
        $('.catalog_items').removeClass('animated');
        setTimeout(function () {
            $('.catalog_items').addClass('animated');
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


    $(".top_navigation li a").mPageScroll2id();

    $(window).on("scroll", function () {
        var st = $(document).scrollTop();

        if (st > 200) {
            $('#catalogCatFilter').addClass("stick");
        } else {
            $('#catalogCatFilter').removeClass("stick");
        }
    });

})(jQuery);


