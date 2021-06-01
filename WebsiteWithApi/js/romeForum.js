let romeForum;

romeForum = L.map('map').setView([41.89262999631888, 12.486000915133749], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVpc2VuYmVyZzE5OTciLCJhIjoiY2tqaTl1cnJyMmdiNjMxc2N4aHh6cDlmMCJ9.meVA7GHc58KofjH_MwtqyQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGVpc2VuYmVyZzE5OTciLCJhIjoiY2tqaTl1cnJyMmdiNjMxc2N4aHh6cDlmMCJ9.meVA7GHc58KofjH_MwtqyQ'
}).addTo(romeForum);



let romeForumMarker = L.marker([41.89262999631888, 12.486000915133749]).addTo(romeForum)
romeForumMarker.bindPopup("Roman Forum").openPopup();