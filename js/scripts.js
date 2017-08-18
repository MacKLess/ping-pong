//Business Logic
var gameChanger = function(ppBall){
  var indexNum = 0;
  var array = "";
  var result = "";
    for (var i = 1; i <= ppBall; i ++){
      if (isNaN(ppBall)){
        console.log(ppBall);
        alert ("Please enter a whole positive number!")
      }
      else if (i % 15 == 0){
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
    return result;
    for(var index = 0; index <result.length; index ++){

    }


    // var output = "<ul><li>" + result("</li><li>") + "</li></ul>";
    // //
    // // function populateList(){
    // //   for (var index = 0; index < result.length; index++){
    // //
    // //   }
    // // }
    // // for (i = 0; i < result.length; i++){
    // //   document.write('<li>') + result[indexNum++] + '</li>');
    // }


    // // for (var index = 0; index <= result.length; i++){
    // //   array += "<li>" + result + "</li>";
    // }
}



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
