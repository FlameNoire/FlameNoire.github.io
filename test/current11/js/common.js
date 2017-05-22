(function($) {

    var checkWidth = $(window).width();

    if ( checkWidth < 992 ) {
        $('.nav-item.dropdown > .dropdown-toggle').attr('data-toggle','dropdown');
    }

    $('.sub_dropdown').click(function (e) {
        e.preventDefault();
        var item = $(this);
        $(item).next().slideDown();
    });

    $('.similar_goods_slider').owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });

    $('.pop_goods_slider').owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });

})(jQuery);

$(window).resize(function () {
    var checkWidth = $(window).width();
    if ( checkWidth < 992 ) {
        $('.nav-item.dropdown > .dropdown-toggle').attr('data-toggle','dropdown');
    } else {
        $('.nav-item.dropdown > .dropdown-toggle').attr('data-toggle','');
        $('.nav-item.dropdown').removeClass("show");
        $('.navbar-collapse.collapse').removeClass("show");
    }
});