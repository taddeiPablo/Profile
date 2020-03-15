$(function(){
    var inicio = 0;
   //Aqui indicamos la posición donde deberá hacer el cambio dependiendo de la condición
   var transicion = $('.navbar-header');
  //Obtenemos las coordenadas de nuestro elemento mediante offset.
   var offset = transicion.offset();
   console.log("--------------- AFUERA --------------------------");
   
   $('nav').css('background-color', 'transparent');
   $(window).on('scroll', function () {     
       //Cuando hagamos scroll 
       //Nuestra variable inicio contendra el alto del elemento que le hemos asignado
       inicio = $(this).scrollTop(); 
       //Aqui hacemos la transición
       console.log(inicio);
       console.log(offset.top);
       if (inicio > offset.top) {
            //console.log(inicio);
            //console.log("entro aca inicio es mayor");
            $('nav').css('background-color','#0078ff');
            $('nav').css('border-bottom','1px solid rgba(34,34,34,0.1)');
            $('.navbar-brand').css('color','#0078ff');
            $('.navbar-header li a').css('color','#fff');
            $('.navbar-toggle').css('color','#0078ff');
        
         }
     //Si no se cumple la condición , que nos deje nuestro menú como estaba
           else {
              // console.log(inicio);
               //console.log("else");
           // $('nav').css('background-color', 'transparent');
            $('nav').css('border-bottom','0px');
            $('.navbar-brand').css('color','#fff');
            $('.navbar-header li a').css('color','#fff');
            $('.navbar-toggle').css('color','#fff');
          }
          console.log(offset.top);
     }); //End function scroll

     //
     $('a').click(function(){
        let navegation = '.' + $(this).attr('id');
        $('html, body').animate({
            scrollTop: ($(navegation).offset().top)
        }, 3000);
     });
});