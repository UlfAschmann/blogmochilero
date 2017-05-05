const popUp = $("#popUpTipLectura"),
      botonCerrar = $("#popUpTipLectura .cerrar")

let popNoneActive = true,
    timer = 2000,
    abrirPorTiempo = setTimeout( displayPopUp , timer);

function displayPopUp()
{
    popUp.animate({
        bottom:"0px",
        opacity:1
    })
    popNoneActive = false
}

function cerrarPopUp(){
    popUp.animate({
        top:"700px",
        opacity:0
    })
}

function scrollDisplayPop(){
    if(popNoneActive){

        let heightFooter = $("#footerGeneral").height(),
            heightMain = $("#mainPrincipal").height() - heightFooter,
            scrollActual = $(document).scrollTop()

        if(scrollActual >= heightMain){
            displayPopUp()
            clearTimeout(abrirPorTiempo)
        }
    }
}

//Activar popUp por medio del scroll
$(document).on('scroll', scrollDisplayPop)

//Cerrar PopUp
botonCerrar.click( cerrarPopUp )


