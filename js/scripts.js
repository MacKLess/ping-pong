//Business Logic
var gameChanger = function(ppBall){
  var array = [];
  var result = "";
    for (var i = 1; i <= ppBall; i ++){
      if (i % 15 == 0){
        result += " " + "ping-pong";
      }
      else if (i % 5 == 0){
        result += " " + "pong";
      }
      else if (i % 3 == 0){
        result += " " + "ping";
      }
      else {
        result += " " + i;
      }
    }
    var array = result.trim().split(" ");

    document.getElementById("outPut").innerHTML = "<ul><li>" + array.join("</li><li>") + "</li></ul>";
}

// User Interface Logic
$(document).ready(function(){
  $("#inPut").submit(function(event){
    $("#outPut").text("");
    var serve = parseInt($("#inputNumber").val());
    var final = gameChanger(serve);
    $("#outPut").text(final);
  event.preventDefault();
  });
});
