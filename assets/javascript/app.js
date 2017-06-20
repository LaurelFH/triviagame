//score related variables 
var correct = 0;
var incorrect = 0;
var totalQuestions = 4;

//timer related variables 
//var TOTALTIME = 60;//restores the original time and I need to stop touching this :/ 
var TOTALTIME = 10;
var countDown = 0;
var myInterval; 

var examquestions0 = 1;
var examquestions1 = 0;
var examquestions2 = 0;
var examquestions3 = 0;
var examquestions4 = 1;
var examquestions5 = 0;
var examquestions6 = 0;
var examquestions7 = 0;
var examquestions8 = 1;
var examquestions9 = 0;
var examquestions10 = 0;
var examquestions11 = 0;
var examquestions12 = 1;
var examquestions13 = 0;
var examquestions14 = 0;
var examquestions15 = 0;


///////////////////functions 

//starts the clock once the button is clicked and counts down from 2 mins or 120000 milliseconds for the form completion 
function timer(){

	//timer should count down by 1 second and it should stop at 0
	countDown--;
	if(countDown == 0)
	{
		
		clearInterval(myInterval);
		countQuestions();
	}

	$("#timerDisplay").text(countDown);

}


//sets up the screen for the game questions after the button is clicked 
function setup(){

	countDown = TOTALTIME;




}

//starts the clock when the button is pressed 

/*function startClock(){
	var countDown = 60;
	var timer = setInterval(countDown--, 1000);
	
		if (countDown == 0){

	}


}
*/
//displays the values of the clock in the timerdisplay space 

//tallys up the number of correct and incorrect responses (the correct have a value of 1 in the buttons)
function countQuestions(){
	//check if selected and add the value of the radio buttons up
 	checkQuestion("examquestions0");
 	checkQuestion("examquestions1");
 	checkQuestion("examquestions2");
 	checkQuestion("examquestions3");
 	checkQuestion("examquestions4");
 	checkQuestion("examquestions5");
 	checkQuestion("examquestions6");
 	checkQuestion("examquestions7");
 	checkQuestion("examquestions8");
 	checkQuestion("examquestions9");
 	checkQuestion("examquestions10");
 	checkQuestion("examquestions11");
 	checkQuestion("examquestions12");
 	checkQuestion("examquestions13");
 	checkQuestion("examquestions14");
 	checkQuestion("examquestions15");

 	//need to find incorrect, we have the total and the number correct total -correct?
 	 incorrect = totalQuestions - correct;
 	 $("#scoreDisplay").text("<p>Incorrect: " + incorrect + "</p>" + "<p>Correct: " + correct + "</p>");

}

function checkQuestion(answer){
	alert(answer);
	if(document.getElementById(answer) != null && document.getElementById(answer).checked){
 		//correct += document.getElementbyId(answer).value;
 	}
}




//Event flow for the quiz game

$(document).ready(function() {
	//click event for the button
	$("#startButton").click(function(){
		setup();
		myInterval = setInterval(timer, 1000);

	});


});
