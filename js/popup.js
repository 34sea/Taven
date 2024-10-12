function openPopup2() {
    document.getElementById('myModal').style.display = 'block';
}

function closePopup2() {
    document.getElementById('myModal').style.display = 'none';
}

function openPopup(imageSrc) {
    var overlay = document.getElementById('popupOverlay');
    var image = document.getElementById('popupImage');
    image.src = imageSrc;
    overlay.style.display = 'flex';
}

function closePopup() {
    var overlay = document.getElementById('popupOverlay');
    overlay.style.display = 'none';
}