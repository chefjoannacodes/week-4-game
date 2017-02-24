$(document).ready(function() {

    var winNumber = Math.floor((Math.random() * 102) + 19); // will hold target number to win, will be random
    // random (19,120)
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
   $("#realScore").html(total); // displays guess total to HTML





function startGame() {



          $("#targetNum").html(winNumber); //displays the winning number on HTML!
        
   var totoVal = Math.floor((Math.random() * 12) + 1); //random value for each crystal random(1, 12)
   var scarecrowVal = Math.floor((Math.random() * 12) + 1);
   var tinmanVal = Math.floor((Math.random() * 12) + 1);
   var lionVal = Math.floor((Math.random() * 12) + 1);
   total = 0;
   $("#realScore").html(total); // displays guess total to HTML
 };


// On click events for each character
$("#toto").on("click", function() { //something happens when we click Toto
$("#toto").attr("value", totoVal);
  total += totoVal
  console.log("this is total toto", total);
})

$("#scarecrow").on("click", function() { //something happens when we click Scarecrow  
$("#scarecrow").attr("value", scarecrowVal);
  total += scarecrowVal
  console.log("this is total scarecrow", total);
})

$("#tinman").on("click", function() { //something happens when we click Tinman
$("#tinman").attr("value", tinmanVal);
  total += tinmanVal
  console.log("this is total tinman", total);
})

$("#lion").on("click", function() { //something happens when we click Lion
$("#lion").attr("value", tinmanVal);
  total += tinmanVal
  console.log("this is total lion", total);

})

$("#realScore").html(total);
$("#realScore").append(total); //*****This displays the updated Guess Total for the User on HTML
console.log("i updated total", total);


});



