$(document).ready(function() {
  $("#1").click(function() {
    $(".show-column1text").toggle();
    $("#1").toggle();
  });
});
$(document).ready(function() {
  $("#2").click(function() {
    $(".show-column2text").toggle();
    $("#2").toggle();
  });
});
$(document).ready(function() {
  $("#3").click(function() {
    $(".show-column3text").toggle();
    $("#3").toggle();
  });
});
function myFunction() {
	alert("your message has been submitted");
}