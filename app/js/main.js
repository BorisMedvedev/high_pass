document.addEventListener("DOMContentLoaded", function () {
function contactsMap() {
    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map("contacts-map", {
        center: [55.75846806898367, 37.60108849999989],
        zoom: 16,
      });

      var myPlacemark = new ymaps.Placemark(
        [55.75846806898367, 37.60108849999989],
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "../images/icons/ellipse.svg",
          iconImageSize: [12, 12],
          iconImageOffset: [-3, -42],
        }
      );
      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable("scrollZoom");
    }
  }
  contactsMap();
});
