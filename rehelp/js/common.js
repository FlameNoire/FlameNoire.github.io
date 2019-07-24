(function($) {

    $('.row > .why_us_items').equalHeights();

    $('.faqs_list li .question').on('click', function(e){
        e.preventDefault();
        var q = $(this),
            a = $(this).next('.answer'),
            ctn = q.closest('li');
        $('.faqs_list li .answer').not(a).slideUp(300);
        $('.faqs_list li .question').not(q).removeClass('active');
        if (q.hasClass('active')) {
            a.slideUp(300);
            q.removeClass('active');
        } else {
            a.slideDown(300);
            q.addClass('active');
        }
        if (ctn.hasClass('active')) {
            $('.faqs_list li').removeClass('active');
        }
        else {
            $('.faqs_list li').removeClass('active');
            ctn.addClass('active');
        }
    });


    $('.roadmap_wrap').slick({
        infinite: true,
        arrows: true,
        prevArrow: '.roadmap-prev',
        nextArrow: '.roadmap-next',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    var wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       0,
            mobile:       true,
            live:         true
        }
    );
    wow.init();

    $(function() {
        $('.ico_countdown').countdown({
            date: "may 4, 2018 15:03:26",
            render: function(data) {
                $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
            }

        });
    });

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });


})(jQuery);
