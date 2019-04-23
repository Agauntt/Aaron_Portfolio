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
    var name1 = "Tasty Burger Time";
    var name2 = "Crystal Collector";
    var name3 = "Whats Wrong With My Body";
    var name4 = "Test 4";  
    var desc1 = "A handlebars based app that allows users to add and devour various kinds of burgers. Maybe even some sandwitches if your're feeling bold.";
    var desc2 = "A javascript logic game where four crystals are assigned random values, the user has to figure out their values and use them to reach a randomized total value.";
    var desc3 = "A mySQL and node based patient portal for a hypothetical hospital. First time uses will be prompted to create an account, and will have a dashboard where they can access their patient records. It also includes a specialized search engine using the medicAPI to return possible diagnosis based on reported symptoms.";
    var desc4 = "Consectetur adipiscing elit duis tristique sollicitudin nibh sit.";

    switch (e) {
      case "carousel-1": 
      $("#folio-name").text(name1);
      $("#folio-description").text(desc1);
      $("#github-link").attr("href", "https://github.com/Agauntt/Eat-da-burger");
      $("#deployment-link").attr("href", "https://tasty-burger-time.herokuapp.com/");
      break;
      case "carousel-2":
      $("#folio-name").text(name2);
      $("#folio-description").text(desc2);
      $("#github-link").attr("href", "https://github.com/https://github.com/Agauntt/unit-4-game");
      $("#deployment-link").attr("href", "https://agauntt.github.io/unit-4-game/");
      break;
      case "carousel-3": 
      $("#folio-name").text(name3);
      $("#folio-description").text(desc3);
      $("#github-link").attr("href", "https://github.com/Agauntt/Project2");
      $("#deployment-link").attr("href", "");
      break;
      case "carousel-4":
      $("#folio-name").text(name4);
      $("#folio-description").text(desc4);
      $("#github-link").attr("href", "");
      $("#deployment-link").attr("href", "");
      break;
    }
  }

    $(".carousel-item").on("click", function(event) {
      var id = $(this).attr("id");
      console.log(id);
     descriptionSwitch(id);
    });
  });      