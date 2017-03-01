$(document).ready(function() {

    $('#up').click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('ul.region-tab-list li a').on('click',function(){
        $('ul.region-tab-list li.active').removeClass('active');
        $(this).parent('li').addClass('active');

        var index = $('ul.region-tab-list li a').index(this);

        $('.region-tab-content.active').removeClass('active');
        $('.region-tab-content').eq(index).addClass('active');

        return false;
    });

    /* Works slider*/

    $("#monitors2").slick({
        arrows:true,
        autoplay:true,
        autoplaySpeed:4000,
        dots:false,
        speed:500,
        infinite:true,
        slidesToShow:1,
        fade: true,
        nextArrow:'<a class="slick-arrow slick-next"></a>',
        prevArrow:'<a class="slick-arrow slick-prev"></a>'
    });

    ////////////////////////////////////////////////

    /* Works slider PopUp */

    $('a.photos').magnificPopup({
        type: 'image',
        image: {
            verticalFit: false,
        },
        gallery: {
            enabled: true,
            tCounter: '%curr% из %total%'
        }
    });

    /////////////////////////////////////////////////

    // Maintenance slider
    $('.me-slider').slick({
        arrows:true,
        autoplay:true,
        autoplaySpeed:6000,
        pauseOnHover:true,
        speed:900,
        nextArrow:'<a class="slick-next"></a>',
        prevArrow:'<a class="slick-prev"></a>'
    });
    ///////////////////////////////////////////////////

    // Context cases slider
    $("#cases").slick({
        arrows:true,
        autoplay:false,
        dots:false,
        speed:400,
        infinite:true,
        nextArrow:'<a class="slick-next"></a>',
        prevArrow:'<a class="slick-prev"></a>',
        adaptiveHeight:true
    });
    /////////////////////////////////////////////////////

    // Our Clients Slider

    $("#clients").slick({
        autoplay:true,
        autoplaySpeed:4000,
        dots:false,
        speed:500,
        infinite:true,
        slidesToShow:3,
        slidesToScroll:3,
        arrows: true,
        nextArrow:'<a class="slick-next"></a>',
        prevArrow:'<a class="slick-prev"></a>',
        responsive: [
            {
                breakpoint:1100,
                settings:{
                    centerMode:false,
                    slidesToShow:2,
                    slidesToScroll:2
                }
            },
            {
                breakpoint:740,
                settings:{
                    centerMode:false,
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ]
    });
    //////////////////////////////////////////////////////////////////

    // How we work, way animation

    $('.how .list .item').hover(
        function() {
            clearTimeout($.data(this,'timer'));
            $('.text',this).stop(true,true).fadeIn();
            $(this).parent('.list').find('.item .icon').removeClass('pulsar');
            $(this).next().next().find('.icon').addClass('pulsar');
        },
        function() {
            $.data(this,'timer', setTimeout($.proxy(function() {
                $('.text',this).stop(true,true).hide();
            }, this), 100));
        }
    );

    /////////////////////////////////////////////////////

    // Блок с тарифами
    $('.tariff-item').mouseover(function() {
        $('.price-t').hide();
        $('.more-t').hide();
        $('.price-t', this).css('display','block');
        $('.more-t', this).css('display','block');

        $(this).addClass('bounce');
    });
    $('.tariff-item').mouseleave(function() {
        $(this).removeClass('bounce');
    });

    // Seo FAQs

    $('.seo-faq-question').on('click', function(event){
        event.stopPropagation();
        event.preventDefault();
        var q = $(this);
        $(this).next('.seo-faq-answer').slideToggle(400, function() {
            q.toggleClass('opened');
        });
    });

    ////////////////////////////////////////

    // Audit Descr More
    $('.desc .show-text a').click(function() {
        $('.desc .text-more').slideToggle();
        return false;
    });
    /////////////////////////////////////////

    $('a.goto').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
    $(document).on('click', function(event) {
        var elem = $('.menu.opened');
        if (!elem.is(event.target) && elem.has(event.target).length === 0) {
            elem.removeClass('opened');
            elem.prev('.menu-btn').removeClass('active');
        }
    });
    $('form .form__input').keyup(function() {
        var id = $(this).attr('id');
        var label = $('p label[for="' + id + '"]');
        label.fadeIn();
        label.fadeOut();
        $(document).on('change input', function(e) {
            if (document.getElementById('' + id + '').value !== '') {
                var label = $('label[for="' + id + '"]');
                label.fadeIn();
            } else {
                var label = $('label[for="' + id + '"]');
                if (!label.is(e.target) && label.has(e.target).length === 0) {
                    label.fadeOut();
                }
            }
        });
    });
    $('.menu-btn').on('click', function() {
        $(this).toggleClass('active');
        $('.menu').toggleClass('opened');
        return false;
    });
    $('.menu-left-btn').on('click', function() {
        $(this).toggleClass('active');
        $('.menu-left-ul').toggleClass('opened');
        if ($('.menu-left-ul').hasClass('opened')) {
            var menu_left_height = $(window).height() - 50 - $('.menu-left-title').height();
            if ($('.menu-left-ul').height() > menu_left_height) $('.menu-left-ul').css('height', menu_left_height + 'px');
        }
        return false;
    });
    $(".formmodal").magnificPopup({
        type:'inline'
    });
    $("#context_help").validate({
        rules: {
            phone: {
                required: true
            },
            money: {
                required: true
            },
            goods: {
                required: true
            }
        },
        messages: {
            phone: {
                required: "нужно заполнить"
            },
            money: {
                required: "нужно заполнить"
            },
            goods: {
                required: "нужно заполнить"
            }
        }
    });
    $("#regseoform").validate({
        rules: {
            email: "required"
        },
        messages: {
            email: "Укажите свой телефон или email"
        },
        submitHandler: function(form) {
            $.post('/forms/regseo.php', $(form).serialize(), function(data) {
                if(data) {
                    $.magnificPopup.close();
                    $.magnificPopup.open({
                        items: {
                            src: '<div class="modal modal-result">' + data + '</div>',
                            type: 'inline'
                        }
                    });
                    $(form).trigger('reset');
                }
            });
        }
    });

    $('a.color_box_inline').magnificPopup({
        type: 'inline',
        overflowY: 'scroll'
    });
    
    $('.message-result .msg-close').on('click', function() {
        $(this).parent().hide();
        return false;
    });

    $("#context-table td").not(".notselect").mouseover(function() {
        $("#context-table td").removeClass("tdselect");
        var tds = $(this).parent().find("td");
        index = $.inArray(this, tds);
        $("#context-table td:nth-of-type(" + (index + 1) + ")").addClass("tdselect");
    });
    $("#crowd-table td").not(".notselect").mouseover(function() {
        $("#crowd-table td").removeClass("tdselect");
        var tds = $(this).parent().find("td");
        index = $.inArray(this, tds);
        $("#crowd-table td:nth-of-type(" + (index + 1) + ")").addClass("tdselect");
    });

    $('.menu-xs li a').on('click', function() {
        var n = $(this).data('td');
        var table = $(this).parents('table');
        table.find('td').hide().removeClass('tdselect');
        table.find('td:nth-child(1)').show();
        table.find('td:nth-child(' + n + ')').show().addClass('tdselect');
        $(this).parents('ul').find('li').removeClass('active');
        $(this).parent('li').addClass('active');
        return false;
    });
    
    $('.faqs p.faq-a').hide();
    $('.faqs p.faq-a').eq(0).show();
    $('.faqs p.faq-q').eq(0).addClass('active');
    $('.faqs p.faq-q a').on('click', function() {
        $('.faqs p.faq-a').hide();
        $('.faqs p.faq-q').removeClass('active');
        $(this).parent('.faq-q').next('.faq-a').show();
        $(this).parent('.faq-q').addClass('active');
        return false;
    });

    onScroll();
});
$(window).load(function() {
    changeHeight();
    tabelFixedHeader(1);
    crowdTabelFixedHeader(1);
});
$(window).resize(function() {
    changeHeight();
    onScroll();
    tabelFixedHeader(1);
    crowdTabelFixedHeader(1);
});
$(document).scroll(function() {
    if ($(document).scrollTop() > 0.5 * $(window).height()) {
        $('#up').show();
    } else {
        $('#up').hide();
    }
    onScroll();
    tabelFixedHeader(0);
    crowdTabelFixedHeader(0);
});

function changeHeight() {
    var h_menuleft = $('.menu-left15').height();
    var h_header = $('.header-back').height();
    var h_window = $(window).height();
    if (h_menuleft + h_header > h_window) $('.menu-left15.floating').css('position', 'absolute');
    else $('.menu-left15.floating').css('position', 'fixed');
    if ($('.footer:not(.copy)').length > 0) {
        if (h_menuleft + h_header > h_window) h_window = h_menuleft + h_header;
        var footer_bottom_space = h_window - $('.footer:not(.copy)').position().top - 48 - $('.footer:not(.copy)').height() - $('.footer.copy').height();
        var footer_margin_top = $('.footer:not(.copy)').css('margin-top');
        if (footer_bottom_space > 50) footer_bottom_space = footer_bottom_space + 'px';
        else footer_bottom_space = footer_margin_top;
        $('.footer:not(.copy)').css('margin-top', footer_bottom_space);
    }
}

function onScroll() {
    var scroll_top = $(document).scrollTop();
    var d = $(window).height() / 6;
    var id;
    $('[data-scroll]').removeClass('active');
    $('[data-onscroll="1"]').each(function() {
        if (scroll_top >= $(this).offset().top - d) {
            id = $(this).attr('id');
        }
    });
    $('[data-scroll="' + id + '"]').addClass('active');
    if (scroll_top > 60 && $(window).width() > 750) {
        $('body').addClass('sticky-header');
    } else {
        $('body').removeClass('sticky-header');
    }
}

function tabelFixedHeader(recount) {
    if ($('.table-header-fixed').length > 0) {
        var scroll = $(window).scrollTop();
        var table_top = $('.table-header-fixed').offset().top;
        var table_bottom = $('.table-header-fixed').height() + $('.table-header-fixed').offset().top;
        if (scroll > table_top + 50 && scroll < table_bottom - 200) {
            if (!$('.table-header-fixed thead tr').hasClass('fixed') || recount) {
                $('.table-header-fixed thead tr').addClass('fixed');
                var td_height = 0;
                $('.table-header-fixed thead tr .tdfixed').each(function() {
                    var ptd = $(this).parent('td');
                    $(this).css('left', (ptd.offset().left - 1) + 'px');
                    $(this).css('width', ptd.width() + 'px');
                    if ($(this).height() > td_height) td_height = $(this).height();
                });
                $('.table-header-fixed thead tr .tdfixed').css('height', td_height + 'px');
            }
        } else {
            $('.table-header-fixed thead tr').removeClass('fixed');
            $('.table-header-fixed thead tr .tdfixed').css('height', 'auto');
        }
    }
}
function crowdTabelFixedHeader(recount) {
    if ($('.crowd-table-header-fixed').length > 0) {
        var scroll = $(window).scrollTop();
        var table_top = $('.crowd-table-header-fixed').offset().top;
        var table_bottom = $('.crowd-table-header-fixed').height() + $('.crowd-table-header-fixed').offset().top;
        if (scroll > table_top + 50 && scroll < table_bottom - 200) {
            if (!$('.crowd-table-header-fixed thead tr').hasClass('fixed') || recount) {
                $('.crowd-table-header-fixed thead tr').addClass('fixed');
                var td_height = 0;
                $('.crowd-table-header-fixed thead tr .tdfixed').each(function() {
                    var ptd = $(this).parent('td');
                    $(this).css('left', (ptd.offset().left - 1) + 'px');
                    $(this).css('width', ptd.width() + 'px');
                    if ($(this).height() > td_height) td_height = $(this).height();
                });
                $('.crowd-table-header-fixed thead tr .tdfixed').css('height', td_height + 'px');
            }
        } else {
            $('.crowd-table-header-fixed thead tr').removeClass('fixed');
            $('.crowd-table-header-fixed thead tr .tdfixed').css('height', 'auto');
        }
    }
}
function modalIframeHeight(elem, minHeight) {
    minHeight = minHeight || 0;
    var iframe_height = $(elem).find('.mfp-iframe').height();
    if (iframe_height > 0) {
        var iframe_height_new = $(window).height() - 50;
        if (iframe_height_new < minHeight) iframe_height_new = minHeight;
        $(elem).find('.mfp-iframe').height(iframe_height_new);
        $(elem).parents('.mfp-iframe-holder').css('height', 'auto');
    }
}
