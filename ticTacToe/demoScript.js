const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//game state variables
let board;
let turn = 'X';
let win;

document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('reset-button').addEventListener('click', begin);

//querySelector will search for the specified selector 
const messages = document.querySelector('h2');

//make an array to store all our squares
const squares = Array.from(document.querySelectorAll('#board div'));

//a function for when someone clicks
function handleTurn(event) {

    //the event object tells us information about the event that occurred
    console.log(event);

    //findIndex will evaluate the array for us
    let whichSquare = squares.findIndex(squareFinder);

    function squareFinder(square) {
        if (square === event.target) {
            return square;
        }
    }

    //add an X or O to our board array
    board[whichSquare] = turn;

    if (turn === 'X') {
        turn = 'O';
    } else if (turn === 'O') {
        turn = 'X'
    }

    win = getWinner();
    render();
}

function getWinner() {
    let winner = null;

    for (i = 0; i < winningCombos.length; i++) {
        let combo = winningCombos[i];
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner = board[combo[0]]
        };

        if (winner) {
            return winner
        } else if (board.includes('')) {
            return null // if there's an empty space, no winners
        } else {
            return 'T' // no winner and no empty spaces? That's a tie!
        }
    }
};

function begin() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    render();
};

function render() {
    for (i = 0; i < board.length; i++) {
        let mark = board[i];
        squares[i].textContent = mark;
    }
    if (win === 'T') {
        messages.textContent = `That's a tie!`
    } else if (win) {
        messages.textContent = `${win} wins!`
    } else {
        messages.textContent = `It's ${turn}'s turn!`
    }
}

begin();
