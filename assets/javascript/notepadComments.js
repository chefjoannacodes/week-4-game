


//$(".scarecrow").on("click", function() {
// update(scarecrowVal);
//});
//$(".tinman").on("click", function() {
// update(tinmanVal);
// });
// $(".lion").on("click", function() {
//  update(lionVal);
//});





//});




       


/*
        //This function will update the user's total guess value
        function update(friendVal) {
            //Increase the user's score according to chosen friend
            hitsNumber += friendVal;
            
var update = 0;



            //removes old total and replaces it with new total
            $("#realScore").html(empty);
            $("#realScore").html(append);
            //check to see if win or lose
            if (hitsNumber > winNumber) {
                //add a loss
                losses++;
                //displays loss
                $("#loss-counter").html(losses);
                alert("Oh no! Dorothy got caught up in another tornado!")
                    // to reset game
                startGame();
            };
        } else if(hitsNumber == targetNum) {
            wins++;
            $("#win-counter").html(wins);
            alert("Great job, you got Dorothy and her friends to the Wizard!");
            startGame();
        });

    

});


//function checkHit(hit) //function that gets input from user
// 2. I want a conditional statement if the user value is less than "Win number" than user gets another try. 
//	If user value is over "Win number" then game ends
//function updateScore()
/*
	1. It's going to update the new score. Add the old value to the new value
	2. It's going to update the HTML with the new value, and the "Win number"
	3. It's going to determine if the user won the game or not
*/


/*
	1. It's going to take in the user click and turn it into a value, 
	2. Then pass it through the checkHit function.
*/