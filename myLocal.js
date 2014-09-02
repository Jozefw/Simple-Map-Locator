
window.onload = showMap;

var map;

function showMap(coords) {


	var googleLatAndLong = new google.maps.LatLng(latitude, longitude);

	var mapOptions = {
		zoom: 10,
		center: googleLatAndLong,
		mapTypeId: google.maps.mapTypeId.ROADMAP
	};

var mapDiv = document.getElementById("map");
map = new google.maps.Map(mapDiv, mapOptions);
}

function displayLocation(position) {
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;
var div = document.getElementById("location");
div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;

showMap(position.coords);