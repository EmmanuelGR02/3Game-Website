// ***** Code for PVP *****
function pvpMode() {
    // set player names to varibles
    let player1Name = document.getElementById("rpsPlayer1").value.toUpperCase();
    let player2Name = document.getElementById("rpsPlayer2").value.toUpperCase();
    let player1Img = document.getElementById("player1Pic");
    let player2Img = document.getElementById("player2Pic");
    let removeBtn = document.getElementById("remove");

    // keeps track of scores
    let player1Score = 0;
    let player2Score = 0;
    // keep track of players pick
    let player1Choice = 0;
    let player2Choice = 0;
    
    
    // call all functions
    setPlayer1Choice();
    setPlayer2Choice();
    player1Pic();
    player2Pic();
    getWinner();
    pvpDisplay();
    // Display names and scores on the page
    document.getElementById("player1").innerHTML = player1Name + ": " + player1Score;
    document.getElementById("player2").innerHTML = player2Name + ": " + player2Score;

    // resets the pictures and asks the for the players choice again
    removeBtn.addEventListener('click', function handleClicl() {
        player1Img.replaceChildren();
        player2Img.replaceChildren();
        setPlayer1Choice();
        setPlayer2Choice();
        player1Pic();
        player2Pic();
        getWinner();
        pvpDisplay();
        document.getElementById("player1").innerHTML = player1Name + ": " + player1Score;
        document.getElementById("player2").innerHTML = player2Name + ": " + player2Score;
    })




    // Ask the players to pic a number that is specific to an item
    function setPlayer1Choice() {
        var letters = /^[a-zA-Z]+$/;
        var sCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let player1Name = document.getElementById("rpsPlayer1").value;

        while (true) {
            let temp1 = prompt(player1Name + " Make a choice Rock(1) Paper(2) Scissors(3):")
            if (temp1 < 1 || temp1 > 3 || temp1.match(letters) || temp1.match(sCharacters)) {
                continue;
            } else {
                player1Choice = temp1;
                break;
            }
        }
    }
    function setPlayer2Choice() {
        var letters = /^[a-zA-Z]+$/;
        var sCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let player2Name = document.getElementById("rpsPlayer2").value;
        // check for invalid input
        while (true) {
            let temp2 = prompt(player2Name + " Make a choice Rock(1) Paper(2) Scissors(3):")
            if (temp2 < 1 || temp2 > 3 || temp2.match(letters) || temp2.match(sCharacters)) {
                continue;
            } else {
                player2Choice = temp2;
                break;
            }
        }
    }



    // Decide on winner based on the integers picked
    function getWinner() {
        let compWin = player2Name + "&nbsp;&nbsp; Wins!";
        let playerWin  = player1Name + "&nbsp;&nbsp; Wins!";
        let tie = "Draw!";

        if (player1Choice == 1 && player2Choice == 3) {
            player1Score ++;
            document.getElementById("winningMessage").innerHTML = playerWin;
            document.getElementById("winningMessage").style.display="block";
        } else if (player1Choice == 2 && player2Choice == 1) {
            player1Score ++;
            document.getElementById("winningMessage").innerHTML = playerWin;
            document.getElementById("winningMessage").style.display="block";
        } else if (player1Choice == 3 && player2Choice == 2) {
            player1Score ++;
            document.getElementById("winningMessage").innerHTML = playerWin;
            document.getElementById("winningMessage").style.display="block";
        } else if (player2Choice == 1 && player1Choice == 3) {
            player2Score ++;
            document.getElementById("winningMessage").innerHTML = compWin;
            document.getElementById("winningMessage").style.display="block";
        } else if (player2Choice == 2 && player1Choice == 1) {
            player2Score ++;
            document.getElementById("winningMessage").innerHTML = compWin;
            document.getElementById("winningMessage").style.display="block";
        } else if (player2Choice == 3 && player1Choice == 2) {
            player2Score ++;
            document.getElementById("winningMessage").innerHTML = compWin;
            document.getElementById("winningMessage").style.display="block";
        } else {
            document.getElementById("winningMessage").innerHTML = tie;
            document.getElementById("winningMessage").style.display="block";
        }
    }



    // calls the playerNum() function to obtain the number chosen by the user to the choose the specific picture
    function player1Pic() {
        var img = document.createElement("img");
        var div = document.getElementById("player1Pic");
        //var playerChoice = playerNum();

        if (player1Choice == 1) {
            img.src = "rock.jpg";
        }
        else if (player1Choice == 2) {
            img.src = "paper.jpg";
        }
        else if (player1Choice == 3) {
            img.src = "scissors.jpg";
        }
        return div.appendChild(img);
    }
    // calls the playerNum() function to obtain the number chosen by the user to the choose the specific picture
    function player2Pic() {
        var img = document.createElement("img");
        var div = document.getElementById("player2Pic");
        //var playerChoice = playerNum();

        if (player2Choice == 1) {
            img.src = "rock.jpg";
        }
        else if (player2Choice == 2) {
            img.src = "paper.jpg";
        }
        else if (player2Choice == 3) {
            img.src = "scissors.jpg";
        }
        return div.appendChild(img);
    }



    // Display the Div holding the players info and dissapear the getNamwes placeholders
    function pvpDisplay() {
        document.getElementById("pvpGetNames").style.display="none";
        document.getElementById("pvpDisplay").style.display="block";
        document.getElementById("scoreBoardMsg").style.display="block";
        document.getElementById("remove").style.display="block";
        document.getElementById("return").style.display="block";
    }
}


