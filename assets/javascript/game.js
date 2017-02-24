$(document).ready(function() {

    var winNumber = Math.floor((Math.random() * 102) + 19); // will hold target number to win, will be random
    // random (19,120)
    var newTotal = 0;
    var hasNumber = false;

    var totoVal = Math.floor((Math.random() * 12) + 1); //random value for each crystal random(1, 12)
    var scarecrowVal = Math.floor((Math.random() * 12) + 1);
    var tinmanVal = Math.floor((Math.random() * 12) + 1);
    var lionVal = Math.floor((Math.random() * 12) + 1);

    var wins = 0;

    var losses = 1;

    var total = 0;//holds value user hits plus consecutive hits total

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
   $("#realScore").html(newTotal); // displays guess total to HTML





function startGame() {



          $("#targetNum").html(winNumber); //displays the winning number on HTML!
        
   var totoVal = Math.floor((Math.random() * 12) + 1); //random value for each crystal random(1, 12)
   var scarecrowVal = Math.floor((Math.random() * 12) + 1);
   var tinmanVal = Math.floor((Math.random() * 12) + 1);
   var lionVal = Math.floor((Math.random() * 12) + 1);
   total = 0;
   $("#realScore").html(total); // displays guess total to HTML
    
 };

//function update() {

// On click events for each character
$("#toto").on("click", function() { //something happens when we click Toto
$("#toto").attr("value", totoVal);
  total += totoVal
  console.log("this is total toto", total);
})
  $("#toto").on("click", function() {
      $("#toto").animate({ height:"210px", width: "210px"});
      
});
$("#toto").on("click", function() {
      $("#toto").animate({ height:"200px", width: "200px"});
});

$("#scarecrow").on("click", function() { //something happens when we click Scarecrow  
$("#scarecrow").attr("value", scarecrowVal);
  total += scarecrowVal
  console.log("this is total scarecrow", total);
  })
$("#scarecrow").on("click", function() {
      $("#scarecrow").animate({ height:"210px", width: "210px"});
});
$("#scarecrow").on("click", function() {
      $("#scarecrow").animate({ height:"200px", width: "200px"});
});


$("#tinman").on("click", function() { //something happens when we click Tinman
$("#tinman").attr("value", tinmanVal);
  total += tinmanVal
  console.log("this is total tinman", total);
})
$("#tinman").on("click", function() {
      $("#tinman").animate({ height:"210px", width: "210px"});
});
$("#tinman").on("click", function() {
      $("#tinman").animate({ height:"200px", width: "200px"});
});

$("#lion").on("click", function() { //something happens when we click Lion
$("#lion").attr("value", tinmanVal);
  total += tinmanVal
  console.log("this is total lion", total);
})
$("#lion").on("click", function() {
      $("#lion").animate({ height:"210px", width: "210px"});
});
$("#lion").on("click", function() {
      $("#lion").animate({ height:"200px", width: "200px"});
});

function update(character) {
    total += totoVal + tinmanVal + scarecrowVal + lionVal;
console.log("string total", total);
 newTotal = parseInt(total);
 console.log("integer total", newTotal);
$("#realScore").html(newTotal);
};
//$("#realScore").append(total); //*****This displays the updated Guess Total for the User on HTML
//console.log("i updated total", total);

});

function winOrLose() {
    $("#realScore").empty();
    $("#realScore").append(newTotal);
    console.log("I'm the updated total", total);

if (newTotal > winNumber) {
    // adds a loss
    losses++;
    console.log("our loss", losses);
    // display updated losses.
    $("#loss-counter").html(losses);
    //calls startGame to reset
    startGame();
} else if (newTotal == winNumber) {
    //add a win
    wins++;
    //display updated win
    $("#win-counter").html(wins);
    //calls the startGame to reset
    startGame();

    };


/**/
};















