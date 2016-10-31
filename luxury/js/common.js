/**
 * Created by Жека on 27.07.2016.
 */
$(document).ready(function() {

    var limit     = $(window).height()/3,
        backToTop = $('#back_to_top');

    paginationControls();
    scrollButton();
    clickEvents();
    paginationLinks();

    $(window).resize(function() {
        // var windowHeightNow = $(window).height();
        checkWidth();
        // $('.sidebar').css({ height: windowHeightNow });
    });

    $('.link__login').click(function (event) {
        event.preventDefault();
        $('.forms').fadeIn(1000);
        $('.login__form').addClass('active');
        $('.forms__close').show();
    });
    $('.link__register').click(function (event) {
        event.preventDefault();
        $('.forms').fadeIn(1000);
        $('.register__form').addClass('active');
        $('.forms__close').show();
    });
    $('.forms__close').click(function () {
        $('.forms').fadeOut(500);
        $('.login__form, .register__form').removeClass('active');
    });

    $('.menu__button-show').click(function () {
        $('.header__menu').addClass('active').fadeIn(1000);
    });

    $('.menu__button-hide').click(function () {
        $('.header__menu').fadeOut(1000, function () {
            $(this).removeClass('active');
        });
    });

    $('.sidebar__btn-show').click(function () {
        $('.sidebar')
            .css({
                top: '0',
                left: '0',
                bottom: '0'
                })
            .fadeIn("fast", function () {
            $(this).addClass('active');
            $('.sidebar__wrap').fadeIn(2000);
        });
        $(this).fadeOut(300);
    });
    $('.sidebar__btn-hide').click(function () {
        $('.sidebar__btn-show').fadeIn(500);
        $('.sidebar').fadeOut(500, function () {
            $(this).removeClass('active');
        }).dequeue();
        $('.sidebar__wrap').fadeOut(500);
        // $('.sidebar').css({ height: 'auto' });
    });

    $('.breadcrumbs__item').click(function () {
        $('.breadcrumbs__item').removeClass('active');
        $(this).addClass('active');
    });

    $('.footer__list .list__item').click(function (event) {
        event.preventDefault();
        $('.footer__list .list__item').removeClass('active');
        $(this).addClass('active');
    });

    $('.switch__item').on('click', function (e) {
        e.preventDefault();

        var clickedLink = $(e.target);

        clickedLink
            .addClass('active')
            .siblings()
            .removeClass('active');

        if (clickedLink.is('.switch__grid')) {
            $('.content__layout')
                .removeClass('content__layout-list')
                .addClass('content__layout-grid');
        } else {
            $('.content__layout')
                .removeClass('content__layout-grid')
                .addClass('content__layout-list');
        }
    });

    $('.footer__top-button').click(function () {
        $('.footer__top').slideToggle(1000);
        $('html, body').animate({
            scrollTop:$('#footer').position().top
        }, 1000);
    });

    function clickEvents() {
        var arr = $('.menu__item')
                        .add('.categories__list .list__item')
                        .add('.price_range__list .list__item');

        $(arr).on('click', function (e) {
            e.preventDefault();

            var item = $(this).closest('.item');

            $(item).addClass('active').siblings().removeClass('active');
        });
    }

    function paginationLinks() {
        var pagTopLinks = $('.pagination__top .links__item'),
            pagBottomLinks = $('.pagination__bottom .links__item');

        $(pagTopLinks).add(pagBottomLinks).click(function (e) {
            e.preventDefault();

            var index = $(this).index();

            pagTopLinks.eq(index).addClass('active').siblings().removeClass('active');
            pagBottomLinks.eq(index).addClass('active').siblings().removeClass('active');
            paginationControls();
        });
    }

    function scrollButton() {
        $(window).scroll(function () {
            if ( $(this).scrollTop() > limit ) {
                backToTop.fadeIn();
            } else {
                backToTop.fadeOut();
            }
        });

        backToTop.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1500);
            return false;
        });
    }

    function paginationControls() {
        $('.pagination__control');
        if($('.pagination__links .links__item:first-child').hasClass('active')) {
            $('.pagination__control-left').css("opacity","0");
        } else {
            $('.pagination__control-left').css("opacity","1");
        } if($('.pagination__links .links__item:last-child').hasClass('active')) {
            $('.pagination__control-right').css("opacity","0");
        } else {
            $('.pagination__control-right').css("opacity","1");
        }
    }

    function checkWidth() {
        var windowWidth = $(window).width();

        if ( windowWidth > 768 ) {
            $('.sidebar, .sidebar__wrap').css("display", "block");
        }

        if ( windowWidth > 480 ) {
            $('.footer__top').css("display", "block");
        } else {
            $('.footer__top').css("display", "none");
        }
    }
});
