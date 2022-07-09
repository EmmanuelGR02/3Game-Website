function ticMain() {
    document.getElementById("ticTitle").style.display="block";
    // Display board after user picks tictactoe
    document.getElementById("board").style.display="grid";
    document.getElementById("cell").style.border = "2px solid black";
    document.getElementById("cell").style.display = "flex";
    document.getElementById("cell1").style.border = "2px solid black";
    document.getElementById("cell1").style.display = "flex";
    document.getElementById("cell2").style.border = "2px solid black";
    document.getElementById("cell2").style.display = "flex";
    document.getElementById("cell3").style.border = "2px solid black";
    document.getElementById("cell3").style.display = "flex";
    document.getElementById("cell4").style.border = "2px solid black";
    document.getElementById("cell4").style.display = "flex";
    document.getElementById("cell5").style.border = "2px solid black";
    document.getElementById("cell5").style.display = "flex";
    document.getElementById("cell6").style.border = "2px solid black";
    document.getElementById("cell6").style.display = "flex";
    document.getElementById("cell7").style.border = "2px solid black";
    document.getElementById("cell7").style.display = "flex";
    document.getElementById("cell8").style.border = "2px solid black";
    document.getElementById("cell8").style.display = "flex";

    const X_CLASS = "x"
    const CIRCLE_CLASS = "circle"
    // array of winning combinations
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    // bring all the id's from the HTML file
    const cellElements = document.querySelectorAll("[data-cell]")
    const restartButton = document.getElementById("restartButton") 
    const board = document.getElementById("board")
    const winningMessageElement = document.getElementById("winningMessage")
    const winningMessageTextElement = document.querySelector("[data-winning-message-text]")
    let cirlceTurn

    startGame()
    appearDifButtons()

    restartButton.addEventListener("click", startGame)

    function startGame() {
        cirlceTurn = false
        cellElements.forEach(cell => {
            cell.classList.remove(X_CLASS)
            cell.classList.remove(CIRCLE_CLASS)
            cell.removeEventListener("click", handleClick)
            cell.addEventListener("click", handleClick, { once: true })
        })
        setBoardHoverClass()
        winningMessageElement.classList.remove("show")
    }

    function handleClick(e) {
        const cell = e.target
        const currentClass = cirlceTurn ? CIRCLE_CLASS : X_CLASS
        placeMark(cell, currentClass)

        if (checkWin(currentClass)) {
            endGame(false)
        } else if (isDraw()) {
            endGame(true)
        } else {
            swapTurns()
            setBoardHoverClass()
        }
    }

    // reaplaces the winning message to show who won
    function endGame(draw) {
        if (draw) {
            winningMessageTextElement.innerText = "Draw!"
        } else {
            winningMessageTextElement.innerText = `${cirlceTurn ? "O's" : "X's"} Wins!`
        }
        winningMessageElement.classList.add("show")
    }

    function isDraw() {
        // turn the cellElements into an array to check if all the cells contain something
        return [...cellElements].every(cell => {
            return cell.classList.contains(X_CLASS) || 
            cell.classList.contains(CIRCLE_CLASS)
        })
    }

    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass)
    }

    function swapTurns() {
        cirlceTurn = !cirlceTurn
    }

    // Adds the hover affect 
    function setBoardHoverClass() {
        board.classList.remove(X_CLASS)
        board.classList.remove(CIRCLE_CLASS)
        if (cirlceTurn) {
            board.classList.add(CIRCLE_CLASS)
        } else {
            board.classList.add(X_CLASS)
        }
    }

     // checks if current class (X or O) is in any of the winning combinations
    function checkWin(currentClass) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentClass)
            })
        })
    }

    function appearDifButtons() {
        document.getElementById("ticPvPbutton").style.display="block";
        document.getElementById("ticEasyPvCbutton").style.display="block";
        document.getElementById("ticHardPvCbutton").style.display="block";
    }

}

