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
    icon: {
      url: 'images/Cartoon-Books-PNG-Clipart.png',
      scaledSize: new google.maps.Size(36,36)
    }
  }); 

  const marker2 = new google.maps.Marker ({
    position: { lat: 41.93266527819407, lng: -87.67908535092518 },
    map: mapProp,
    title: 'My Favorite Coffee Shop',
    icon: {
      url: 'images/Hot_Coffee_Cup_PNG_Clipart_Image.png',
      scaledSize: new google.maps.Size(28, 36)
    }
  });
 

  const marker3 = new google.maps.Marker ({
    position: { lat: 41.93530849899851, lng: -87.63151727791058 },
    map: mapProp,
    title: 'The Summer Hangout Spot',
    icon: {
      url: 'images/Beach_Ball_PNG_Clip_Art_Image-2055932628.png',
      scaledSize: new google.maps.Size(36,36)
    }
  });
    
  const info1 = document.getElementById('school-info');

  const info2 = document.getElementById('coffee-info');

  const info3 = document.getElementById('beach-info');
  
  const schoolInfo = new google.maps.InfoWindow ({
    content: info1.innerHTML
  });

  const coffeeInfo = new google.maps.InfoWindow ({
    content: info2.innerHTML
  });

  const beachInfo = new google.maps.InfoWindow ({
    content: info3.innerHTML
  });

  marker1.addListener('click', () => schoolInfo.open(mapProp, marker1));
  marker2.addListener('click', () => coffeeInfo.open(mapProp, marker2));
  marker3.addListener('click', () => beachInfo.open(mapProp, marker3));

  document.getElementById("questionButton").addEventListener("click", function() {
    alert("If you have questions, contact me at: \nastvishor@cps.edu");
  });
}
