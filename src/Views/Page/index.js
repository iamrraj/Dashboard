import $ from "jquery";

$("#select-meal-type").change(function() {
  var arr = $(this).val();
  console.log(arr);
});
