$(document).ready(function() {

    var winNumber = Math.floor((Math.random() * 102) + 19); // will hold target number to win, will be random
    // random (19,120)
    var firstNumber = 0;
    var secondNumber = 0;
    var hasNumber = false;
    var hitsNumber = 0; // will hold the value user hits

    var update = 0; //holds value user hits plus consecutive hits total
    var totoVal = Math.floor((Math.random() * 12) + 1); //random value for each crystal random(1, 12)

    var scarecrowVal = Math.floor((Math.random() * 12) + 1);
    var tinmanVal = Math.floor((Math.random() * 12) + 1);
    var lionVal = Math.floor((Math.random() * 12) + 1);


    //var hitAdd = 0; //will hold the total value after successive hits

    var wins = 0;

    var losses = 1;

    var update = 0;

    var total = 0;

console.log(totoVal);
console.log(scarecrowVal);
console.log(tinmanVal);
console.log(lionVal);
console.log(winNumber);
 // the startGame function is called when you win or lose a game.
        // function startGame() {
        //     //generates new random number
        //     winNumber = Math.floor((Math.random() * 102) + 19);
        //     //displays number
            

          $("#targetNum").html(winNumber);
        //     //generates new values for friends
        //     totoVal = Math.floor((Math.random() * 12) + 1);
        //     scarecrowVal = Math.floor((Math.random() * 12) + 1);
        //     tinmanVal = Math.floor((Math.random() * 12) + 1);
        //     lionVal = Math.floor((Math.random() * 12) + 1);
        //     // resets guesses to 0
        //     hitsNumber = 0;
        //     // display guess total
        //     $("#realScore").html(hitsNumber);
           
            
        // };
 
//  $("img.friends").click( function(){});

// $("img.friends").on("click", function(){});

//     on("click", function(){

//    alert("test");
//});

//$("#toto, #scarecrow, #tinman, #lion").on("click", function(){});
  //  alert("You clicked Toto");
//});

// $("img.friends").click( function(){
//    alert($(this).attr("id"));
// });
// });
// $("img.friends").find("img").click( function(){});
    
//    alert("You clicked toto!");

//};
//   $("#scarecrow").click(function() {}).append(scarecrowVal);
//     console.log(scarecrowVal);

//     $("#tinman").click(function() {}).append(tinmanVal);
//     console.log(tinmanVal);

//     $("#lion").click(function() {}).append(lionVal);
//     console.log(lionVal);


// var totoImgVal = $('#toto');
// newTotoVal.innerHTML = totoVal;

// var newTotoVal = $('<div' + totoVal + '<div>');
//  totoImgVal.append(newTotoVal);
// console.log(newTotoVal);
// });

   //  $(document).on("click", "img", function() {

   //  if ($(this).hasClass("number") && !winNumber) {
   //  	hasNumber = true;

   //  	//If we haven't reached to total yet...
   //  	if (hitsNumber === false) {

   //  		//Then grab the number of the value clicked
   //  	firstNumber += $(this).attr("img", function(totoVal){
   //  			//print first number to page
   //  			console.log(firstNumber);
   //  	//Print it to the html
   //  	$("#first-number").html(firstNumber);
   //  })
   //  };//if we have reached the target
   // else {

   //  }

   //  	});
   //  	});
   //  });
   //  }

   //  $("#dorothy").on("click", function() {
   //      $("#dorothy").animate({ top: "-=200px" }, "normal");
   //  });

   



    //1. random value for game is selected and displayed to HTML
    //$(".targetNum").html(winNumber);


    //1. Player hits crystal, onClick event and holds that value


    //$(".toto").append(totoVal);

    $("#toto").on("click", function() {
    //update(totoVal);	
console.log("click");
$("#toto").attr("value", totoVal);
  total += totoVal
  console.log("this is total", total);
})
});




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
