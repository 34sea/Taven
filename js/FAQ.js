let plus = window.document.querySelectorAll(".plus")
let escritoTexto = window.document.querySelectorAll(".escritoTexto")
let clickk = []
for(let i=0; i<plus.length; i++){
    clickk[i]=false
}
for(let i=0; i<plus.length; i++){
    plus[i].addEventListener("click", ()=>{
        if(!clickk[i]){
            escritoTexto[i].style.position = "static"
            escritoTexto[i].style.visibility = "visible"
            escritoTexto[i].style.height = "200px"
            plus[i].style.transform = "rotate(135deg)"
            clickk[i]=true
        }else{
            escritoTexto[i].style.position = "absolute"
            escritoTexto[i].style.visibility = "hidden"
            escritoTexto[i].style.height = "0px"
            plus[i].style.transform = "rotate(0deg)"
            clickk[i]=false
        }
        

    })
}