$(document).ready(function(){

  $(window).scroll(function(){
    var windowWidth = $(window).width();

    if(windowWidth > 800 ){
      var scroll = $(window).scrollTop();

      $('header .textos').css({
        'transform':'translate(0px, ' + scroll / 5 + '%)'
      });

      $('.acerca-de article').css({
        'transform':'translate(0px, -' + scroll / 20 + '%)'
      });
    }
  });

  $(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowwidth < 800) {
      $('header .textos').css({
        'transform':'translate(0px, 0px)'
      });
    }
  });
});
