
//global variables 
//score related variables 
var correct = 0;
var incorrect = 0;

//timer related variables 
var countDown = 2;








//form interactivity related variables? 






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
	var sec = setInterval(startclock(){
		math.floor(currentTime % (1000 * 60))/1000);
	})

$("#timerDisplay").html = secs;

	if(currentTime < 0){

		clearInterval(sec);
		$("timerDisplay").html = "Time is up!";
	}

}, 1000);

//tallys up the number of correct and incorrect responses (the correct have a value of 1 in the buttons)

function countQuestions(){




}




//Event flow for the quiz game

$(document).ready(function() {
	
	setInterval(startclock, 1000);

	}



