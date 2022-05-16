$(document).ready(function() {
// slick slider
    $('.all').slick({
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow:3,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        
      });

// countDown timmer

      $("#countdown").countdown({
        date: "1 january 2025 12:00:00",
        format: "on"
        },
        
        function() {
        // callback function
        });


     lightGallery()
    
})


lightGallery(document.getElementById('liGallery'), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
  
});



