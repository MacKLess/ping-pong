//Business Logic
var gameChanger = function(ppBall){
  // var array = [];
  var result = "";
    for (var i = 1; i <= ppBall; i ++){
      if (i % 15 == 0){
        result += "ping-pong";
      }

      else if (i % 5 == 0){
        result += "pong";
      }

      else if (i % 3 == 0){
        result += "ping";
      }
      else {
        result += i;
      }
    }
    // result.push(array);
    // return result;
    return result;
}

// array.push(i);




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
