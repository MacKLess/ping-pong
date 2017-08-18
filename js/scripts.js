//Business Logic
var gameChanger = function(ppBall){
  var result = [];
    for (var i = 1; i <= ppBall; i ++){
    result += i;
  }
    return result;
}





// if (isNan(ppBall) || ppBall < 0){
//   alert ("Please enter a whole positive number!")
// }
// User Interface Logic
$(document).ready(function(){
  $("#inPut").submit(function(event){
    $("#outPut").text("");
    var serve = parseInt($("#inputNumber").val());
    // debugger;
    var result = gameChanger(serve);
    console.log(serve);
    $("#outPut").text(result);

  event.preventDefault();
  });
});
