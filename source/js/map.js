ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map('map', {
        center: [59.938635, 30.323118],
        zoom: 16,
        controls: []
    }, (myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
          hintContent: 'УЛ. БОЛЬШАЯ КОНЮШЕННАЯ, 19/8'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/icons/icon-map.svg',
          iconImageSize: [56, 56],
          iconImageOffset: [-30, -40]
    })), {
      searchControlProvider: 'yandex#search'
    });

    myMap.geoObjects.add(myPlacemark);
  }
