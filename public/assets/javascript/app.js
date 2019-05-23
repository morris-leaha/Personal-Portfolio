// Smooth scrolling function adapted from W3 Schools at: https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

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
      }, 300, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // When the user scrolls the page, execute myFunction 
  // adapted from W3 Schools at: https://www.w3schools.com/howto/howto_js_sticky_header.asp
  window.onscroll = function () {
    navbarSticky();
    scrollFunction();
  };

  // Get the header
  var navbar = document.getElementById("nav");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function navbarSticky() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
      document.getElementById("topBtn").style.display = "block";
    } else {
      document.getElementById("topBtn").style.display = "none";
    }
  }

  // $(document).on("click", ".submit-btn", insertContact);


  // function insertContact(event) {
  //   event.preventDefault();
  //   var contact = {
  //     name: $("#name").val().trim(),
  //     email: $("#email").val().trim(),
  //     subject: $("#subject").val().trim(),
  //     textArea: $("#textArea").val().trim()
  //   };
  //   console.log(contact);
  //   $.ajax({
  //     url: "/api/contact",
  //     type: "POST",
  //     data: contact,
  //   });
  //   window.location.href = "/index";
  // };

});

// When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
