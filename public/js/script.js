
    $(document).ready(function() {
  //toggle menu
  $(".hamburger-container").click(function() {
    if($(window).innerWidth() <= 767) {
      $(".navMenu").slideToggle();
      //$('.navMenu').toggleClass('active');
/*
      if( $("ul").hasClass("navMenu") ) {
        $("ul").removeClass("navMenu");

    }else{
      $("ul").addClass("navMenu");
    }
*/
  }
});

  //icon animation
  var topBar = $(".hamburger li:nth-child(1)"),
    middleBar = $(".hamburger li:nth-child(2)"),
    bottomBar = $(".hamburger li:nth-child(3)");

  $(".hamburger-container").on("click", function() {
    if (middleBar.hasClass("rot-45deg")) {
      topBar.removeClass("rot45deg");
      middleBar.removeClass("rot-45deg");
      bottomBar.removeClass("hidden");
    } else {
      bottomBar.addClass("hidden");
      topBar.addClass("rot45deg");
      middleBar.addClass("rot-45deg");
    }
  });
});
