$(document).ready(function(){
   //alert('hello');
    new WOW().init();
    $('.service-item').hover(function(){
      $(this).addClass('animated swing');
    });
});

$(document).ready(function(){
  $("#teamembers").owlCarousel({
    items:3,
    autoplay: true,
    smartSpeed : 700,
    loop: true,
    autoplayHoverPause: true
  });
});

$(document).ready(function(){
  $("#clients-list").owlCarousel({
    items:6,
    autoplay: true,
    smartSpeed : 700,
    loop: true,
    autoplayHoverPause: true,
    responsive : {
      // breakpoint from 0 up
      0 : {
          items:1
      },
      // breakpoint from 480 up
      480 : {
        items:3
      },
      // breakpoint from 768 up
      768 : {
        items:5 
      },
      992:{
        items:6
      }
  },
  });
});



$(document).ready(function(){
  $("#customers-testmonials").owlCarousel({
    items:1,
    autoplay: true,
    smartSpeed : 700,
    loop: true,
    autoplayHoverPause: true
  });
});


$(document).ready(function(){
   $('#work').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled:true
    },


    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
   });
});

$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 2000
});
});



////////////  Navigation  //////////////
$(document).ready(function(){
   $(window).scroll(function(){
      if($(this).scrollTop() < 50){
          //Hide Nav
          $('nav').removeClass('navbar-nasir');
          $('#back-to-top').fadeOut();
      }else{
         //Show Nav
         $('nav').addClass('navbar-nasir');
         $('#back-to-top').fadeIn();
      }
   });
});
  

//////////// Smooth Scrolling ////////////////////
// $(document).ready(function(event){
    
//   var sece = $(this).attr('href');
//   $('html,body').animate({
//     scrollTop: $(sece).offset().top
//   },1250);
//   event.preventDefault();
// });

$(document).ready(function(){
  //  $('a.smooth-scroll').click(function(e){
  //   var sece = $(this).attr('href');

  //   $('html,body').animate({
  //      scrollTop:$(sece).offset().top

  //   },500, 'easeInOutExpo');
  //   e.preventDefault();
  //  })

  var $root = $('html, body');

  $('a[href^="#"]').click(function () {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500, 'easeInOutExpo');
  
      return false;
  });

});


$(document).ready(function(){
    $('.navbar-collapse ul li a').on('click touch',function(){
      $('.navbar-toggler').click();
    });
});