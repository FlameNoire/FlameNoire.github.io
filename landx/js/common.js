/**
 * Created by Жека on 14.10.2016.
 */

$(document).ready(function () {

    var touch = $('#touch-menu');
    var menu = $('.navigation');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 792 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('.sign-up').click(function () {
        $(this).closest('.offer').addClass('active').siblings().removeClass('active');
    })

});