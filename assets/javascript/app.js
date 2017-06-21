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
 	 $("#scoreDisplay").text("Incorrect: " + incorrect  + " Correct: " + correct);

}

function checkQuestion(answer){
	
	if(document.getElementById(answer) != null && document.getElementById(answer).checked){
 		
		//switch statement to check the values of the answers
		switch(answer){

			case "examquestions0":
				correct += examquestions0; 
				break;
			case "examquestions1":
				correct += examquestions1; 
				break;			

			case "examquestions2":
				correct += examquestions2; 
				break;

			case "examquestions3":
				correct += examquestions3; 
				break;	

			case "examquestions4":
				correct += examquestions4; 
				break;	

			case "examquestions5":
				correct += examquestions5; 
				break;	

			case "examquestions6":
				correct += examquestions6; 
				break;	

			case "examquestions7":
				correct += examquestions7; 
				break;

			case "examquestions8":
				correct += examquestions8; 
				break;

			case "examquestions9":
				correct += examquestions9 
				break;	

			case "examquestions10":
				correct += examquestions10; 
				break;	

			case "examquestions11":
				correct += examquestions11; 
				break;	

			case "examquestions12":
				correct += examquestions12; 
				break;	

			case "examquestions13":
				correct += examquestions13; 
				break;	

			case "examquestions14":
				correct += examquestions14; 
				break;

			case "examquestions15":
				correct += examquestions15; 
				break;


		}




 		//correct += document.getElementbyId(answer).value;
 	}
}

//function to show the form element when the button is clicked 
function showForm() {

    var x = document.getElementById('examDisplay');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}


//reset function? 

/*function resetGame{

	var TOTALTIME = 10;
	var countDown = 0;
	var correct = 0;
	var incorrect = 0;
	var totalQuestions = 4;
	//$("#examDisplay").hide();
}

*/

//Event flow for the quiz game

$(document).ready(function() {

	//hide the examform div from view
	$("#examDisplay").hide();
	//click event for the button
	$("#startButton").click(function(){
		//show the exam questions to the player
		showForm();
		setup();
		myInterval = setInterval(timer, 1000);
		//resetGame();

	});


});
