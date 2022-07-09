
// *********************** START RPS GAME CODE ***********************
// keeps track of players score and the number choice of the player to pick an item
let playerCnum = 0;
let compCnum = 0;
let compScore = 0;
let playerScore = 0;

// RPS main function, collects all of the functions needed to display evrything on the HTML file
restartButton1.addEventListener('click', realoadPage)

function RPS() {
    let name = document.getElementById("RPSnameBox").value.toUpperCase();
    document.getElementById("RPSname").innerHTML = name.toLocaleUpperCase();
    document.getElementById("RPSvs").innerHTML = "VS";
    document.getElementById("RPSopponent").innerHTML = "COMPUTER"; 
    //document.getElementById("RPSplayerScore").innerHTML = name + ": " + playerScore; 
    //document.getElementById("RPScompScore").innerHTML = "COMPUTER:" + compScore;
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
    //var playerChoice = playerNum();

    if (playerCnum == 1) {
        img.src = "rock.jpg";
        return div.appendChild(img);
    }
    else if (playerCnum == 2) {
        img.src = "paper.jpg";
        return div.appendChild(img);
    }
    else if (playerCnum == 3) {
        img.src = "scissors.jpg";
        return div.appendChild(img);
    }
}


function RPSrock() {
    playerCnum = 1;
    return playerCnum;
}

function RPSpaper() {
    playerCnum = 2;
    return playerCnum;
}

function RPSscissors() {
    playerCnum = 3;
    return playerCnum;
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
        document.getElementById("RPSwinningMessage").innerHTML = playerWin;
    } else if (playerCnum == 2 && compCnum == 1) {
        playerScore ++;
        document.getElementById("RPSwinningMessage").innerHTML = playerWin;
    } else if (playerCnum == 3 && compCnum == 2) {
        playerScore ++;
        document.getElementById("RPSwinningMessage").innerHTML = playerWin;
    } else if (compCnum == 1 && playerCnum == 3) {
        compScore ++;
        document.getElementById("RPSwinningMessage").innerHTML = compWin;
    } else if (compCnum == 2 && playerCnum == 1) {
        compScore ++;
        document.getElementById("RPSwinningMessage").innerHTML = compWin;
    } else if (compCnum == 3 && playerCnum == 2) {
        compScore ++;
        document.getElementById("RPSwinningMessage").innerHTML = compWin;
    } else {
        document.getElementById("RPSwinningMessage").innerHTML = tie;
    }
}

// this function displays the name box and the enter button, it is then to be used once the user chooses tp play RPS
function showNameBox() {
    document.getElementById("RPSnameBox").style.display="block";
    document.getElementById("RPSEnterButton").style.display="block";
}
// removes namebox after it is used
function removeNameBox() {
    document.getElementById("rpsNameBox").style.display="none";
    document.getElementById("RPSnameBox").style.display="none";
    document.getElementById("RPSEnterButton").style.display="none";
    document.getElementById("rpsMakeChoice").style.display="block";
    document.getElementById("RPSrock").style.display="block";
    document.getElementById("RPSpaper").style.display="block";
    document.getElementById("RPSscissors").style.display="block";
    document.getElementById("RPSwinningMessage").style.display="block";
}

// ************************ END RPS GAME CODE *********************
function realoadPage() {
    return setTimeout(() => window.location.reload(), 0);
}

function dissapear() {
    document.getElementById("hideaway").style.display="none";
}