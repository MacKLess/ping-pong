//Business Logic
var gameChanger = function(ppBall){
  var result = "";
  for (var i = 1; i < ppBall; i ++){
    else
  }
  var i = 1
  result.push(i)
}





// User Interface Logic
$(document).ready(function(){
  $("#inPut").submit(function(event){
    $("#outPut").append("");
    var serve = (parseInt$("#inputNumber").val());
    var result = gameChanger(serve)

    $("#outPut").append(result);

    event.preventDefault();
  });
});
