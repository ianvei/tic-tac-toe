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
    let xWinArray = []
    

    const checkWin = function(currentValue, position){
        
        //idea: use the 'set' from winning combos to test against the xArray, and filter if its not correct
        // alternate idea: create a new array of objexts with player marker and positions, 
        // alternate alternate: also track the other player's moves. if 'O' has spot 1, remove it from X's pool. if X has spot, filter array so only those with X's value remain


        if (currentValue === 'X'){
            xArray.push(position)
            for (let set of winningCombos){
                for(let setNumber of set){
                    for (let number of xArray){
                        // console.log(number)
                        // console.log(set)
                        if(number === setNumber){
                            xWinArray.push(set)
                        }
                        // else{
                        //     let index = xArray.indexOf(number)
                        //     xArray.splice(index, 1)
                        // }
                        // if(number in set === true){
                        //     const index = winningCombos.indexOf(set)
                        //     // console.log(index)
                        //     winningCombos.splice(index, 1); // 2nd parameter means remove one item only
                        //     // console.log(winningCombos.filter(set, index))
                        //     // xWinArray.append(winningCombos.filter(set));
                        // }
                    }
                }
                
            }
        }
        else
            if (currentValue === 'O'){
                oArray.push(position)
            }
       


        // let filteredCombos = winningCombos.filter(set => {
        //     for (let integer of xArray){
        //         if (integer in set === true){
        //             console.log(set)
        //         }
        //     }
        // })

        

        // for (let set of winningCombos){ 
        //     xArray.every(value => {
        //         if(set.includes(value)){
        //             console.log(set)
        //             xWinArray.push(value)
        //         }
        //       });
        // }
      
        // let uniqueWinSet= [...new Set(xWinArray)];
        // console.log(`this is win array ${uniqueWinSet}`)
        // console.log(xArray)
        let removedSet = [new Set(xWinArray)]
        console.log(removedSet)
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


