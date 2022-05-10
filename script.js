// gameboard module constructor
const gameBoard = (function(){
    'use strict';
    let boardArray = [];
    let boardGoesHere = document.querySelector(".game-area")
    
    // create all of the pieces of the board w/ constructor and push to array,
    const boardPieces = function(){
        for (let i = 0; i < 9; i++) {
            function SquareObject(){
                this.value = '';
                this.position = i+1;
                this.newBoardPiece = document.createElement('button');
                this.newBoardPiece.classList.add("board-piece");
                this.newBoardPiece.setAttribute('id', `button${this.position}`);
                boardGoesHere.appendChild(this.newBoardPiece);
            }
            const boardPiece = new SquareObject;
            boardArray.push(boardPiece);
        } 
    }
    return { boardPieces, boardArray };
})();

gameBoard.boardPieces();
gameBoardArray = gameBoard.boardArray;


const Player = (playernumber, gameBoardArray, team) => {
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

    const chooseSpot = function(){
        for (let object of gameBoardArray){
            object.newBoardPiece.addEventListener("click", function(){
                if (!object.currentValue){
                    object.newBoardPiece.textContent = team
                    object.currentValue = team
                    console.log(object)
                }
                else {
                    console.log('already here')
                }
                
            }, true);
        }
        
    }


    return { playernumber, sayHello, team, chooseSpot };
  };

const player1 = Player(1, gameBoardArray);
const player2 = Player(2, gameBoardArray);
// player1.sayHello();
player1.chooseSpot();

let gameOn = true
let turnCounter = 0


