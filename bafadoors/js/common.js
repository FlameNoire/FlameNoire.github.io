(function($) {

    $('.collection_item').hoverIntent(function () {
        $('.collection_items').toggleClass('active');
        $(this).toggleClass('active');
    });
    // $('.mask_btn_outer').hoverIntent(function () {
    //     $('.s_top .img_mask').toggleClass('active');
    //     $(this).toggleClass('active');
    // });

    var wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       50,
            mobile:       false,
            live:         true
        }
    );
    wow.init();

    $('#collectionsGallery').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        infinite: false,
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
        infinite: false,
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
        // slidesToScroll: 2,
        swipeToSlide: true,
        variableWidth: true,
        focusOnSelect: true,
        infinite: false,
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
    })

})(jQuery);


