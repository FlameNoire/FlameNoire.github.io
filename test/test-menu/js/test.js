/**
 * Created by Жека on 31.12.2016.
 */
(function($) {

    $('.item_link').click(function (e) {
        
        if( $(window).width() < 993 || device.tablet() || device.mobile() ) {
            e.preventDefault();
            $('.item_cont').not($(this).next()).slideUp(300);
            $(this).next().slideToggle();
        }

    });
    
    $(window).resize(function () {
        
    })
    
})(jQuery);