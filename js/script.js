
$(document).ready(function () {
  $(".aboutcontainer").each(function (i) {
    var $t = $(this);
    setTimeout(function () {
      $t.addClass("reveal");
    }, i * 1000)
  });
  $("#rotating-text2").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "lightSpeedIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: "_",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
      // Called after the entrance animation is executed.
    }
  });
});