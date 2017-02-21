$(document).ready(function() {

var winNumber = 0; // will hold target number to win, will be random
// random (19,120)

var hitNumber = 0; // will hold the value user hits

var crystalVal = 0; //random value for each crystal random(1, 12)

var hitAdd = 0; //will hold the total value after successive hits

var winCounter = 0;

var lossCounter = 1;


function startGame()
/*
	1. random value for game is selected and displayed to HTML
	2. random values for crystals are assigned to their image
	3. Starting score is zero, and our array or number list is always equal to zero
*/

function checkHit(hit) //function that gets input from user
/*
	1. Player hits crystal and hold that value
	2. I want a conditional statement if the user value is less than "Win number" than user gets another try. 
		If user value is over "Win number" then game ends
 
*/

function updateScore()
/*
	1. It's going to update the new score. Add the old value to the new value
	2. It's going to update the HTML with the new value, and the "Win number"
	3. It's going to determine if the user won the game or not
*/


/*
	1. It's going to take in the user click and turn it into a value, 
	2. Then pass it through the checkHit function.
*/