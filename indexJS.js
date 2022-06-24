
// *********************** START RPS GAME CODE ***********************
// keeps track of players score and the number choice of the player to pick an item
let playerCnum = 0;
let compCnum = 0;
let compScore = 0;
let playerScore = 0;

const winningMessageElement = document.getElementById('winningMessage1');
const restartButton1 = document.getElementById('restartButton1');
const winningMessageTextElement = document.querySelector('[data-winning-message-text1]');

// RPS main function, collects all of the functions needed to display evrything on the HTML file
restartButton1.addEventListener('click', realoadPage)

function RPS() {
    let name = document.getElementById("RPSnameBox").value.toUpperCase();
    //document.getElementById("RPSname").innerHTML = name.toLocaleUpperCase();
    document.getElementById("RPSvs").innerHTML = "VS";
    //document.getElementById("RPSopponent").innerHTML = "COMPUTER";
    playerChoice();
    computerChoice();  
    document.getElementById("RPSplayerScore").innerHTML = name + ": " + playerScore; 
    document.getElementById("RPScompScore").innerHTML = "COMPUTER:" + compScore;
    winner();
}

function RPSrestart() {
    const compPic = document.getElementById("RPScompPic");
    const playerPic = document.getElementById("RPSplayerPic");

    compPic.remove();
    playerPic.remove();
    winningMessageElement.classList.remove('show')
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
        playerCnum = prompt("What is your choice? (1) rock, (2) paper, (3) scissors: ");
        if (playerCnum < 1 || playerCnum > 3) {
            continue;
        }
        return playerCnum;
    }
}

// Randomizes a number between 1 and 3 that decides the picture chose by the computer
function computerNum() {
    compCnum = Math.floor(Math.random() * 3) + 1;
    return compCnum;
}

// This fuinction decides the winner depending on the number that they chose
function winner() {
    var playerName = document.getElementById("RPSnameBox").value.toUpperCase();
    var compWin = "COMPUTER wins!";
    var playerWin  = playerName + " Wins!";
    var tie = "Draw!";

    
    if (playerCnum == 1 && compCnum == 3) {
        playerScore ++;
        winningMessageTextElement.innerText = playerWin;
    } else if (playerCnum == 2 && compCnum == 1) {
        playerScore ++;
        winningMessageTextElement.innerText = playerWin;
    } else if (playerCnum == 3 && compCnum == 2) {
        playerScore ++;
        winningMessageTextElement.innerText = playerWin;
    } else if (compCnum == 1 && playerCnum == 3) {
        compScore ++;
        winningMessageTextElement.innerText = compWin;
    } else if (compCnum == 2 && playerCnum == 1) {
        compScore ++;
        winningMessageTextElement.innerText = compWin;
    } else if (compCnum == 3 && playerCnum == 2) {
        compScore ++;
        winningMessageTextElement.innerText = compWin;
    } else {
        winningMessageTextElement.innerText = tie;
    }
    winningMessageElement.classList.add("show");
}

// this function displays the name box and the enter button, it is then to be used once the user chooses tp play RPS
function showNameBox() {
    document.getElementById("RPSnameBox").style.display="block";
    document.getElementById("RPSEnterButton").style.display="block";
}
// removes namebox after it is used
function removeNameBox() {
    document.getElementById("RPSnameBox").style.display="none";
    document.getElementById("RPSEnterButton").style.display="none";
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
    return setTimeout(() => window.location.reload(), 0);
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