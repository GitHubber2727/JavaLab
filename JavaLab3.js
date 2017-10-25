function startGame () {
  var play = prompt ("Would you like to start game? yes or no");
  if (play === "yes") {
    var userName = prompt("what is your name");
    character.name = userName;
    startCombat();
  }
}


var character = {
  name: null,
  play: 40,
  wins: 0,
  healCount: 0,
  generateAttackDamage: function () {
    return Math.floor(Math.random() * 3) + 1
  },
  heal: function () {
    this.play += Math.floor(Math.random() * 10) + 1}
  };

var grant = {
  name: "Almighty Grant",
  health: 10,
  generateAttackDamage: function () {
    return Math.floor(Math.random() * 3) + 1
  }
};


startGame();


function startCombat () {

  while(character.play > 0 && grant.health > 0 && character.wins < 3) {
    var playAgain = prompt("attack or quit or heal?");
    if (playAgain === "attack") {


      character.play -= grant.generateAttackDamage();
      grant.health -= character.generateAttackDamage();

      console.log(grant.name + " standing" + grant.health);
      console.log(character.name + " standing " + character.play);

      if (grant.health <=0 && character.play>0) {
        character.wins +=1
        console.log("next round");
        if (character.wins<3) {
          grant.health = 10;
        }
      }

      if(grant.health > 0 && character.play <= 0) {
        console.log("you lost against the computer!");
      } else if (grant.health <= 0 && character.play > 0 && character.wins===3) {
        console.log ("you won!")
      }

    }  else if (playAgain ==="quit")  {
      console.log("bye!")
      break;

    }
    else if (playAgain ==="heal") {
      if (character.healCount <= 1) {
        character.healCount++;
        character.heal ();
        grant.generateAttackDamage();
        console.log("Current status of character" + character.play + "Current status of user" + grant.health)
      } else if (character.healCount > 1) {
          return "you can't heal, either play or quit!";
      }
      }



    }
  }