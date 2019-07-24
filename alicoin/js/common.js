(function($) {

    $(window).on("load",function(){
        $(".top_navigation li a").mPageScroll2id();
    });

    $('.login_modal_btn').magnificPopup({
        items: {
            src: '#login_form',
            type: 'inline'
        }
    });
    $('.reg_modal_btn').magnificPopup({
        items: {
            src: '#registration_form',
            type: 'inline'
        }
    });

    $('.navbar-toggle').click(function() {
        $('.main_header').toggleClass("opened");
    });
    $('.btn_go_up').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });

    var wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       0,
            mobile:       false,
            live:         true
        }
    );
    wow.init();

    $(function() {
        $('#ico_countdown_1').countdown({
            date: "may 4, 2018 15:03:26",
            render: function(data) {
                $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>Days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>Hours</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>Minutes</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>Seconds </span></div>");
            }

        });
    });

    $(function() {
        var expiresDate = "mar 28, 2018 15:03:26";
        $('#ico_countdown_2').countdown({
            date: expiresDate,
            render: function(data) {
                $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>Days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>Hours</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>Minutes</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>Seconds </span></div>");
            }

        });


        var startDate = Date.parse("dec 28, 2017 15:03:26"),
            expiresDate2 = Date.parse(expiresDate),
            dateDelta = expiresDate2 - startDate,
            dateDelta2,
            progressValue;

        $('#ico_countdown_2').bind("DOMSubtreeModified",function(){
            var dateNow = new Date();

            dateNow = dateNow.getTime();
            dateDelta2 = dateNow - startDate;
            progressValue = dateDelta2 / dateDelta * 100;
            progressValue = parseFloat(progressValue).toFixed(4);

            $( ".ico_countdown_progress span" ).css( "width", progressValue + '%');
        });
    });


    $('.dashboard_menu .dropdown_toggle').on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var dropToggle = $(this),
            dropMenu = $(this).next('.dropdown_menu');
        $('.dashboard_menu .dropdown_menu').not(dropMenu).slideUp(300);
        $('.dashboard_menu .dropdown_toggle').not(dropToggle).removeClass('active');
        if (dropToggle.hasClass('active')) {
            dropMenu.slideUp(300);
            dropToggle.removeClass('active');
        } else {
            dropMenu.slideDown(300);
            dropToggle.addClass('active');
        }
    });

    $('.add_ticket_btn').on('click', function (e) {
        e.preventDefault();
        $('.add_ticket_form').fadeIn(300);
    });
    $('.add_ticket_form .buttons').on('click', function (e) {
        e.preventDefault();
        $('.add_ticket_form').fadeOut(300);
    });

    $('.landing_interest_wrap').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.custom_table').mCustomScrollbar({
        theme: "dark-2"
    });

    $('.wallet_tab_list li a').on('click',function(){
        var currTab = $(this).parent('li');
        $('.wallet_tab_list li.active').not(currTab).removeClass('active');
        currTab.toggleClass('active');

        var index = $('.wallet_tab_list li a').index(this);

        var currTabContent = $('.wallet_tab_content').eq(index);
        $('.wallet_tab_content').not(currTabContent).slideUp(200);
        currTabContent.slideToggle(300);

        return false;
    });

    $('.copy_btn').on('click', function (e) {
        e.preventDefault();
        var targetText = $(this).next('input');
        targetText.select();
        document.execCommand("Copy");
    });


    var videoWrap = document.getElementById("alicoinVideos");
    $('.video_previews_item .title, .video_previews_item .item_img').on('click', function (e) {
        e.preventDefault();
        var videoPath = $(this).siblings('.video_link').children('input').val();

        videoWrap.src = videoPath;
        videoWrap.load();
    });


    var walletsTitleCordinate_1 = $('.wallet_block .wallet_coin').position().left,
        walletsTitleCordinate_2 = $('.wallet_block .wallet_name').position().left,
        walletsTitleCordinate_3 = $('.wallet_block .wallet_acc').position().left;

    $('.abs_title.title_coin').css('left', walletsTitleCordinate_1 + 25);
    $('.abs_title.title_name').css('left', walletsTitleCordinate_2 + 25);
    $('.abs_title.title_acc').css('left', walletsTitleCordinate_3 + 25);


})(jQuery);


