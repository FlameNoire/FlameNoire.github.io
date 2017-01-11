/**
 * Created by Жека on 27.07.2016.
 */
(function($) {

    /*var isIE = document.body.style.msTouchAction !== undefined;

    if(!isIE) {

    } else {

    }*/

    $(".flexnav").flexNav({
        'calcItemWidths': true,
        'hoverIntent': true
    });

    $('ul.sf-menu').superfish();

    $('.slick-slider_1').slick({
        dots: true,
        infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 3,
        // centerMode: true,
        variableWidth: true,
        adaptiveHeight: true
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });

    $('.grid').masonry({
        // options...
        itemSelector: '.grid-item',
        columnWidth: 20
    });

    $('.camera_wrap').camera({
        fx: 'mosaicReverse',
        slicedCols: 18,
        slicedRows: 12
    });

})(jQuery);
