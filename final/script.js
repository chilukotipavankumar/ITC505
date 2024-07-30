document.addEventListener("DOMContentLoaded", function () {
    const boardSize = 5;
    const gameBoard = document.getElementById("game-board");
    const clickSound = document.getElementById("click-sound");
    const startButton = document.getElementById("start-game");
    let board = [];

    function createBoard() {
        gameBoard.innerHTML = ''; // Clear the game board
        for (let i = 0; i < boardSize; i++) {
            board[i] = [];
            for (let j = 0; j < boardSize; j++) {
                const square = document.createElement("div");
                square.classList.add("square");
                square.dataset.row = i;
                square.dataset.col = j;
                 // Add a unique ID for each square
                square.addEventListener("click", () => {
                    toggleSquare(i, j);
                    playSound();
                });
                gameBoard.appendChild(square);
                board[i][j] = square;
            }
        }
    }

    function toggleSquare(row, col) {
        const toggle = (r, c) => {
            if (r >= 0 && r < boardSize && c >= 0 && c < boardSize) {
                board[r][c].classList.toggle("is-off");
            }
        };
        toggle(row, col);
        toggle(row - 1, col);
        toggle(row + 1, col);
        toggle(row, col - 1);
        toggle(row, col + 1);
        checkWin();
    }

    function playSound() {
        clickSound.currentTime = 0;
        clickSound.play();
    }

    function checkWin() {
        const allOff = board.flat().every(square => square.classList.contains("is-off"));
        if (allOff) {
            alert("You win!"); // Direct alert to avoid timing issues
        }
    }

    function randomizeBoard() {
        const numMoves = 10; // Reduced number of random moves for easier game
        for (let i = 0; i < numMoves; i++) {
            const randomRow = Math.floor(Math.random() * boardSize);
            const randomCol = Math.floor(Math.random() * boardSize);
            toggleSquare(randomRow, randomCol);
        }
    }

    startButton.addEventListener("click", function() {
        randomizeBoard();
    });

    // Create the initial empty board
    createBoard();
});
