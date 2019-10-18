import $ from "jquery";

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
