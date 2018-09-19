function checkAnswer()
  {         
var amountCorrect = 0;

var amountIncorrect = 0;
         
for(var i = 1; i <= 6; i++) {
  var radios = document.getElementsByName('answers'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;
    }
    else if(radio.value == "incorrect" && radio.checked){
        amountIncorrect++;
    }
   
  }
 }                   
   console.log(amountCorrect);
  
   $(".incorrecttotal").text("Incorrect total: "  + amountIncorrect)
   $(".correcttotal").text("Correct total: " + amountCorrect)
   console.log(amountIncorrect);
   
  }





$(document).ready(function () {
    $(".main-section").hide();
    $(".finalscreen").hide();

})



$(".start-button").on("click", function () {
    $(".start-button").hide();
    $(".main-section").show();
    $(".finalscreen").hide();
    console.log("hi");
})

$(".submit-button").on("click", function () {
    $(".start-button").hide();
    $(".main-section").hide();
    $(".finalscreen").show();
    console.log("hello")
checkAnswer();

})



