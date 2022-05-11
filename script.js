// gameboard module constructor
const gameBoard = (function(){
    'use strict';
    let boardArray = [];
    let boardGoesHere = document.querySelector(".game-area")
    
    // create all of the pieces of the board w/ constructor and push to array,
    const boardPieces = function(){
        for (let i = 0; i < 9; i++) {
            class SquareObject {
                constructor() {
                    this.value = '';
                    this.position = i + 1;
                    this.currentValue = '';
                    this.newBoardPiece = document.createElement('button');
                    this.newBoardPiece.classList.add("board-piece");
                    this.newBoardPiece.setAttribute('id', `button${this.position}`);
                    boardGoesHere.appendChild(this.newBoardPiece);
                }
            }
            const boardPiece = new SquareObject;
            boardArray.push(boardPiece);
        } 
    }
    return { boardPieces, boardArray };
})();

gameBoard.boardPieces();
gameBoardArray = gameBoard.boardArray;


const Player = (playernumber, team) => {
    'use strict';

    const sayHello = () => console.log(gameBoardArray);

    if (playernumber === 1){
        playernumber = 1;
        team = 'X';
    }
    else {
        playernumber = 2;
        team = 'O';
    }

    const chooseSpot = function(object){
       if (object.currentValue === ''){
        object.newBoardPiece.textContent = team
        object.currentValue = team
       }
       else {
           console.log('already here')
       }
    }
    return { playernumber, sayHello, team, chooseSpot };
  };

const gameController = (function(){

    const player1 = Player(1);
    const player2 = Player(2);

    const checkWin = function(){
        console.log('are ya winning son')
    }

    const turnListener = function(){
        let turnCounter = 1
        for (let object of gameBoardArray){
            object.newBoardPiece.addEventListener('click', function(){
                if (turnCounter % 2 == 0){
                    if (object.currentValue === ''){
                        player2.chooseSpot(object)
                        turnCounter++
                    }
                }
                else {
                    if (object.currentValue === ''){
                        player1.chooseSpot(object)
                        turnCounter++
                    }
                    
                }
                gameController.checkWin()
            })
        }
    }
    return {turnListener, checkWin}
})();

gameController.turnListener();


