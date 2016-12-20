/**
 * Created by Жека on 27.07.2016.
 */
$(function() {
    $('.section-first-content .content-item').equalHeights();
    $('.faq-item').equalHeights();
    $('.timer').startTimer({
        onComplete: function(element){
            element.addClass('is-complete');
        },
        loop: true,
        loopInterval: 1,
    });
    $(".order-button").mPageScroll2id({
        scrollSpeed: 700,
        scrollEasing: "linear"
    });

    $( '#my-slider' ).sliderPro({
        width: 600,
        height: 600,
        arrows: false,
        buttons: false,
        fade: true,
        autoplayDelay: 4000,
        thumbnailWidth: 66,
        thumbnailHeight: 66,
        thumbnailsPosition: 'left'
    });
});
