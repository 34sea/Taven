let menuGaleria =  window.document.querySelector(".galeriaFotos")
let menuGaleriaSpan = window.document.querySelectorAll(".menuGaleria span")

let gal = {
    "all": {
        "img1": "./img/casa_tipo_2/f1.jpg",
        "img2": "./img/casa_tipo_2/f2.jpg",
        "img3": "./img/casa_tipo_2/f3.jpg",
        "img4": "./img/casa_tipo_2/f4.jpg",
        "img5": "./img/casa_tipo_2/f5.jpg",
        "img6": "./img/Inhamizua/Inhamizua.jpg",
        "img7": "./img/Mobeira/Mobeira.jpg",
        "img8": "./img/Ponta_ge/Ponta_gea.jpg",
        "img9": "./img/Praia_nova/Praia_nova.jpg"
    },
    "inhamizua": {
        "img1": "./img/Inhamizua/Inhamizua.jpg"
    },
    "mobeira": {
        "img1": "./img/Mobeira/Mobeira.jpg"
    },
    "pontaGea": {
        "img1": "./img/Ponta_ge/Ponta_gea.jpg"
    },
    "praiaNova": {
        "img1": "./img/Praia_nova/Praia_nova.jpg"
    },
    "casa": {
        "img1": "./img/casa_tipo_2/f1.jpg",
        "img2": "./img/casa_tipo_2/f2.jpg",
        "img3": "./img/casa_tipo_2/f3.jpg",
        "img4": "./img/casa_tipo_2/f4.jpg",
        "img5": "./img/casa_tipo_2/f5.jpg"
    }
}

for(let i=0; i<menuGaleriaSpan.length; i++){
    menuGaleriaSpan[i].addEventListener("click", ()=>{
        for(let m=0; m<menuGaleriaSpan.length; m++){
            menuGaleriaSpan[m].style.borderBottom = "0px"
        }
        menuGaleriaSpan[i].style.borderBottom = "2px solid #e8542c"
        menuGaleria.innerHTML = ""
        switch (i) {
            case 0:
                menuGaleria.innerHTML = `<img src=${gal.all.img1} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.all.img2} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.all.img3} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.all.img4} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.all.img5} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.all.img6} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.all.img7} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.all.img8} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.all.img9} alt=imagem>`
                break;

            case 1:
                menuGaleria.innerHTML = `<img src=${gal.inhamizua.img1} alt=imagem>`
                break;

            case 2:
                menuGaleria.innerHTML = `<img src=${gal.mobeira.img1} alt=imagem>`
                break;

            case 3:
                menuGaleria.innerHTML = `<img src=${gal.pontaGea.img1} alt=imagem>`
                break;

            case 4:
                menuGaleria.innerHTML = `<img src=${gal.praiaNova.img1} alt=imagem>`
                break;

            case 5:
                menuGaleria.innerHTML = `<img src=${gal.casa.img1} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.casa.img2} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.casa.img3} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.casa.img4} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.casa.img5} alt=imagem>`
                break;
        
            default:
                break;
        }
        
    })
}