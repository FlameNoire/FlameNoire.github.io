/**
 * Created by Жека on 27.07.2016.
 */
(function($) {
    
    $('.countdown').syotimer({
        year: 2017,
        month: 2,
        day: 24,
        hour: 1,
        minute: 25,
        lang: 'rus'
    });

    $('.more .open-btn').click(function (e) {
        e.preventDefault();
        $('.reviews').addClass("opened");
    });
    $('.more .close-btn').click(function (e) {
        e.preventDefault();
        $('.reviews').removeClass("opened");
    });
})(jQuery);