// ************* Code for PVC ************
function pvcMode() {
    let playerName = document.getElementById("rpsPlayer1").value.toUpperCase();
    let player1Img = document.getElementById("player1Pic");
    let player2Img = document.getElementById("player2Pic");
    let removeBtn = document.getElementById("remove");

    // keeps track of scores
    let player1Score = 0;
    let compScore = 0;
    // keep track of players pick
    let player1Choice = 0;
    let compChoice = 0;
    
    
    // call all functions
    setPlayer1Choice();
    setCompChoice();
    player1Pic();
    compPic();
    getWinner();
    pvpDisplay();
    // Display names and scores on the page
    document.getElementById("player1").innerHTML = playerName + ": " + player1Score;
    document.getElementById("player2").innerHTML =  "COMPUTER: " + compScore;

    // resets the pictures and asks the for the players choice again
    removeBtn.addEventListener('click', function handleClicl() {
        player1Img.replaceChildren();
        player2Img.replaceChildren();
        setPlayer1Choice();
        setCompChoice();
        player1Pic();
        compPic();
        getWinner();
        pvpDisplay();
        document.getElementById("player1").innerHTML = playerName + ": " + player1Score;
        document.getElementById("player2").innerHTML = "COMPUTER: " + compScore;
    })




    // Ask the players to pic a number that is specific to an item
    function setPlayer1Choice() {
        var letters = /^[a-zA-Z]+$/;
        var sCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let player1Name = document.getElementById("rpsPlayer1").value;

        while (true) {
            let temp1 = prompt(player1Name + " Make a choice Rock(1) Paper(2) Scissors(3):")
            if (temp1 < 1 || temp1 > 3 || temp1.match(letters) || temp1.match(sCharacters)) {
                continue;
            } else {
                player1Choice = temp1;
                break;
            }
        }
    }
    function setCompChoice() {
        compChoice= Math.floor(Math.random() * 3) + 1;
    }



    // Decide on winner based on the integers picked
    function getWinner() {
        let compWin =  "COMPUTER&nbsp;&nbsp; Wins!";
        let playerWin  = playerName + "&nbsp;&nbsp; Wins!";
        let tie = "Draw!";

        if (player1Choice == 1 && compChoice == 3) {
            player1Score ++;
            document.getElementById("winningMessage").innerHTML = playerWin;
            document.getElementById("winningMessage").style.display="block";
        } else if (player1Choice == 2 && compChoice == 1) {
            player1Score ++;
            document.getElementById("winningMessage").innerHTML = playerWin;
            document.getElementById("winningMessage").style.display="block";
        } else if (player1Choice == 3 && compChoice == 2) {
            player1Score ++;
            document.getElementById("winningMessage").innerHTML = playerWin;
            document.getElementById("winningMessage").style.display="block";
        } else if (compChoice == 1 && player1Choice == 3) {
            compScore ++;
            document.getElementById("winningMessage").innerHTML = compWin;
            document.getElementById("winningMessage").style.display="block";
        } else if (compChoice == 2 && player1Choice == 1) {
            compScore ++;
            document.getElementById("winningMessage").innerHTML = compWin;
            document.getElementById("winningMessage").style.display="block";
        } else if (compChoice == 3 && player1Choice == 2) {
            compScore ++;
            document.getElementById("winningMessage").innerHTML = compWin;
            document.getElementById("winningMessage").style.display="block";
        } else {
            document.getElementById("winningMessage").innerHTML = tie;
            document.getElementById("winningMessage").style.display="block";
        }
    }



    // calls the playerNum() function to obtain the number chosen by the user to the choose the specific picture
    function player1Pic() {
        var img = document.createElement("img");
        var div = document.getElementById("player1Pic");
        //var playerChoice = playerNum();

        if (player1Choice == 1) {
            img.src = "/IMAGES/rock.jpg";
        }
        else if (player1Choice == 2) {
            img.src = "/IMAGES/paper.jpg";
        }
        else if (player1Choice == 3) {
            img.src = "/IMAGES/scissors.jpg";
        }
        return div.appendChild(img);
    }
    // calls the playerNum() function to obtain the number chosen by the user to the choose the specific picture
    function compPic() {
        var img = document.createElement("img");
        var div = document.getElementById("player2Pic");
        //var playerChoice = playerNum();

        if (compChoice == 1) {
            img.src = "/IMAGES/rock.jpg";
        }
        else if (compChoice == 2) {
            img.src = "/IMAGES/paper.jpg";
        }
        else if (compChoice == 3) {
            img.src = "/IMAGES/scissors.jpg";
        }
        return div.appendChild(img);
    }



    // Display the Div holding the players info and dissapear the getNamwes placeholders
    function pvpDisplay() {
        document.getElementById("pvpGetNames").style.display="none";
        document.getElementById("pvpDisplay").style.display="block";
        document.getElementById("scoreBoardMsg").style.display="block";
        document.getElementById("remove").style.display="block";
        document.getElementById("return").style.display="block";
    }

}