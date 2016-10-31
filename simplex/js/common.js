/**
 * Created by Жека on 11.06.2016.
 */
$(document).ready(function() {

    function fullHeight(){
        var winHeight = $(window).height();
        $('.header_s').height(winHeight);
    };
    fullHeight();
    $(window).resize(function(){
        fullHeight();
    });

});
