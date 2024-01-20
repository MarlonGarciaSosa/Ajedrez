//Cambio de color que realiza el sol y la luna
function CambiarColorSol(){
    const XD = document.querySelector(".CambiarColor")  
    XD.style.color = "white"
    const sol = document.querySelector(".header__section__img")
    sol.setAttribute("src", "luna.png")
    sol.setAttribute("onclick", "CambiarColorLuna()")
    
}
function CambiarColorLuna(){
     const XD = document.querySelector(".CambiarColor")
     XD.style.color = "black"
     const sol = document.querySelector(".header__section__img")
     sol.setAttribute("src", "sol.png")
     sol.setAttribute("onclick", "CambiarColorSol()")
 }
