$(document).ready(function() {
  $(".column1wwd").click(function() {
    $(".column1text").toggle();
    $("#col1t-show").show();
  });
});
$(document).ready(function() {
  $(".column2wwd").click(function() {
    $(".column2text").toggle();
    $("#col2t-show").toggle();
  });
});
$(document).ready(function() {
  $(".column3wwd").click(function() {
    $(".column3text").toggle();
    $("#col3t-show").fadeToggle();
  });
});
function myFunction() {
	alert("your message has been submitted");
}