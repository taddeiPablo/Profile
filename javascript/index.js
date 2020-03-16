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
                  src: 'img/projects/net/AppVideoClub.png'
                }
              ],
              gallery: {
                enabled: true
              },
              type: 'image' // this is default type
        });
     });

     $('#html-button').click(function(){
        $.magnificPopup.open({
            items: [
                {
                    src: 'img/projects/html/BSAS-APP.png'
                },
                {
                    src: 'img/projects/html/BSAS-APP1.png'
                },
                {
                    src: 'img/projects/html/BSAS-APP2.png'
                },
                {
                    src: 'img/projects/html/angularjs.png'
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
                    src: 'img/projects/blender/crylers.png'
                },
                {
                    src: 'img/projects/blender/chevrolet-pickup.png'
                },
                {
                    src: 'img/projects/blender/bentley-mk6.png'
                },
                {
                    src: 'img/projects/blender/pampa3.png'
                }

            ],
            gallery: {
                enabled: true
            },
            type: 'image'
        });
     });
});