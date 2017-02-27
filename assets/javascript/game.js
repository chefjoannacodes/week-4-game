$(document).ready(function() {

    // Gets Link for Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "Assets/audio/Israel Kamakawiwoole - Somewhere Over The RainbowWhat A Wonderful World.m4a");

    // Theme Button
    $(".theme-button").on("click", function() {
        audioElement.play();
    });

    $(".pause-button").on("click", function() {
        audioElement.pause();
    });

    //Scores (player's and target)
    var total = 0; //holds value user hits plus consecutive hits total
    var winNumber = 0; // will hold target number to win

    //Wins and Losses
    var wins = 1;
    var losses = 0;


    //FUNCTIONS
    //  will be random target number (19,120)
    var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    var startGame = function() {
        //Reset player's number to zero
        total = 0;

        winNumber = getRandom(19, 120);

        //setting values for each crystal (between 1 and 12)
        totoVal = getRandom(1, 12);
        scarecrowVal = getRandom(1, 12);
        tinmanVal = getRandom(1, 12);
        lionVal = getRandom(1, 12);


        //Changing HTML to show player's score and target score
        $("#targetNum").html(winNumber); //displays the winning number on HTML!
        $("#realScore").html(total);

        //Testing console
        console.log("Toto's", totoVal);
        console.log("Scarecrow's", scarecrowVal);
        console.log("Tinman's", tinmanVal);
        console.log("Lion's", lionVal);
        console.log("this is the Win Number", winNumber);
        console.log("this is player's score", total);
        console.log("Toto: " + totoVal + "Scarecrow: " + scarecrowVal + "Tinman: " + tinmanVal + "Lion: " + lionVal);
    };


    var checkWin = function() {

        if (total > winNumber) {
            alert("Too many steps, no seeing Oz today!");
            console.log("You lost");
            //Add to loss counter
            losses++;
            //Change loss count on HTML
            $("#loss-counter").html(losses);
            startGame();
        } else if (total === winNumber) {
            alert("YOU WON! We're off to see the wonderful Oz today!");
            console.log("You won!");
            $(".theme-button").get().play();
            //adds to win counter
            wins++;
            //Change win count on HTML
            $("#win-counter").html(wins);
            startGame();
        }
    };
   
  

        

        //Change the HTML to reflect user's score
        $("#realScore").html(total);

        //Call the checkWin function
        // checkWin();

        //Testing console
        console.log("Your score: " + total);
   


    // MAIN PROCESS
    //=================================

    //Starts the Game the first time.

    startGame();
checkWin();
 //Respond to clicks on the characters
    $("#toto").click(function() {
        $("#toto").attr("value", totoVal);
         //change player's score
        total += totoVal
        checkWin();
        $("#realScore").html(total);
        console.log("This is toto's total", total);
       
    });

    $("#scarecrow").click(function() {
        $("#scarecrow").attr("value", scarecrowVal);
        total += scarecrowVal
        $("#realScore").html(total);
        checkWin();
        console.log("this is total scarecrow", total);
        
    });

    $("#tinman").click(function() {
        $("#tinman").attr("value", tinmanVal);
        total += tinmanVal
        $("#realScore").html(total);
        checkWin();
        console.log("this is total tinman", total);
    });

    $("#lion").click(function() {
        $("#lion").attr("value", lionVal);
        total += lionVal
        $("#realScore").html(total);
        checkWin();
        console.log("this is total lion", total);
        
    });


    // On click events for each character
    // $("#toto").on("click", function() { //something happens when we click Toto
    //     $("#toto").attr("value", totoVal);
    //     total += totoVal
    //     console.log("this is total toto", total);
    //     $("#realScore").html(total); //this updates the final total

    //     $("#scarecrow").on("click", function() { //something happens when we click Scarecrow  
    //         $("#scarecrow").attr("value", scarecrowVal);
    //         total += scarecrowVal
    //         console.log("this is total scarecrow", total);
    //         $("#realScore").html(total); //this updates the final total

    //         $("#tinman").on("click", function() { //something happens when we click Tinman
    //             $("#tinman").attr("value", tinmanVal);
    //             total += tinmanVal
    //             console.log("this is total tinman", total);
    //             $("#realScore").html(total); //this updates the final total
    //         })

    //         $("#lion").on("click", function() { //something happens when we click Lion
    //                 $("#lion").attr("value", lionVal);
    //                 total += lionVal
    //                 console.log("this is total lion", total);
    //                 $("#realScore").html(total); //this updates the final total
    //             })
    // if (total > winNumber) {
    //     $("#realScore").html(total);
    //     alert("Too many steps, no seeing Oz today!");
    //     losses++;
    //     $("#loss-counter").html(losses);
    //     startGame(total);
    // } else if (total === winNumber) {
    //     $("#realScore").html(total);
    //     alert("YOU WON! We're off to see the wonderful Oz today!");
    //     wins++;
    //     $("#win-counter").html(losses);
    //     startGame(total);
    // }
});






//console.log("when we start game total is", total);
$("#toto").on("click", function() {
    $("#toto").animate({ height: "210px", width: "210px" });

});
$("#toto").on("click", function() {
    $("#toto").animate({ height: "200px", width: "200px" });
});
$("#toto").click(function() {
    $("#toto").attr('src', "assets/images/road-to-oz.jpg");
});


$("#scarecrow").on("click", function() {
    $("#scarecrow").animate({ height: "210px", width: "210px" });
});
$("#scarecrow").on("click", function() {
    $("#scarecrow").animate({ height: "200px", width: "200px" });
});

$("#tinman").on("click", function() {
    $("#tinman").animate({ height: "210px", width: "210px" });
});
$("#tinman").on("click", function() {
    $("#tinman").animate({ height: "200px", width: "200px" });
});

$("#lion").on("click", function() {
    $("#lion").animate({ height: "210px", width: "210px" });
});
$("#lion").on("click", function() {
    $("#lion").animate({ height: "200px", width: "200px" });
});






//document ready closing
