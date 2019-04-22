$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#myNav a").on('click', function(event) {
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
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
    $('.carousel').carousel();

    function descriptionSwitch(e) {
    var desc1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    var desc2 = "Dui ut ornare lectus sit amet.";
    var desc3 = "Venenatis urna cursus eget nunc scelerisque.";
    var desc4 = "Consectetur adipiscing elit duis tristique sollicitudin nibh sit.";

    switch (e) {
      case "carousel-1": 
      $("#folio-description").text(desc1);
      break;
      case "carousel-2":
      $("#folio-description").text(desc2);
      break;
      case "carousel-3": 
      $("#folio-description").text(desc3);
      break;
      case "carousel-4":
      $("#folio-description").text(desc4);
      break;
    }
  }

    $(".carousel-item").on("click", function(event) {
      var id = $(this).attr("id");
      console.log(id);
     descriptionSwitch(id);
    });
  });      