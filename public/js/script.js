
    $(document).ready(function() {
  //toggle menu
  $(".hamburger-container").click(function() {
    if($(window).innerWidth() <= 751) {
      $(".navMenu").slideToggle('fast').css({
        "position":"absolute",
        "opacity":"0.8",
        "width":"80%"
      });

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
