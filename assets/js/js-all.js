---
---
// <!-- Jquery -->
{% include bower_components/jquery/dist/jquery.min.js  %}
// Flexslider
// Photoswipe
{% include bower_components/photoswipe/dist/photoswipe.min.js  %}
{% include bower_components/photoswipe/dist/photoswipe-ui-default.min.js  %}
{% include js/photoswipe-gallery.js %}
// Pickadate
{% include bower_components/pickadate/lib/compressed/picker.js  %}
{% include bower_components/pickadate/lib/compressed/picker.date.js  %}
// <!-- Parsley Validator -->
{% include bower_components/parsleyjs/dist/parsley.min.js  %}
{% include js/confirmation-message.js  %}
// Custom - settings
{% include js/pickadate-settings.js  %}


mapboxgl.accessToken = "pk.eyJ1IjoiZGltZGV2IiwiYSI6ImNqc3lyd24zdTBlcmg0N3JuZzlwZDJhOWIifQ.8ZEtwLi2xwaP-4Zfl8-4Qw";
 
/* Map: This represents the map on the page. */
var map = new mapboxgl.Map({
container: "map",
style: "mapbox://styles/mapbox/light-v10",
zoom: 14.42,
center: [24.2068,35.4516]
});
 
map.on("load", function () {
/* Image: An image is loaded and added to the map. */
map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
if (error) throw error;
map.addImage("custom-marker", image);
/* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
map.addLayer({
id: "markers",
type: "symbol",
/* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
source: {
type: "geojson",
data: {
type: 'FeatureCollection',
features: [
{
type: 'Feature',
properties: {},
geometry: {
type: "Point",
coordinates: [24.2046, 35.4514]
}
}
]
}
},
layout: {
"icon-image": "custom-marker",
}
});
});
});