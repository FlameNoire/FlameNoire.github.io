/**
 * Created by Жека on 27.07.2016.
 */
(function($) {
    
     $('.reviews_carousel').slick({
        dots: true,
        infinite: true,
        variableWidth: true,
        adaptiveHeight: true,
        speed: 600
    });

    $('.call-order_btn').on('click', function(){
        $('.popup_form').fadeIn(300);
    });
    $('.close_popup_btn').on('click', function(){
        $('.popup_form').fadeOut(300);
    });
    
    $('.more-btn').on('click', function(event){
        event.stopPropagation();
        event.preventDefault();
        $('.hidden_text').slideToggle(300);
        
    });

    $('.faq-question').on('click', function(event){
        event.stopPropagation();
        event.preventDefault();
        var q = $(this);
        $(this).next('.faq-answer').slideToggle(400, function() {
            q.toggleClass('closed');
        });
    });

})(jQuery);

/*
// initMap() - функция инициализации карты
function initMap() {
    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    var centerLatLng = new google.maps.LatLng(50.4489, 30.4124);

    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 17,              // Зум по умолчанию. Возможные значения от 0 до 21
        scrollwheel: false
    };

    // Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: centerLatLng,
        title:" ЛиндоВояж - однодневные туры по Украине из Киева "
    });

// To add the marker to the map, call setMap();
    marker.setMap(map);

}

// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
*/







