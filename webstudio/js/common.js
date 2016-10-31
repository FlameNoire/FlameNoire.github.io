/**
 * Created by Жека on 14.10.2016.
 */

$(document).ready(function () {

    $('#number-1').animateNumber({
        number: 518,
        easing: 'easeInQuad'
    }, 2000);
    $('#number-2').animateNumber({
        number: 345,
        easing: 'easeInQuad'
    }, 2000);
    $('#number-3').animateNumber({
        number: 165,
        easing: 'easeInQuad'
    }, 2000);

    $('.feature-element').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
    
});