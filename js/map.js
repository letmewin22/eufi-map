function EufiSlivenecMain_InitMap() {
  let centerR = {lat: 50.0249495, lng: 14.3565167}

  /*init*/
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: centerR,
    styles: mapStyles,
  })

  const polygonCoordinates = [
    {
      lat: 50.024103436775455,
      lng: 14.353259615344246,
    },
    {
      lat: 50.026953728276474,
      lng: 14.353216700000008,
    },
    {
      lat: 50.02684344821773,
      lng: 14.35985961534425,
    },
    {
      lat: 50.02388286331638,
      lng: 14.35985961534425,
    },
  ]

  const marker = new google.maps.Marker({
    position: centerR,
    map,
  })

  const polygon = new google.maps.Polygon({
    map: map,
    paths: polygonCoordinates,
    strokeColor: 'gray',
    fillColor: 'gray',
    fillOpacity: 0.4,
    draggable: false,
    editable: true,
  })
}
