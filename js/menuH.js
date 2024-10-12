let humbu = document.querySelector(".humbu")
let menu = document.querySelector(".menu")
let menuOpen = true

humbu.addEventListener("click", ()=>{
    if(menuOpen){
        menu.style.width = "250px"
        menu.style.visibility = "visible"
        humbu.style.position = "fixed"
        menuOpen=false

    }else{
        menu.style.width = "0px"
        menu.style.visibility = "hidden"
        humbu.style.position = "static"
        menuOpen=true
    }
    
})