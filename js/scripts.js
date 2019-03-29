$(document).ready(function() {
  $("#submit").click(function() {
    var brain = $("input:radio[name=hemisphere]:checked").val();
    var animal = $("input:radio[name=animal]:checked").val();
    var situation = $("input:radio[name=problemSolve]:checked").val();
    var dream = $("#future").val();
    var freetime = $("#weekends").val();

    if ((brain === 'left' || brain === 'both') && (animal === 'cat' || animal === 'neither')) {
      if ((situation === 'invincible' || situation === 'help') && (dream === 'extinction' || dream === 'space') && (freetime === 'hermit')) {
        $("#display").text("Ruby");
        $("#ruby").show();
        $("#java").hide();
        $("#php").hide();
        $("#intro").hide();
      } else {

      }
    } else if ((brain === "both" || brain ==="right") && (animal === "dog" || animal === "cat")) {
      if ((situation === "nap") && (dream === "harmony" || dream === "present") && (freetime === "nature" || freetime === "hermit")) {
        $("#java").show();
        $("#ruby").hide();
        $("#php").hide();
        $("#intro").hide();
      } else {

      }
    } else if ((brain === "both") && (animal === "cat" || animal === "dog" || animal === "neither")) {
      if ((situation === "help") && (dream === "space" || dream === "harmony" || dream === "extinction") && (freetime === "social" || freetime === "nature")) {
        $("#php").show();
        $("#ruby").hide();
        $("#java").hide();
        $("#intro").hide();
      } else {

      }
    } else {
      $("#intro").show();
      $("#ruby").hide();
      $("#java").hide();
      $("#php").hide();
    }
  });
});
