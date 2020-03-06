document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: "",
      hidden:"true",
    },
    {
      row: 0
      ,col: 1,
      isMine: "true", 
      hidden:"true",
    },
    {
      row: 0,
      col: 2,
      isMine: "true",
      hidden:"true",
    },
    {
      row: 1,
      col: 0,
      isMine: "", 
      hidden:"true",
    },
    {
      row: 1
      ,col: 1,
      isMine: "",
      hidden:"true",
    },
    {
      row: 1,
      col: 2,
      isMine: "",
       hidden:"true",
    },
    {
      row: 2,
      col: 0,
      isMine: "",
      hidden:"true",
    },
    {
      row: 2,
      col: 1,
      isMine: "",
      hidden:"true",
    },
    {  
      row: 2,
      col: 2,
      isMine: "true",
      hidden:"true",
    }],
}

function startGame () {

  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);

  console.log(board.cells.length)
  for (a = 0; a < board.cells.length; a++) {
    board.cells[a].surroundingMines = countSurroundingMines(board.cells[a]);
    
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (a = 0; a < board.cells.length; a++) {
    if (board.cells[a].isMine) {
      if (board.cells[a].isMarked != true){
      return;
    }
    } else {
      if (board.cells[a].hidden) {
        return;
      } 
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  }
  lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0
  for(b = 0; b < surrounding.length; b++){
    if(surrounding[b].isMine){
      count++;
    }
  }

  return count;
}
