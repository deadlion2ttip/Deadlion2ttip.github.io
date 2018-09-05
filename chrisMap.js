var chrismap = L.map('map').setView([44.0301797,-72.6857455], 7)


var CartoDB_Voyager = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(chrismap);



var myFace = L.icon({
    iconUrl: 'favicon.ico',
    iconSize: [25, 25],
    iconAnchor: [13, 13],
    popupAnchor: [0, -18],
    tooltipAnchor: [15, 0]

});

var myLocation = L.marker([44.491004, -73.186140]).addTo(chrismap).setIcon(myFace)

myLocation.bindTooltip('Chris Lives Here!').openTooltip()

myLocation.bindPopup('Chris lives in lovely Winooski Vt, a conveniently short commute from downtown Burlington and blocks from I-89.',{maxWidth:100})

function handleMeClick(){
    chrismap.setView([44.493004, -73.186140], 14)
}

myLocation.on('click', handleMeClick)