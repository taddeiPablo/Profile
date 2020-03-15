$(function(){
     // aqui manejamos el scroll con los menus
     $('a').click(function(){
        let navegation = '.' + $(this).attr('id');
        $('html, body').animate({
            scrollTop: ($(navegation).offset().top)
        }, 3000);
     });

     
});