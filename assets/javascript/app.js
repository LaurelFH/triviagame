
//global variables 
//score related variables 
var correct = 0;
var incorrect = 0;
var totalQuestions = 4;

//timer related variables 
var countDown = "";


//click event for the button
$("#timerDisplay").click(startClock);





///////////////////functions 

//starts the clock once the button is clicked and counts down from 2 mins or 120000 milliseconds for the form completion 
/*function startClock(minutes, seconds){
var mins =2;
var sec = 60;
document.getElementbyId("timerDisplay").innerHTML = mins + ":" + sec;
	
	sec--;

	if(sec == 00){

		mins--;
		if(mins == 0){
			alert("time is up!");
		}
	}


}

*/

function startClock(){
	var timeLeft = 2;
	var seconds;




}

//displays the values of the clock in the timerdisplay space 

//tallys up the number of correct and incorrect responses (the correct have a value of 1 in the buttons)
function countQuestions(){

	//check if selected and add the value of the radio buttons up
 	checkQuestion("examquestions-0");
 	checkQuestion("examquestions-1");


 	//need to find incorrect, we have the total and the number correct total -correct?


}

function checkQuestion(answer){

	if(document.getElementById(answer).checked){

 		correct += document.getElementbyId(answer).value;
 	}


}




//Event flow for the quiz game

$(document).ready(function() {
	//start the coutndown clock when clicked 	
	$("button").click(startClock()
		alert("here we go");
	});

		//


	}



