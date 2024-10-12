function openPopup2() {
    document.getElementById('myModal').style.display = 'block';
}

function closePopup2() {
    document.getElementById('myModal').style.display = 'none';
}

function openPopup3() {
    document.getElementById('meuModal2').style.display = 'block';
}

function closePopup3() {
    document.getElementById('meuModal2').style.display = 'none';
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



let r=true

function reservar(){
    document.querySelector('.formCar').style.display = 'none';
    document.querySelector('.card2Pu').style.display = 'flex';
    document.querySelector('.email').innerHTML = document.getElementById('email').value
}

