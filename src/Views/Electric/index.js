import $ from "jquery";

$(".datepicker").datepicker({
  format: "mm-dd-yyyy",
  autoclose: true,
  endDate: "+0d"
});

// $(".datepicker").on("dp.show", function(e) {
//   $(".bootstrap-datetimepicker-widget").css("background-color", "#3c3e43");
// });
