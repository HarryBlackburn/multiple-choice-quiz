function check(){

var question1 = document.question1.value;
var correct = 0; 

    if (question1 == "Manchester United FC") {
        correct++;
          
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementsById("number_correct").innerHTML = "You got" + correct + "correct.";
}