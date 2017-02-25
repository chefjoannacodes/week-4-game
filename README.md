# week-4-game


## GitHub link 
https://github.com/chefjoannacodes/week-4-game.git

## This game is a guessing game. At the start, the player is given a random number that must be reached for a win. There are 4 characters from the Wizard of Oz that have different random values at the start of each game. Their values are hidden from the player. By clicking on the characters, the player's total goes up, according to the values assigned to the characters. A win is made when the player's total matches the random number given at the start of the game. 

## Requirements
####   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


## Technologies Used
#### 
- HTML
- CSS
- Javascript
- Jquery

## Code Explaination
- I started by generating a random number for the "WinNumber" and random numbers for the 4 characters. Then, using jQuery, I displayed the player's total using the code 
```
  $("#realScore").html(total);
 ```
 I updated the player's total by writing this code for each character. The global variable "total" would be updated for clicks of any of the characters.
```
   $("#toto").on("click", function() { //something happens when we click Toto
            $("#toto").attr("value", totoVal);
            total += totoVal
            console.log("this is total toto", total);
            $("#realScore").html(total);
```
I used an if/elseif/else statement at the bottom of the code to determine if the player won or loss, and store those win or losses in the HTML.




