
// *********************** START RPS GAME CODE ***********************
//RPS MAIN

let playerCnum = 0;
let compCnum = 0;

function RPSNameBox() {
    showNameBox();
}

function RPS() {
    let name = document.getElementById("RPSnameBox").value;
    document.getElementById("RPSname").innerHTML = name.toLocaleUpperCase();
    document.getElementById("RPSvs").innerHTML = "VS";
    document.getElementById("RPSopponent").innerHTML = "COMPUTER";
    playerChoice();
    computerChoice();  
    winner();
    document.getElementById("reloadMessage").innerHTML = "(Please reaload the page to play again)";
}
   
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

function playerNum() {
    
    while (true) { 
        this.playerCnum = prompt("What is your choice? (1) rock, (2) paper, (3) scissors: ");
        if (this.playerCnum < 1 || this.playerCnum > 3) {
            continue;
        }
        return this.playerCnum;
    }
}

function computerNum() {
    this.compCnum = Math.floor(Math.random() * 3) + 1
    return this.compCnum;
}

function winner() {
    let compRand = this.compCnum;
    let playerRand = this.playerCnum;
    let playerName = document.getElementById("RPSnameBox").value;
    let compWin = "The winner is: COMPUTER... Imagine loosing to a CPU, trash can";
    let playerWin  = "The winner is " + playerName + "!";
    let tie = "IT'S A TIE!";

    if(playerRand == 1 && compRand == 1) {
        return document.getElementById("RPSwinner").innerHTML = tie;
    } else if (playerRand == 2 && compRand == 2) {
        return document.getElementById("RPSwinner").innerHTML = tie;
    } else if (playerRand == 3 && compRand == 3) {
        return document.getElementById("RPSwinner").innerHTML = tie;
    } else if(playerRand == 1 && compRand == 3) {
        return document.getElementById("RPSwinner").innerHTML = playerWin;
    } else if(playerRand == 2 && compRand == 1) {
        return document.getElementById("RPSwinner").innerHTML = playerWin;
    } else if(playerRand == 3 && compRand == 2) {
        return document.getElementById("RPSwinner").innerHTML = playerWin;
    } else {
        return document.getElementById("RPSwinner").innerHTML = compWin;
    }

}

function showNameBox() {
    document.getElementById("RPSnameBox").style.display="block";
    document.getElementById("RPSEnterButton").style.display="block";
}
// ************************ END RPS GAME CODE *********************


function tictactoe() {
    var promptName = prompt("Enter your name: ");
    let name = promptName.toUpperCase();
    alert("I will now show a pic of " + name + " for 3 seconds ;)");
    
    if (name == "KEVIN") {
        var img = document.createElement("img");
        var div = document.getElementById("funnyPic");
        img.src = "kevin.png";
        div.appendChild(img);
    } else if (name == "RIQUE") {
        var img = document.createElement("img");
        var div = document.getElementById("funnyPic");
        img.src = "riqueButt.jpeg";
        div.appendChild(img);
    } else {
        randPic();
    }
    realoadPage();
}

function c4() {
    var promptName = prompt("Enter your name: ");
    let name = promptName.toUpperCase();
    alert("I will now show a pic of " + name + " for 3 seconds ;)");

    if (name == "KEVIN") {
        var img = document.createElement("img");
        var div = document.getElementById("funnyPic");
        img.src = "kevin.png";
        div.appendChild(img);
    } else if (name == "RIQUE") {
        var img = document.createElement("img");
        var div = document.getElementById("funnyPic");
        img.src = "riqueButt.jpeg";
        div.appendChild(img);
    } else {
        randPic();
    }
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