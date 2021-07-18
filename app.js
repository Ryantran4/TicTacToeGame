// Our State
const gameState = {};
// All Possible Winning Combinations that will be used in checkWinning function = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]
const resetState = () => {
    // An empty array of 8 indicies for Tic Tac Toe Board
    gameState.board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];
    // This is the starting mark so that we can switch back and forth
    gameState.currentPlayer = '☠'
    // How we are grabbing the currentplayer
    gameState.getCurrentPlayer = () => gameState.players[gameState.currentPlayerIdx];
    // Switching between player symbols
    gameState.currentTurn = Math.round(Math.random(0,1)) === 1 ? '☠':'👽'
    gameState.players = ['',''];
    gameState.playerTurns = ['','']
    // Randomizing which player goes first and second
    gameState.currentPlayerIdx = Math.round(Math.random(0,1));
    gameElem.innerHTML = 'Entering WarZone'
}
// Winning Message
const winnningMessage = () => `Player ${getCurrentPlayer} has won!`;
const DrawMessage = () => `Its a Tie!`


// DOM SELECTOR SECTION
const boardElem = document.querySelector('#board')
const playerTurnElem = document.querySelector('#player-turn');
const resetElem = document.querySelector("#resetButton"); // Added
const playersElem = document.querySelector('#players') // Added
const gameElem = document.querySelector('#game--status');
// GAME LOGIC HELPER FUNCTIONS
const changeTurn = () => {
    gameState.currentPlayerIdx = Math.abs(gameState.currentPlayerIdx -1);
}


// DOM MANIPULATION SECTION
const generateBoard = () => {
    boardElem.innerHTML = '';
    for (let i = 0; i < gameState.board.length; ++i){
        console.log(i)
        const box = gameState.board[i];
        console.log('box: ', box);
        // Creating boxes through dom
        let boxElem = document.createElement('div');
        boxElem.classList.add('box');
        console.log('boxElem: ', boxElem);
        boxElem.dataset.index = i;
        boxElem.innerHTML = box;
        boardElem.appendChild(boxElem);
    }
}

const renderPlayer = () => {
    let text;
    // If there is not a player 1 or 2, create input boxes with a Start game button
        if (!gameState.players[0] || !gameState.players[1]) {
            text = `
            <input name="player1" placeholder="Enter Player 1">
            <input name="player2" placeholder="Enter Player 2">
            <button class="start">Start Game</button>
            `
            } else {
                text = `Think carefully, it's currently ${gameState.getCurrentPlayer()}'s turn`
            }
            playerTurnElem.innerHTML = text;
        }

const resetButton = () => {
    let text = `
    <button class='reset'>Reset</button>
    `
    resetElem.innerHTML = text;
    }

const checkWinningSkull = () => {
        if (gameState.board[0] === gameState.board[1] && gameState.board[1] === gameState.board[2]) {
            if (gameState.board[0] !== '' && gameState.board[1] !== '' && gameState.board[2] !== ''){
                gameElem.innerHTML = `Battle has ended, the winner is ${gameState.currentTurn}. Click Reset To Battle Again`
                return
            }          
        } 
        else if (gameState.board[3] === gameState.board[4] && gameState.board[3] === gameState.board[5]) {
            if (gameState.board[3] !== '' && gameState.board[4] !== '' && gameState.board[5] !== ''){
            gameElem.innerHTML = `Battle has ended, the winner is ${gameState.currentTurn}. Click Reset To Battle Again`
                return
            }
        }
        else if (gameState.board[6] === gameState.board[7] && gameState.board[6] === gameState.board[8]) {
            if (gameState.board[6] !== '' && gameState.board[7] !== '' && gameState.board[8] !== ''){
            gameElem.innerHTML = `Battle has ended, the winner is ${gameState.currentTurn}. Click Reset To Battle Again`
            return
            }
        }
        else if (gameState.board[0] === gameState.board[3] && gameState.board[3] === gameState.board[6]) {
            if (gameState.board[0] !== '' && gameState.board[3] !== '' && gameState.board[6] !== ''){
            gameElem.innerHTML = `Battle has ended, the winner is ${gameState.currentTurn}. Click Reset To Battle Again`
            return
            }
        }    
        else if (gameState.board[1] === gameState.board[4] && gameState.board[4] === gameState.board[7]) {
            if (gameState.board[1] !== '' && gameState.board[4] !== '' && gameState.board[7] !== ''){
            gameElem.innerHTML = `Battle has ended, the winner is ${gameState.currentTurn}. Click Reset To Battle Again`
            return
            }
        }
        else if (gameState.board[2] === gameState.board[5] && gameState.board[2] === gameState.board[8]) {
            if (gameState.board[2] !== '' && gameState.board[5] !== '' && gameState.board[8] !== ''){
            gameElem.innerHTML = `Battle has ended, the winner is ${gameState.currentTurn}. Click Reset To Battle Again`
            return
            }
        }
        else if (gameState.board[0] === gameState.board[4] && gameState.board[0] === gameState.board[8]) {
            if (gameState.board[0] !== '' && gameState.board[4] !== '' && gameState.board[8] !== ''){
            gameElem.innerHTML = `Battle has ended, the winner is ${gameState.currentTurn}. Click Reset To Battle Again`
            return
            }
        }
        else if(gameState.board [2] === gameState.board[4] && gameState.board[2] === gameState.board[6]) {
            if (gameState.board[2] !== '' && gameState.board[4] !== '' && gameState.board[6] !== ''){
            gameElem.innerHTML = `Battle has ended, the winner is ${gameState.currentTurn}. Click Reset To Battle Again`
            return
            }          
        }      
    }

const draw = () => {
    let num = 0
    for (let i = 0; i < gameState.board.length; i++) {
        if (gameState.board[i] != ''){
            num += 1
        }
    }
    if (num === 9){
        gameElem.innerHTML = `Its a Tie!`
    }
}


const renderBoard = () => {
    generateBoard();
    renderPlayer();
    resetButton();             
    }
                  
// EVENT LISTENERS
boardElem.addEventListener('click', function(event) {
    console.log('this: ', this);
    if (event.target.className === 'box') {
        console.log('event.target: ', event.target);
        let boxIdx = event.target.dataset.index;
        console.log('boxIdx: ', boxIdx);
        gameState.currentTurn = gameState.currentTurn === '☠' ? '👽' :'☠'
        if (gameState.board[boxIdx] === '' ){
        gameState.board[boxIdx] = gameState.currentTurn}
        else {
            gameState.currentTurn = gameState.currentTurn === '☠' ? '👽' :'☠'
            changeturns();
        }
        checkWinningSkull();
        draw();
        changeTurn();
        generateBoard(); 
        renderBoard();
    }
})

playerTurnElem.addEventListener('click', function({target}){
    // we've attached the event to the parent elem, but we only want to do something if an actual start button was clicked
    if (target.className === 'start') {
      // get the input element
      const player1Input = document.querySelector('input[name=player1]');
      let player1Value = player1Input.value;
      const player2Input = document.querySelector('input[name=player2]');
      const player2Value = player2Input.value;
        gameState.players[1] = player2Value;
        gameState.players[0] = player1Value;

    if (player1Value <= 0) {
        gameState.players[0] = 'AI BOT 9000'
    }
    if (player2Value <=0) {
        gameState.players[1] = 'AI BOT 9000'
    }
      renderBoard();
    }
  })


resetElem.addEventListener('click', function(event) {
    resetState();
    renderBoard();
})


// BOOTSTRAPPING
resetState ();
renderBoard();
renderPlayer();



