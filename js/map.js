function initMap() {

    // let center = { lat: 50.2351875, lng: 14.0977488 };
    let supermarket1;
    let supermarket2;
    let supermarket3;
    let busStation = { lat: 50.2284181, lng: 14.0878689 };
    let trainStation = { lat: 50.2268606, lng: 14.0882095 };
    let hospital = { lat: 50.2348469, lng: 14.0820651 };
    let school = { lat: 50.229945, lng: 14.0866093 };
    let kindergarten;
    let theatre = { lat: 50.2301918, lng: 14.0823909 };


/*init*/
    let map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: theatre,
             styles: [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]
         });
    let infowindow = new google.maps.InfoWindow();
/*init*/ 
    
	/*coordinats */
    let requestMlyn = {
        query: '63PX+3X Слани, Чехия',
        fields: ['name', 'geometry', 'place_id'],

    };

    let requestKindergarten = {
        query: 'Palackého 570/1',
        fields: ['name', 'geometry'],
    };

    let requestSupermarket1 = {
        query: 'Ouvalova 427, 274 01 Slaný, Чехия',
        fields: ['name', 'geometry', 'place_id'],

    };

     let requestSupermarket2 = {
        query: 'Ouvalova 550, 274 01 Slaný, Чехия',
        fields: ['name', 'geometry', 'place_id'],

    };

    let requestSupermarket3 = {
        query: 'Ouvalova 1844, 274 01 Slaný, Чехия',
        fields: ['name', 'geometry', 'place_id'],

    };
    /*coordinats */


/*search coordinats and place markers*/
mlyn = new google.maps.places.PlacesService(map);

    mlyn.findPlaceFromQuery(requestMlyn, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarkerMlyn(results[i]);
            }
        }
    });

    function createMarkerMlyn(place) {
        let marker0 = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: "https://emotion-agency.com/drafts/eufi-icons/maps-and-flags.png"
        });
    }

/*********************************************************************************/


/*********************************************************************************/
    kindergarten = new google.maps.places.PlacesService(map);

    kindergarten.findPlaceFromQuery(requestKindergarten, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarkerKindergarten(results[i]);
            }
        }
    });

    function createMarkerKindergarten(place) {
        let marker8 = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: "https://emotion-agency.com/drafts/eufi-icons/kindergarten.png"
        });
        google.maps.event.addListener(marker8, 'click', function() {
            infowindow.setContent(`<img style='max-width: 140px' src="img/school.jpg"/> <p class:"map-p"><strong>Mateřská škola</strong></p>`);
            infowindow.open(map, this);
        });
    }

/*********************************************************************************/

    supermarket1 = new google.maps.places.PlacesService(map);

    supermarket1.findPlaceFromQuery(requestSupermarket1, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarkerSupermarket1(results[i]);
                console.log(results[i].geometry.location);
            }
        }
    });

    function createMarkerSupermarket1(place) {
        let marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: "https://emotion-agency.com/drafts/eufi-icons/shopping-cart.png", 
        });
        
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(`<img style='max-width: 120px' src="img/lidl.jpg" alt="" /> <p class:"map-p"><strong>LIDL</strong></p>`);
            infowindow.open(map, this);
        });

    }
/*********************************************************************************/

    supermarket2 = new google.maps.places.PlacesService(map);

    supermarket2.findPlaceFromQuery(requestSupermarket2, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarkerSupermarket2(results[i]);
                console.log(results[i].geometry.location);
            }
        }
    });

    function createMarkerSupermarket2(place) {
        let marker2 = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: "https://emotion-agency.com/drafts/eufi-icons/shopping-cart.png", 
        });
        
        google.maps.event.addListener(marker2, 'click', function() {
            infowindow.setContent(`<img style='max-width: 120px' src="img/penny-market.svg"/> <p class:"map-p"><strong>Penny Market</strong></p>`);
            infowindow.open(map, this);
        });

    }

/*********************************************************************************/
    supermarket3 = new google.maps.places.PlacesService(map);

    supermarket3.findPlaceFromQuery(requestSupermarket3, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarkerSupermarket3(results[i]);
                console.log(results[i].geometry.location);
            }
        }
    });

    function createMarkerSupermarket3(place) {
        let marker3 = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: "https://emotion-agency.com/drafts/eufi-icons/shopping-cart.png", 
        });
        
        google.maps.event.addListener(marker3, 'click', function() {
            infowindow.setContent(`<img style='max-width: 120px' src="img/koud.jpg" alt="" /> <p class:"map-p"><strong>Kaufland</strong></p>`);
            infowindow.open(map, this);
        });

    }
/*********************************************************************************/
/*search coordinats and place markers*/

    
    let marker4 = new google.maps.Marker({ position: trainStation, map: map, icon: "https://emotion-agency.com/drafts/eufi-icons/train-station.png" });
    let marker5 = new google.maps.Marker({ position: busStation, map: map, icon: "https://emotion-agency.com/drafts/eufi-icons/bus-station.png" });
    let marker6 = new google.maps.Marker({ position: hospital, map: map, icon: "https://emotion-agency.com/drafts/eufi-icons/hospital.png" });
    let marker7 = new google.maps.Marker({ position: school, map: map, icon: "https://emotion-agency.com/drafts/eufi-icons/school.png" });
    let marker9 = new google.maps.Marker({ position: theatre, map: map, icon: "https://emotion-agency.com/drafts/eufi-icons/theatre.png" });

    let Train = new google.maps.InfoWindow({
        content: `<img style='max-width: 160px' src="img/train.jpg"/> <p class:"map-p"><strong>Železnice nádraží Slaný</strong></p>`
    });

    let Bus = new google.maps.InfoWindow({
        content: `<img style='max-width: 160px' src="img/bus.jpg"/> <p class:"map-p"><strong>Autobusové nádraží Slaný</strong></p>`
    });

    let Hospital = new google.maps.InfoWindow({
        content: `<img style='max-width: 140px' src="img/hospital.jpg"/> <p class:"map-p"><strong>Nemocnice Slaný</strong></p>`
    });

    let School = new google.maps.InfoWindow({
        content: `<img style='max-width: 140px' src="img/school.jpg"/> <p class:"map-p"><strong>Zakladni skola</strong></p>`
    });
    let Theatre = new google.maps.InfoWindow({
        content: `<img style='max-width: 140px' src="img/theatre.jpeg"/> <p class:"map-p"><strong>Divadlo Slaný</strong></p>`
    });

   

    marker4.addListener("click", function() {
        Train.open(map, marker4);
    });

    marker5.addListener("click", function() {
        Bus.open(map, marker5);
    });

    marker6.addListener("click", function() {
        Hospital.open(map, marker6);
    });
    marker7.addListener("click", function() {
        School.open(map, marker7);
    });

    marker9.addListener("click", function() {
        Theatre.open(map, marker9);
    });

}