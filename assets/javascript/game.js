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

    var winNumber = Math.floor((Math.random() * 102) + 19); // will hold target number to win, will be random
    // random (19,120)

    var totoVal = Math.floor((Math.random() * 12) + 1); //random value for each crystal random(1, 12)
    var scarecrowVal = Math.floor((Math.random() * 12) + 1);
    var tinmanVal = Math.floor((Math.random() * 12) + 1);
    var lionVal = Math.floor((Math.random() * 12) + 1);

    var wins = 1;

    var losses = 0;

    var total = 0; //holds value user hits plus consecutive hits total

    console.log("Toto's", totoVal);
    console.log("Scarecrow's", scarecrowVal);
    console.log("Tinman's", tinmanVal);
    console.log("Lion's", lionVal);
    console.log("this is the Win Number", winNumber);

    $("#targetNum").html(winNumber); //displays the winning number on HTML!

    var totoVal = Math.floor((Math.random() * 12) + 1); //random value for each crystal random(1, 12)
    var scarecrowVal = Math.floor((Math.random() * 12) + 1);
    var tinmanVal = Math.floor((Math.random() * 12) + 1);
    var lionVal = Math.floor((Math.random() * 12) + 1);
    total = 0;
    $("#realScore").html(total); // displays guess total to HTML





    function startGame() {

        total = 0;
         $("#realScore").on("click", function() { //something happens when we click Lion
                    $("#realScore").attr("value", 0);
                    console.log("this is refreshed total", total);
                })
        var winNumber = Math.floor((Math.random() * 102) + 19);
        $("#targetNum").html(winNumber); //displays the winning number on HTML!

        var totoVal = Math.floor((Math.random() * 12) + 1); //random value for each crystal random(1, 12)
        var scarecrowVal = Math.floor((Math.random() * 12) + 1);
        var tinmanVal = Math.floor((Math.random() * 12) + 1);
        var lionVal = Math.floor((Math.random() * 12) + 1);
        
       // $("#realScore").html(total); // displays guess total to HTML

    };


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
    // On click events for each character
    $("#toto").on("click", function() { //something happens when we click Toto
            $("#toto").attr("value", totoVal);
            total += totoVal
            console.log("this is total toto", total);
            $("#realScore").html(total); //this updates the final total
            
            $("#scarecrow").on("click", function() { //something happens when we click Scarecrow  
                $("#scarecrow").attr("value", scarecrowVal);
                total += scarecrowVal
                console.log("this is total scarecrow", total);
                $("#realScore").html(total); //this updates the final total
                
                $("#tinman").on("click", function() { //something happens when we click Tinman
                    $("#tinman").attr("value", tinmanVal);
                    total += tinmanVal
                    console.log("this is total tinman", total);
                    $("#realScore").html(total); //this updates the final total
                })

                $("#lion").on("click", function() { //something happens when we click Lion
                    $("#lion").attr("value", lionVal);
                    total += lionVal
                    console.log("this is total lion", total);
                    $("#realScore").html(total); //this updates the final total
                })
                if (total < winNumber) {
                    $("#realScore").html(total);
                    console.log(total);
                } else if (total > winNumber) {
                    $("#realScore").html(total);
                    alert("Too many steps, no seeing Oz today!");
                    losses++;
                    $("#loss-counter").html(losses);
                    startGame();
                } else {
                    $("#realScore").html(total);
                    alert("YOU WON! We're off to see the wonderful Oz today!");
                    wins++;
                    $("#win-counter").html(losses);
                    startGame();
                }
            });

        })
        


}); //document ready closing
