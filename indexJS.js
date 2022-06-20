
// *********************** START RPS GAME CODE ***********************
// keeps track of players score and the number choice of the player to pick an item
let playerCnum = 0;
let compCnum = 0;
let compScore = 0;
let playerScore = 0;

// RPS main function, collects all of the functions needed to display evrything on the HTML file
function RPS() {
    let name = document.getElementById("RPSnameBox").value;
    document.getElementById("RPSname").innerHTML = name.toLocaleUpperCase();
    document.getElementById("RPSvs").innerHTML = "VS";
    document.getElementById("RPSopponent").innerHTML = "COMPUTER";
    playerChoice();
    computerChoice();  
    winner();
    document.getElementById("reloadMessage").innerHTML = "(Please reaload the page to play again)";
    document.getElementById("RPSplayerScore").innerHTML = name + ": " + playerScore; 
    document.getElementById("RPScompScore").innerHTML = "COMPUTER:" + compScore;
}

// this sunction get the random number from compNum() function and connects that number to an specif picture
function computerChoice() {
    var img = document.createElement("img");
    var div = document.getElementById("RPScompPic");
    var randNum = computerNum();

    if (randNum == 1) {
        img.src = "rock.jpg";
        return div.appendChild(img);
    }
    else if (randNum == 2) {
        img.src = "paper.jpg";
        return div.appendChild(img);
    }
    else if (randNum == 3) {
        img.src = "scissors.jpg";
        return div.appendChild(img);
    }  
}

// calls the playerNum() function to obtain the number chosen by the user to the choose the specific picture
function playerChoice() {
    var img = document.createElement("img");
    var div = document.getElementById("RPSplayerPic");
    var playerChoice = playerNum();

    if (playerChoice == 1) {
        img.src = "rock.jpg";
        return div.appendChild(img);
    }
    else if (playerChoice == 2) {
        img.src = "paper.jpg";
        return div.appendChild(img);
    }
    else if (playerChoice == 3) {
        img.src = "scissors.jpg";
        return div.appendChild(img);
    }
}

// Prompts the user to pic a number that corresponds to an specifit icture and stores it in "playerCnum"
function playerNum() {
    while (true) { 
        this.playerCnum = prompt("What is your choice? (1) rock, (2) paper, (3) scissors: ");
        if (this.playerCnum < 1 || this.playerCnum > 3) {
            continue;
        }
        return this.playerCnum;
    }
}

// Randomizes a number between 1 and 3 that decides the picture chose by the computer
function computerNum() {
    this.compCnum = Math.floor(Math.random() * 3) + 1
    return this.compCnum;
}

// This fuinction decides the winner depending on the number that they chose
function winner() {
    let compRand = this.compCnum;
    let playerRand = this.playerCnum;
    let playerName = document.getElementById("RPSnameBox").value;
    let compWin = "The winner is: COMPUTER... Imagine loosing to a CPU, trash can";
    let playerWin  = "The winner is " + playerName + "!";
    let tie = "IT'S A TIE!";

    while (true) {
        if(playerRand == 1 && compRand == 1) {
            return document.getElementById("RPSwinner").innerHTML = tie;
        } else if (playerRand == 2 && compRand == 2) {
            return document.getElementById("RPSwinner").innerHTML = tie;
        } else if (playerRand == 3 && compRand == 3) {
            return document.getElementById("RPSwinner").innerHTML = tie;
        } else if(playerRand == 1 && compRand == 3) {
            playerScore ++;
            return document.getElementById("RPSwinner").innerHTML = playerWin;
        } else if(playerRand == 2 && compRand == 1) {
            playerScore ++;
            return document.getElementById("RPSwinner").innerHTML = playerWin;
        } else if(playerRand == 3 && compRand == 2) {
            playerScore ++;
            return document.getElementById("RPSwinner").innerHTML = playerWin;
        } else {
            compScore ++;
            return document.getElementById("RPSwinner").innerHTML = compWin;
        }
    }
}

// this function displays the name box and the enter button, it is then to be used once the user chooses tp play RPS
function showNameBox() {
    document.getElementById("RPSnameBox").style.display="block";
    document.getElementById("RPSEnterButton").style.display="block";
}

// ************************ END RPS GAME CODE *********************

function c4() {
    var promptName = prompt("Enter your name: ");
    let name = promptName.toUpperCase();
    alert("I will now show a pic of " + name + " for 3 seconds ;)");

    randPic();
    realoadPage();
}

function randNum() {
    var randNum = Math.floor(Math.random() * 8) + 1;
    return randNum;
}

function realoadPage() {
    return setTimeout(() => window.location.reload(), 2000);
}

function randPic() {
    var num = randNum();

    var img = document.createElement("img");
    var div = document.getElementById("funnyPic");

    if (num == 1) {
        img.src = "monkeyPic.jpg";
        return  div.appendChild(img);
    } else if (num == 2) {
        img.src = "chad.jpg";
        return div.appendChild(img);
    } else if (num == 3) {
        img.src = "beetlejuice.jpg";
        return  div.appendChild(img);
    } else if (num == 4) {
        img.src = "funnyBDude.jpg";
        return div.appendChild(img);
    } else if (num == 5) {
        img.src = "uglyFish.jpg";
        return div.appendChild(img);
    } else if (num == 6) {
        img.src = "uglyMessi.jpg";
        return div.appendChild(img);
    } else if (num == 7) {
        img.src = "uglyRat.jpg";
        return div.appendChild(img);
    } else if (num == 8) {
        img.src = "uglyRonaldo.jpg";
         return div.appendChild(img);
    }

}

function dissapear() {
    document.getElementById("hideaway").style.display="none";
    
}