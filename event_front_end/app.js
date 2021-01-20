console.log("JavaScript Working!")

const cityParams = new URLSearchParams(window.location.search)
const marketId = cityParams.get('marketId')

const selectedEventsURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=QXdl7BXAndDxAk7CHW2yWArqSWGyHJRF&marketId=${marketId}`

fetch(selectedEventsURL)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(events)

"https://app.ticketmaster.com/discovery/v2/events.json?apikey=QXdl7BXAndDxAk7CHW2yWArqSWGyHJRF&marketId=1"
"https://app.ticketmaster.com/discovery/v2/events.json?apikey=QXdl7BXAndDxAk7CHW2yWArqSWGyHJRF&marketId=1"


// CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled."


// const cityDropdown = document.querySelector('#city-dropdown')
// fetch("http://localhost:3000/events")
//     .then(response => response.json())
//     .then(events => {
//         events.forEach(event => {
//             const option = document.createElement('option')
//             option.value = event.id
//             option.textContent = event.name
//             eventDropdown.appendChild(option)
//         })
//     })