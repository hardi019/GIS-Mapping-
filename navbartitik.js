let startPoint, endPoint;
let routingControl = null;

function setMulaiPoint() {
    map.once('click', function(e) {
        if (startPoint) {
            map.removeLayer(startPoint);
        }
        startPoint = L.marker(e.latlng).addTo(map).bindPopup("Titik Awal").openPopup();
        calculateRoute();
    });
}

function setAkhirPoint() {
    map.once('click', function(e) {
        if (endPoint) {
            map.removeLayer(endPoint);
        }
        endPoint = L.marker(e.latlng).addTo(map).bindPopup("Titik Akhir").openPopup();
        calculateRoute();
    });
}

function calculateRoute() {
    if (startPoint && endPoint) {
        if (routingControl) {
            map.removeControl(routingControl);
        }
        routingControl = L.Routing.control({
            waypoints: [
                startPoint.getLatLng(),
                endPoint.getLatLng()
            ],
            createMarker: function() { return null; }, // Prevent double markers
            routeWhileDragging: true
        }).addTo(map);
    }
}