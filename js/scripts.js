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
    var array = result.split(" ");



    document.getElementById("outPut").innerHTML = "<ul><li>" + array.join("</li><li>") + "</li></ul>";


    // var indexNum = 0;
    // for (var index = 0: index < array.length; index++) {
    //   var item = document.createElement("li");
    //   item.innerHTML = array[i];
    //   items.appendChild(item);
    // }

    //
    // for (var index = 0; index <= array.length; i++){
    //   document.getElementById("array").children[0].innerHTML += "<li>"+array[array.length-1]+"</li>";
    // }
    // return final;

    // return result;
    // for(var index = 0; index <result.length; index ++){

    // }


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
    var final = gameChanger(serve);
    console.log(serve);
    $("#outPut").text(final);

  event.preventDefault();
  });
});
