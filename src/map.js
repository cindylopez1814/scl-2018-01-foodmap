let map;
let infowindow;

function initMap() {
  // Creamos un mapa con las coordenadas actuales
  navigator.geolocation.getCurrentPosition(function (pos) {

    lat = pos.coords.latitude;
    lon = pos.coords.longitude;

    let myLatlng = new google.maps.LatLng(lat, lon);

    let mapOptions = {
      center: myLatlng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.MAP
    };

    map = new google.maps.Map(document.getElementById('maps'), mapOptions);

    // Creamos el infowindow
    infowindow = new google.maps.InfoWindow();

    // Especificamos la localización, el radio y el tipo de lugares que queremos obtener
    let request = {
      location: myLatlng,
      radius: 5000,
      types: ['restaurant', 'bar', 'cafe'],
      fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
    };

    // Creamos el servicio PlaceService y enviamos la petición.
    let service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          crearMarcador(results[i]);
        }
      }
    });

    service.textSearch(request, callback);

  });
}

function crearMarcador(place) {
  // Creamos un marcador
  let marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  // Asignamos el evento click del marcador
  google.maps.event.addListener(marker, 'click', function () {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
