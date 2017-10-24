function startGame () {
  var wannaPlay = prompt("Do you want to play a game against the Almighty Grant? (yes,no)");
  if (wannaPlay === "yes") {
    var username = prompt("What is your name?");
    startCombat(username);
  }
}

startGame();

function startCombat(name) {
  var username = name;
  var playerScore = 40;
  var grantScore = 10;
  var grantLosses = 0;

  function getDamage() {
    return Math.floor((Math.random() * 5) + 1)
  }  
  
  while (playerScore > 0) {
    var playAgain = prompt("attack or quit?");
    
    if (playAgain.toLowerCase() === "attack") {
      playerScore -= getDamage();
      grantScore -= getDamage();
      console.log("Almight Grant health points" + grantScore);
      console.log(username + " health points " + playerScore);

      if (playerScore <= 0) {
        console.log("you lose");
      } else if (grantScore <=0 && grantLosses ===2) {
          console.log("you win!");
          break;
        } else if (grantScore <= 0) {
          grantScore = 10;
          grantLosses ++;//adds one at a time
          console.log("You've won! " + "Number of times Grant Lost = " + grantLosses);
        }
    } else if (playAgain.toLowerCase() === "quit") {
      console.log("You got away!");
      break;
    }
    
    }
} 

  

