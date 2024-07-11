function setStartPoint(latlng) {
    if (startPoint) {
        map.removeLayer(startPoint);
    }
    startPoint = L.marker(latlng).addTo(map)
        .bindPopup("Titik Awal")
        .openPopup()
        .on('popupopen', function () {
            this._popup.setContent("Titik Awal<br>Latitude: " + latlng[0] + "<br>Longitude: " + latlng[1]);
        });
    calculateRoute();
}

function setEndPoint(latlng) {
    if (endPoint) {
        map.removeLayer(endPoint);
    }
    endPoint = L.marker(latlng).addTo(map)
        .bindPopup("Titik Akhir")
        .openPopup()
        .on('popupopen', function () {
            this._popup.setContent("Titik Akhir<br>Latitude: " + latlng[0] + "<br>Longitude: " + latlng[1]);
        });
    calculateRoute();
}
