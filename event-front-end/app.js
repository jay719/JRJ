const queryParams = new URLSearchParams(window.location.search)
const marketId = queryParams.get('marketId')
const selectedEventsURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=QXdl7BXAndDxAk7CHW2yWArqSWGyHJRF&marketId=${marketId}`
const mymap = L.map('mapid').setView([39.73892, -104.9850], 11);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGltaXR0b2luZmluaXR5IiwiYSI6ImNrYmJzamt3dDA0YnQzMG1vbWh3NGIzaTEifQ.r2cKsjXwwnn6UiRRb_LHUA',
}).addTo(mymap);

fetch(selectedEventsURL)
    .then(response => response.json())
    .then(displayEvents);


function displayEvents(eventList) {
  const events = eventList._embedded.events
  events.forEach(event => {
    console.log(event._embedded.venues[0].location)
  });
}

var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
        
        const lat= e.latlng.lat;
        const lng= e.latlng.lng;
        const playerMarker = L.marker([lat, lng], {icon:playerIcon}).addTo(mymap);
}