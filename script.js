// script.js

// Open lightbox when image is clicked
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.style.display = 'flex';
}

// Close lightbox when user clicks anywhere on it
document.getElementById('lightbox').onclick = function() {
    this.style.display = 'none';
}
