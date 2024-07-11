// Fungsi untuk menangani klik pada link
function handleLinkClick(event) {
    event.preventDefault();
    var lat = parseFloat(this.getAttribute('data-lat'));
    var lng = parseFloat(this.getAttribute('data-lng'));
    map.flyTo([lat, lng], 21);
}

// Daftar id link yang akan ditangani
var linkIds = [
    'gedung-lppm-lama-link',
    'parkir-lppm-link',
    'depan-lppm-link',
    'ruang-tamu-lorong-link',
    'ruang-pengembangan-link',
    'ruang-rapat-link',
    'bendahara-link',
    'sekretaris-link',
    'kabag-link',
    'pantry-link',
    'toilet-link'
];

// Menambahkan event listener untuk setiap link
linkIds.forEach(function(linkId) {
    document.getElementById(linkId).addEventListener('click', handleLinkClick);
});
