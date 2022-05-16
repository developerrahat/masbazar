$(document).ready(function() {

// header up scroll to scroll down=======================
$(window).on('scroll',function() {
  if($(window).scrollTop()){
      $('.header_area').addClass('white');
     }
    else{
     $('.header_area').removeClass('white');
    }
    
  });

  $('.parallaxie').parallaxie({
    speed:.8,
    offset:50,

  });

// slick slider======================
$('.all').slick({
  infinite: true,
  centerMode: true,
  centerPadding: '10px',
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow:3,
  responsive: [
    {
      breakpoint:1300,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2
      }
    },
    {
      breakpoint:992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow:1
      }
    },
    {
      breakpoint: 420,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});

// CounterUp========================
$('.counter').counterUp({
  delay:30,
  time:3000
});

//Blog page's Lightbox video play======================
$(".video-play").modalVideo();






// end jquery code==============

});


//Custom Javascript Code Start Here====================

  // button animation=========================
  $( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
   
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
 
 });
 
 $( ".button_su_inner" ).mouseleave(function(e) {
 
      var parentOffset = $(this).offset(); 
 
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
      $(this).prev(".su_button_circle").removeClass("explode-circle");
      $(this).prev(".su_button_circle").addClass("desplode-circle");
 
 });


 
  // Wow JS================================
   var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       70,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();

  /*========== Loading  ==========*/
    $(".loading").animate({
      "top": "-100%"
  },1000, function () {
      $(this).remove();
  });

// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------

function tdProgress(container){

	"use strict";

	container.find('.rahat_tm_progress').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.arlo_tm_bar_wrap');
		var pBar 			= progress.find('.arlo_tm_bar');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*500));
	});
}
jQuery('.rahat_tm_progress_wrap').each(function() {
	"use strict";
	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});


