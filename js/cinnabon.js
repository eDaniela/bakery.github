$(document).ready(function(){
// efecto menu
    $('.menu a').each(function(index, elemento){
      $(this).css({
        'top': '-200px' // con esto escondemos los links del menu
      });

      $(this).animate({
        top: '0'
      }, 2000 + (index * 500)); //index:valores de los elementos empezando del 0
// gracias al index * 500 lo que hacemos es agregar un delay en la animacion entre
//los elementos
    });

// efecto Header
    if( $(window).width() > 800 ){
        $('header .textos').css({
          opacity: 0,
          marginTop: 0
        });

        $('header .textos').animate({
          opacity: 1,
          marginTop: '-52px'
        }, 1500);
    }
// SCROLL ELEMENTOS MENU
  var about=$('#acerca-de').offset().top;
  var menu=$('#postres').offset().top;
  var galeria=$('#galeria').offset().top;
  var mapa=$('#info').offset().top;


  $('#btn-about').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 408// about - 100
    }, 500);
  });

  $('#btn-menu').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 1286
    }, 500);
  });

  $('#btn-galery').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 2226
    }, 500);
  });

  $('#btn-info').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: info
    }, 500);
  });

});
