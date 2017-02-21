//$(document).ready(function() {

        var winNumber = Math.floor((Math.random() * 102) + 19); // will hold target number to win, will be random
        // random (19,120)

        var hitsNumber = 0; // will hold the value user hits

        var totoVal = Math.floor((Math.random() * 12) + 1); //random value for each crystal random(1, 12)
 
        var scarecrowVal = Math.floor((Math.random() * 12) + 1);
        var tinmanVal = Math.floor((Math.random() * 12) + 1);
        var lionVal = Math.floor((Math.random() * 12) + 1);


        //var hitAdd = 0; //will hold the total value after successive hits

        var wins = 0;

        var losses = 1;




        //1. random value for game is selected and displayed to HTML
        //$(".targetNum").html(winNumber);


        //1. Player hits crystal, onClick event and holds that value

        $(".toto").on("click", function() {
            update(totoVal);
        });
        $(".scarecrow").click(function() {
            update(scarecrowVal);
        });
        $(".tinman").click(function() {
            update(tinmanVal);
        });
        $(".lion").click(function() {
            update(lionVal);
        });
        console.log(totoVal);
        console.log(scarecrowVal);
        console.log(tinmanVal);
        console.log(lionVal);



/*

        // the startGame function is called when you win or lose a game.
        function startGame() {
            //generates new random number
            winNumber = Math.floor((Math.random() * 102) + 19);
            //displays number
            $("#targetNum").html(winNumber);
            //generates new values for friends
            totoVal = Math.floor((Math.random() * 12) + 1);
            scarecrowVal = Math.floor((Math.random() * 12) + 1);
            tinmanVal = Math.floor((Math.random() * 12) + 1);
            lionVal = Math.floor((Math.random() * 12) + 1);
            // resets guesses to 0
            hitsNumber = 0;
            // display guess total
            $("#realScore").html(hitsNumber);
        
        };



        //This function will update the user's total guess value
        function update(friendVal) {
            //Increase the user's score according to chosen friend
            hitsNumber += friendVal;
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
