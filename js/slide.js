let banner = window.document.querySelector(".pegaBB")
let esq = window.document.querySelector(".esq")
let rightc = window.document.querySelector(".rightc")
let mudaImge = false

let conteudo = {
    "primeiro": {
        "imagem":"foto"
    },
    "segundo": {
        "imagem":"foto1"
    }
}

banner.classList.remove("foto")
banner.classList.add("foto1")
esq.addEventListener("click", ()=>{
    if(!mudaImge){
        banner.classList.remove("foto")
        banner.classList.add("foto1")
        mudaImge = true
    }else{
        banner.classList.remove("foto1")
        banner.classList.add("foto")
        mudaImge = false
    }
   
})

rightc.addEventListener("click", ()=>{
    if(mudaImge){
        banner.classList.remove("foto1")
        banner.classList.add("foto")
        mudaImge = false
    }else{
        banner.classList.remove("foto")
        banner.classList.add("foto1")
        mudaImge = true
    }
    
})

let tmp = setInterval(mudaimagem, 15000)
let click = false
let mmnm = false

function mudaimagem(){
    if(mudaImge){
        banner.classList.remove("foto1")
        banner.classList.add("foto")
        mudaImge = false
    }else{
        banner.classList.remove("foto")
        banner.classList.add("foto1")
        mudaImge = true
    }
}


