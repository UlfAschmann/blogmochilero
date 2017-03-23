$( document ).ready(function() {

    //Sirve para que el botón suba la página
    $('#buttonUp').click(function(e){
    volver  = $(this).attr('data-link');
    $('html, body').animate({
        scrollTop: $(volver).offset().top
    }, 1000);
    });

    //Detecta si el sitio tiene el suficiente scroll para activar el botón.
    $(window).scroll(function(){
        var top  = $(this).scrollTop();
        var anchoPantalla = $(this).width();
        var buttonUp = $("#buttonUp");

        if( top > 750 && anchoPantalla > 768)
        {
           buttonUp.fadeIn();
        } else {
           buttonUp.fadeOut();
        }
    });
} );
