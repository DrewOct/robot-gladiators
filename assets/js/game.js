var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);

// fight function
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    // Ask players if they want to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");
    window.alert("Welcome to Robot Gladiators!");var playerName = window.prompt("What is your robot's name?");
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;
    
    var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
    var enemyHealth = 50;
    var enemyAttack = 12;
    
    console.log(enemyNames);
    console.log(enemyNames.length);
    console.log(enemyNames[0]);
    console.log(enemyNames[3]);
    
    // fight function (now with parameter for enemy's name)
    var fight = function(enemyName) {
      while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
          }
        }
    
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
          window.alert(enemyName + ' has died!');
    
          // award player money for winning
          playerMoney = playerMoney + 20;
    
          // leave while() loop since enemy is dead
          break;
        } else {
          window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }
    
        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
          enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );
    
        // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + ' has died!');
          // leave while() loop if player is dead
          break;
        } else {
          window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
      } // end of while loop
    }; // end of fight function
    
    // fight each enemy-robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyNames.length; i++) {
      // if player is still alive, keep fighting
      if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
    
        // reset enemyHealth before starting new fight
        enemyHealth = 50;
    
        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;
    
        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
      }
      // if player isn't alive, stop the game
      else {
        window.alert('You have lost your robot in battle! Game Over!');
        break;
      }
    }
    


    console.log(promptFight);

    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

    
// check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
    } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;

    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}

// if player chooses to skip
} if (promptFight === "skip" || promptFight === "SKIP") {

    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }
    window.alert(playerName + " has chosen to skip the fight!");
    // if player did not choose skip or fight in the prompt

} else {
    window.alert("You need to choose a valid option. Try again!");
}
    }

};

// run fight function to start game

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50
    // call fight function with enemy-robot
    fight(pickedEnemyName);
};
