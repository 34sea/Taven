
//document.querySelectorAll(".comun")[0].style.display = "block"
let clickm = []

let me = window.document.querySelectorAll(".me")
me[0].style.backgroundColor = "rgba(0, 0, 0, 0.05)"
for(i=0; i<me.length; i++){
    if(i==0){
        clickm[i]=true
    }else{
        clickm[i]=false
    }
    
   //hoverC(i)
}

//console.log(clickm)

function whatClick(indice){
    for(i=0; i<me.length; i++){
        if(i==indice){
            clickm[i]=true
        }else{
            clickm[i]=false
        }
    }
}

function cj(indice){
    for(j=0; j<me.length; j++){
        me[j].style.backgroundColor = "rgba(255, 255, 255, 1)"
        
    }
    me[indice].style.backgroundColor = "rgba(0, 0, 0, 0.05)"
    whatClick(indice)
    //hoverC(indice)
    
}

function openPopup4() {
    document.getElementById('meuModal3').style.display = 'block';
}

function closePopup4() {
    document.getElementById('meuModal3').style.display = 'none';
}
function openPopup5() {
    document.getElementById('meuModal4').style.display = 'block';
}

function closePopup5() {
    document.getElementById('meuModal4').style.display = 'none';
}

let btnF = window.document.querySelector(".btnF")
let tela=true
btnF.addEventListener("click", ()=>{
    window.open("./post", "_self")
})

function hoverC(indice){
    if(clickm[indice]==true){
        console.log(clickm[indice])
        me[indice].addEventListener("mouseover", ()=>{
            me[indice].style.backgroundColor = "rgba(0, 0, 0, 0.05)"
        })
        me[indice].addEventListener("mouseout", ()=>{
            me[indice].style.backgroundColor = "rgba(0, 0, 0, 0.05)"
        })
    }else{
        me[indice].addEventListener("mouseover", ()=>{
            me[indice].style.backgroundColor = "rgba(0, 0, 0, 0.05)"
        })
        me[indice].addEventListener("mouseout", ()=>{
            me[indice].style.backgroundColor = "rgba(255, 255, 255, 1)"
        })
    }
    console.log(clickm)
}
function muda(indice) {
    switch (indice) {
        case 0:
            document.querySelector(".comun").style.display = "block"
            document.querySelector(".comun2").style.display = "none"
            document.querySelector(".comun3").style.display = "none"
            document.querySelector(".comun4").style.display = "none"
            document.querySelector(".comun5").style.display = "none"
            console.log("ksj")
            
            cj(indice)
            break;

        case 1:
            document.querySelector(".comun2").style.display = "block"
            document.querySelector(".comun").style.display = "none"
            document.querySelector(".comun3").style.display = "none"
            document.querySelector(".comun4").style.display = "none"
            document.querySelector(".comun5").style.display = "none"
            cj(indice)
            break;

        case 2:
            document.querySelector(".comun2").style.display = "none"
            document.querySelector(".comun").style.display = "none"
            document.querySelector(".comun4").style.display = "none"
            document.querySelector(".comun5").style.display = "none"
            document.querySelector(".comun3").style.display = "block"
            cj(indice)
            tela=false
            break;

        case 3:
            document.querySelector(".comun2").style.display = "none"
            document.querySelector(".comun").style.display = "none"
            document.querySelector(".comun3").style.display = "none"
            document.querySelector(".comun5").style.display = "none"
            document.querySelector(".comun4").style.display = "block"
            cj(indice)
            tela=true
            break;

        case 4:
            document.querySelector(".comun2").style.display = "none"
            document.querySelector(".comun").style.display = "none"
            document.querySelector(".comun3").style.display = "none"
            document.querySelector(".comun4").style.display = "none"
            document.querySelector(".comun5").style.display = "block"
            btnF.style.display = "block"
            cj(indice)
            break;

        case 5:
            document.querySelector(".comun").innerHTML = "Progresso"
            cj(indice)
            break;
    
        default:
            break;
    }
    
}