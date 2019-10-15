import $ from "jquery";

// $(".btnn").on("click", function() {
//   $(this)
//     .siblings()
//     .removeClass("active"); // if you want to remove class from all sibling buttons
//   $(this).toggleClass("active");
// });

// $(document).ready(function() {
//   $(".btnn").click(function() {
//     $(".btnn")
//       .removeClass("active")
//       .addClass("inactive");
//     $(this)
//       .removeClass("inactive")
//       .addClass("active");
//   });
// });

$(document).ready(function() {
  var url = window.location.href.toLowerCase();

  $(".btnn a").each(function() {
    var $this = $(this);

    var href = $this.attr("href").toLowerCase();

    if (url.indexOf(href) > -1) {
      $this.addClass("active");
    }
  });
});
