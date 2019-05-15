"use strict";

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

var url = "https://maps.googleapis.com/maps/api/js?key=" + config.API_KEY + "&callback=initMap";
var script_tag = document.createElement("script");
script_tag.setAttribute("src", url);
script_tag.async = true;
script_tag.defer = true;

document.body.appendChild(script_tag);
