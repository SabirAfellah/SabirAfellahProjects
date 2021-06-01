let romeBasilica;

romeBasilica = L.map('map').setView([41.89792192525219, 12.499609017768226], 24);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVpc2VuYmVyZzE5OTciLCJhIjoiY2tqaTl1cnJyMmdiNjMxc2N4aHh6cDlmMCJ9.meVA7GHc58KofjH_MwtqyQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 24,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGVpc2VuYmVyZzE5OTciLCJhIjoiY2tqaTl1cnJyMmdiNjMxc2N4aHh6cDlmMCJ9.meVA7GHc58KofjH_MwtqyQ'
}).addTo(romeBasilica);



let romeBasilicaMarker = L.marker([41.89792192525219, 12.499609017768226]).addTo(romeBasilica)
romeBasilicaMarker.bindPopup("Basilica Di Santa Maria").openPopup();