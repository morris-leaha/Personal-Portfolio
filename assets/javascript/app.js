$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 300, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  
// anime.timeline({loop: true})
//   .add({
//     targets: '.name-logo .line',
//     opacity: [0.5,1],
//     scaleX: [0, 1],
//     easing: "easeInOutExpo",
//     duration: 700
//   }).add({
//     targets: '.name-logo .line',
//     duration: 600,
//     easing: "easeOutExpo",
//     translateY: function(e, i, l) {
//       var offset = -0.625 + 0.625*2*i;
//       return offset + "em";
//     }
//   }).add({
//     targets: '.name-logo .star',
//     opacity: [0,1],
//     scaleY: [0.5, 1],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=600'
//   }).add({
//     targets: '.name-logo .letters-left',
//     opacity: [0,1],
//     translateX: ["0.5em", 0],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=300'
//   }).add({
//     targets: '.name-logo .letters-right',
//     opacity: [0,1],
//     translateX: ["-0.5em", 0],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=600'
//   }).add({
//     targets: '.name-logo',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });


  