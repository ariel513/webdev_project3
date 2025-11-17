function myMap() {
  const mp = document.getElementById('googleMap');

  const center = { lat: 41.8781, lng: -87.6298 };

  const mapProp = new google.maps.Map(mp, {
    center: center,
    zoom: 12,
    mapTypeControl: false,
    streetViewControl: false,
  });

  const marker1 = new google.maps.Marker ({
    position: { lat: 41.8730, lng: -87.62379},
    map: mapProp,
    title: 'My School',
  }); 

  const marker2 = new google.maps.Marker ({
    position: { lat: 41.93266527819407, lng: -87.67908535092518 },
    map: mapProp,
    title: 'My Favorite Coffee Shop',
  })

  const marker3 = new google.maps.Marker ({
    position: { lat: 41.93530849899851, lng: -87.63151727791058 },
    map: mapProp,
    title: 'The Summer Hangout Spot',
  })
    
  const info1 = new google.maps.InfoWindow ({
    content: 'My School'
  });

  const info2 = new google.maps.InfoWindow ({
    content: 'My School'
  });

  const info3 = new google.maps.InfoWindow ({
    content: 'My School'
  });
  
  marker1.addListener('click', () => info1.open(mapProp, marker1));
  marker2.addListener('click', () => info2.open(mapProp, marker2));
  marker3.addListener('click', () => info3.open(mapProp, marker3));
}