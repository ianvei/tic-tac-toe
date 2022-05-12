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
    let xArray = []
    let oArray = []

    let winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

    const checkWin = function(currentValue, position){
        
        if (currentValue === 'X'){
            xArray.push(position)
        }
        else
            if (currentValue === 'O'){
                oArray.push(position)
            }
       

        for (let set of winningCombos){
            console.log(set)
            for (let playerPosition of xArray){
                if (playerPosition === set[0] && playerPosition === set[1] && playerPosition === set[2]){
                    console.log('you win!')
                    // maybe create new array if its in the set and keep going until theres a match
                }
            }
        }
        console.log(`X array: ${xArray}`)
        console.log(`O array: ${oArray}`)
    }

    const turnListener = function(){
        let turnCounter = 1
        for (let object of gameBoardArray){
            object.newBoardPiece.addEventListener('click', function(){
                if (turnCounter % 2 == 0){
                    if (object.currentValue === ''){
                        player2.chooseSpot(object)
                        turnCounter++
                        console.log(object)
                        gameController.checkWin(object.currentValue, object.position)
                    }
                }
                else {
                    if (object.currentValue === ''){
                        player1.chooseSpot(object)
                        turnCounter++
                        console.log(object)
                        gameController.checkWin(object.currentValue, object.position)
                    }
                    
                }
                
                
            })
        }
    }
    return {turnListener, checkWin}
})();

gameController.turnListener();


