let menuGaleria =  window.document.querySelector(".galeriaFotos")
let menuGaleriaSpan = window.document.querySelectorAll(".menuGaleria span")

let gal = {
    "all": {
        "img1": "../../imgs/capas/accao.jpg",
        "img2": "../../imgs/capas/comedia.jpg",
        "img3": "../../imgs/capas/drama.jpg",
        "img4": "../../imgs/capas/ficcao.jpg",
        "img5": "../../imgs/capas/romance.jpg",
        "img6": "../../imgs/capas/terror.jpg"
    },
    "inhamizua": {
        "img1": "../../imgs/capas/terror.jpg"
    },
    "mobeira": {
        "img1": "../../imgs/capas/romance.jpg"
    },
    "pontaGea": {
        "img1": "../../imgs/capas/ficcao.jpg"
    },
    "praiaNova": {
        "img1": "../../imgs/capas/drama.jpg"
    },
    "casa": {
        "img1": "../../imgs/capas/accao.jpg",
        "img2": "../../imgs/capas/comedia.jpg",
        "img3": "../../imgs/capas/drama.jpg"
    },
    "terror": {
        "img1": "../../imgs/capas/accao.jpg",
        "img2": "../../imgs/capas/comedia.jpg"
    }
}

for(let i=0; i<menuGaleriaSpan.length; i++){
    menuGaleriaSpan[i].addEventListener("click", ()=>{
        for(let m=0; m<menuGaleriaSpan.length; m++){
            menuGaleriaSpan[m].style.borderBottom = "0px"
        }
        menuGaleriaSpan[i].style.borderBottom = "2px solid #0f79af"
        menuGaleria.innerHTML = ""
        switch (i) {
            case 0:
                menuGaleria.innerHTML = `<img src=${gal.all.img1} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.all.img2} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.all.img3} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.all.img4} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.all.img5} alt=imagem>`
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
            case 6:
                menuGaleria.innerHTML = `<img src=${gal.terror.img1} alt=imagem>`
                menuGaleria.innerHTML += `<img src=${gal.terror.img2} alt=imagem>`
                break;
        
            default:
                break;
        }
        
    })
}