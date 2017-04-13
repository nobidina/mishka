function initMap() {
  var coords = {lat: 59.936143, lng: 30.321878};

  var mapElem = document.querySelector('.map');
  mapElem.classList.remove('map_no-js');

  var map = new google.maps.Map(mapElem, {
    center: coords,
    zoom: 17,
    disableDefaultUI: true
  });

  var image = 'img/map-pin.png';

  var marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon: image,
    title: 'Mishka'
  });

  window.addEventListener('resize', function() {
    map.setCenter(coords);
  });

}
