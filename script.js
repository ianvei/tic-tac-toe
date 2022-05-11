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
                this.currentValue = ''
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


const Player = (playernumber, team) => {
    'use strict';
    const sayHello = () => console.log(gameBoardArray);

    let advanceFlag = false

    if (playernumber === 1){
        playernumber = 1;
        team = 'X';
    }
    else {
        playernumber = 2;
        team = 'O';
    }

    const chooseSpot = function(object, turnCounter){
        turnCounter++
        object.newBoardPiece.textContent = team
        object.currentValue = team
        advanceFlag = true
        console.log(object)
        // for (let object of gameBoardArray){
        //     object.newBoardPiece.addEventListener("click", function(){
        //         if (object.currentValue === ''){
        //             object.newBoardPiece.textContent = team
        //             object.currentValue = team
        //             advanceFlag = true
        //             console.log(object)
        //         }
        //         else {
        //             console.log('already here')
        //         }
                
        //     }, true);
        // }
        
    }

    // const endTurn = function(){
    //     for (let object of gameBoardArray){
    //         object.newBoardPiece.addEventListener("click", function(){
    //             if (!object.currentValue){
    //                 object.newBoardPiece.textContent = team
    //                 object.currentValue = team
    //                 advanceFlag = true
    //                 console.log(object)
    //             }
    //             else {
    //                 console.log('already here')
    //             }
                
    //         }, true);
    //     }
    // }

    return { playernumber, sayHello, team, chooseSpot, advanceFlag };
  };


// player1.sayHello();


// let gameOn = true
// let turnCounter = 1 

// const player1 = Player(1);
// const player2 = Player(2);

const gameController = (function(){

    const player1 = Player(1);
    const player2 = Player(2);
    

    const turnListener = function(){
        let turnCounter = 0
        for (let object of gameBoardArray){
            object.newBoardPiece.addEventListener('click', function(){
                turnCounter++
                if (turnCounter % 2 == 0){
                    console.log(turnCounter)
                    // player2.chooseSpot()
                    object.newBoardPiece.textContent = 'O'
                    console.log('p2')
                }
                else {
                    // player1.chooseSpot()
                    object.newBoardPiece.textContent = 'X'
                    console.log(object.newBoardPiece)
                    console.log('p1')
                    console.log(turnCounter)
                }
            })
        }
        
    }

    


    // const turnListener = function(){

    //     for (let object of gameBoardArray){
    //         object.newBoardPiece.addEventListener("click", function(){
    //             turnCounter++
    //             if (turnCounter % 2 === 0){
    //                 if (player2.advanceFlag === true){
    //                     console.log('player 2 turn')
    //                     player2.chooseSpot();
    //                     // player2.endTurn();
    //                 }
    //                 if (player2.advanceFlag === false){
    //                     console.log('not allowed to advance')
    //                 }
                    
    //             }
    //             else {
    //                 if (player1.advanceFlag === true){
    //                     console.log('player 1 turn')
    //                     player1.chooseSpot();
    //                 }
                    
    //             }
    //         })
    //     }
    //     return {turnListener, turnCounter}
    // }


    const gameLoop = function(){
        if (turnCounter % 2 == 0){
            if (player2.advanceFlag){
                player2.chooseSpot()
                console.log("i am choosing")
            }
            // console.log(turnCounter)
        }
        else {
            player1.chooseSpot()
            // console.log(turnCounter)
        }
    }
    return {gameLoop, turnListener}
})();


gameController.turnListener();


