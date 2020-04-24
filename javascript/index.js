$(function(){
     // aqui manejamos el scroll con los menus
     $('li, a').click(function(){
        let navegation = '.' + $(this).attr('id');
        $('html, body').animate({
            scrollTop: ($(navegation).offset().top)
        }, 3000);
     });

     // aqui event click para las galerias de las imagenes
     $('#vs-button').click(function(){
        $.magnificPopup.open({
            items: [
                {
                  src: 'img/projects/net/AppVideoClub.png',
                  title: '.Net Framework : App realizada con winForm, administracion de un videoClub'
                }
              ],
              gallery: {
                enabled: true
              },
              type: 'image',
        });
     });

     $('#html-button').click(function(){
        $.magnificPopup.open({
            items: [
                {
                    src: 'img/projects/html/BSAS-APP.png',
                    title: 'Ionic: App hibrida para android, localiza los distintos servicios dentro de la ciudad BSAS'
                },
                {
                    src: 'img/projects/html/BSAS-APP1.png',
                    title: 'Ionic: otra toma de la misma app hibrida (tablet)'
                },
                {
                    src: 'img/projects/html/BSAS-APP2.png',
                    title: 'Ionic: otra toma de la misma app hibrida (mobile)'
                },
                {
                    src: 'img/projects/html/angularjs.png',
                    title: 'Angularjs: aplicacion web utilizando este framework de javascripts'
                }

            ],
            gallery: {
                enabled: true
            },
            type: 'image'
        });
     });

     $('#blend-button').click(function(){
        $.magnificPopup.open({
            items: [
                {
                    src: 'img/projects/blender/crylers.png',
                    title: 'Blender : modelado de un crysler imperial 1933'
                },
                {
                    src: 'img/projects/blender/chevrolet-pickup.png',
                    title: 'Blender : modelado de un Chevrolet Pickup 1951'
                },
                {
                    src: 'img/projects/blender/bentley-mk6.png',
                    title: 'Blender : modelado de un bentley mk6'
                },
                {
                    src: 'img/projects/blender/pampa3.png',
                    title: 'Blender : modelado de un IA 64 PAMPA 3'
                },
                {
                    src:'img/projects/blender/escenario.png',
                    title: 'Blender : creacion de materiales y texturas'
                }

            ],
            gallery: {
                enabled: true
            },
            type: 'image'
        });
     });

     
});