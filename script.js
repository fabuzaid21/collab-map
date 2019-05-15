"use strict";

// TODO:
// 1) Add Search bar, so user can type in query
// 2) Add list interface:
//    * create list
//    * share list
//    * delete list
//    * list members
// 3) Click on place and add to list
// 4) Share list logic
// 5) Google Account support
// 6) Lists should be stored on backend service
// 7) Add autocomplete for search

var map;
var service;
var infowindow;

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function initMap() {
  var sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
    document.getElementById('map'), {center: sydney, zoom: 15});

  var request = {
    query: 'Museum of Contemporary Art Australia',
    fields: ['name', 'geometry'],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

var url = "https://maps.googleapis.com/maps/api/js?key=" + config.API_KEY + "&libraries=places&callback=initMap";
var script_tag = document.createElement("script");
script_tag.setAttribute("src", url);
script_tag.async = true;
script_tag.defer = true;

document.body.appendChild(script_tag);
