
// every player move do -1

logInfo() 
function logInfo() {
let playerX = prompt('you are X insert a name please:');
let playerO = prompt('you are O insert a name please:');
let boardSize = prompt('choose a number to determined the size of the board');

valiatelogInfo()

function valiatelogInfo() {
    let ifBoardSize = Number(boardSize);
    if(!Number.isNaN(ifBoardSize)) {
        runGame()
    } else {
        alert('Please insert a number')
        logInfo()
    }

    
}
function runGame() {
    let board = [];
    
    for (let i = 0; i < boardSize; i++) {    
        board.push([])
        for (let j = 0; j < boardSize; j++) {
            board[i][j]=' ';
        }
        
    }
    Xplay()
    function Xplay() {
        let playerXmove = prompt(`its ${playerX}'s turn! first choose a row then choose a collum`, "row,collum");
        let Xmove = playerXmove.replace(',','').split('');
        
        if (board[Xmove[0]][Xmove[1]] === (' ')){
            board[Xmove[0]][Xmove[1]] = ('X');
            console.log(board);
            XwinnerByRow()
            Oplay()
            
        }
        else {
            alert('this place is already taken choose a different one')
            Xplay()
        }
    }
    function Oplay () {
        
        let playerOmove = prompt(`its ${playerO}'s turn! first choose a row then choose a collum`, "row,collum");
        let Omove = playerOmove.replace(',','').split('');
        
        if (board[Omove[0]][Omove[1]] === (' ')){
            board[Omove[0]][Omove[1]] = ('O');
            console.log(board);
            OwinnerByRow()
            Xplay()
        }
        else {
            alert('this place is already taken choose a different one')
            Oplay()
        }
        
    }
    
    function XwinnerByRow() {
        // function isX(item) {
        //     return item === 'X'
        // }
        // if (res === true) {
        //     alert('X winner')
            
        // }
        // else if (res === false){
        //     Oplay()
        // }
        // for (let i = 0; i < board.length-1; i++) {
        //     let boardRow = board[i];
        //     console.log(boardRow);
        //     let res = boardRow.every(isX);
        //     console.log(res);
        // }
        }
        function OwinnerByRow() {
            // function isO(item) {
            //   return item === 'O'
            // }
            // if (res === true) {
            //     alert('O winner')
                
            // }
            // else if (res === false){
            //     Xplay()
            // } 
            // for (let i = 0; i < board.length-1; i++) {
            //     let boardRow = board[i];
            //     console.log(boardRow);
            //     let res = boardRow.every(isO);
            //     console.log(res);
            // }
                
            }
        
    }
    
    function winnerByCollum() {
        
    }
    
    function winnerByslant() {
        
    }
    
    function tied() {
        
    }
    
    function reset() {
        
    }
}
