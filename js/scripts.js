$(document).ready(function() {
  $("#submit").click(function() {
    var brain = $("input:radio[name=hemisphere]:checked").val();
    var animal = $("input:radio[name=animal]:checked").val();
    var situation = $("input:radio[name=problemSolve]:checked").val();
    var dream = $("#future").val();
    var freetime = $("#weekends").val();

    if ((dream === "default") || (freetime == "default")) {
      alert("Please select an answer for every question.");
    } else {
      if ((brain === 'left' || brain === 'both') && (animal === 'cat' || animal === 'neither')) {
        if ((situation === 'invincible' || situation === 'help') && (dream === 'extinction' || dream === 'space') && (freetime === 'hermit')) {
          $("#ruby").show();
          $("#java").hide();
          $("#php").hide();
          $("#intro").hide();
        } else {
            $("#java").show();
            $("#ruby").hide();
            $("#php").hide();
            $("#intro").hide();
        }
      } else if ((brain === "both" || brain ==="right") && (animal === "dog" || animal === "cat")) {
        if ((situation === "nap") && (dream === "harmony" || dream === "present") && (freetime === "nature" || freetime === "hermit")) {
          $("#java").show();
          $("#ruby").hide();
          $("#php").hide();
          $("#intro").hide();
        } else {
            $("#php").show();
            $("#ruby").hide();
            $("#java").hide();
            $("#intro").hide();
        }
      } else if ((brain === "both") && (animal === "cat" || animal === "dog" || animal === "neither")) {
        if ((situation === "help") && (dream === "space" || dream === "harmony" || dream === "extinction") && (freetime === "social" || freetime === "nature")) {
          $("#php").show();
          $("#ruby").hide();
          $("#java").hide();
          $("#intro").hide();
        } else {
            $("#ruby").show();
            $("#java").hide();
            $("#php").hide();
            $("#intro").hide();
        }
      } else {
          $("#intro").show();
          $("#ruby").hide();
          $("#java").hide();
          $("#php").hide();
      }
    }
  });
});
