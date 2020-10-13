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
$(document).ready(function() {
  $(".show-column1text").click(function() {
    $("#1").toggle();
    $(".show-column1text").toggle();
  });
});
$(document).ready(function() {
  $(".show-column2text").click(function() {
    $("#2").toggle();
    $(".show-column2text").toggle();
  });
});
$(document).ready(function() {
  $(".show-column3text").click(function() {
    $("#3").toggle();
    $(".show-column3text").toggle();
  });
});

function myFunction() {
	alert("your message has been submitted!");
}
