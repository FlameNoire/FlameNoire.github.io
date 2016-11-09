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
    });

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $(".forms").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        });
        return false;
    });
    
//    if($.browser.msie) { // Условие для вызова только в IE
//		$("form").find("input[type='text']").each(function() {
//			var tp = $(this).attr("placeholder");
//			$(this).attr('value',tp).css('color','#ccc');
//		}).focusin(function() {
//			var val = $(this).attr('placeholder');
//			if($(this).val() == val) {
//				$(this).attr('value','').css('color','#303030');
//			}
//		}).focusout(function() {
//			var val = $(this).attr('placeholder');
//			if($(this).val() == "") {
//				$(this).attr('value', val).css('color','#ccc');
//			}
//		});
//
//		/* Protected send form */
//		$("form").submit(function() {
//			$(this).find("input[type='text']").each(function() {
//				var val = $(this).attr('placeholder');
//				if($(this).val() == val) {
//					$(this).attr('value','');
//				}
//			})
//		});
//	}

});