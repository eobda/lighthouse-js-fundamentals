/*
Create a function generateBoard which will return a nested array
representing the board, containing the location of two queens.

Create a function called queenThreat that will indicate whether or not the
two queens are positioned so that they attack each other.
*/

const generateBoard = function (whiteQueen, blackQueen) {
  // return nested array
  let board = [];

  // 8 x 8 board - outer loop (rows)
  for (let x = 0; x < 8; x++) {
    let row = [];
    // inner loop (columns)
    for (let y = 0; y < 8; y++) {

      if ((whiteQueen[0] === x && whiteQueen[1] === y) || (blackQueen[0] === x && blackQueen[1] === y)) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    board[x] = row;
  }

  return board;
}

const queenThreat = function(board) {
  // does not care about white or black; only reads a board

  if (checkHorizontal(board)) {
    return true;
  } else if (checkVertical(board)) {
    return true;
  } else if (checkDiagonal(board)) {
    return true;
  } else {
    return false;
  }
}

const checkHorizontal = function(board) {
  // has to "read" the board to find a 1
  // then checks the same row as the 1 to see if the other 1 is there

  for (let row of board) {
    // only tracks the number of queens in a single row
    let queens = 0;

    for (let x = 0; x < row.length; x++) {
      if (row[x] === 1) {
        queens += 1;
      }
    }

    if (queens > 1) {
      return true;
    }
  }

  return false;
}

const checkVertical = function(board) {
  let column = [];

  // reads the board to find a 1 and stores the Y position
  // reads the board to find another 1 and stores the Y position
  // if Y positions match then returns true

  for (let row of board) {
    for (let x = 0; x < row.length; x++) {
      if (row[x] === 1) {
        column.push(x);
      }
    }
  }

  if (column[0] === column[1]) {
    return true;
  }
  
  return false;
}

const checkDiagonal = function(board) {
  // records the coordinates of BOTH 1s on the board and compares them

  let queens = [];

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] === 1) {
        queens.push([x, y]);
      }
    }
  }

  for (let i = 1; i <= board.length; i++) {
    if ((queens[0][0] === queens[1][0] - i && queens[0][1] === queens[1][1] - i) || (queens[0][0] === queens[1][0] - i && queens[0][1] === queens[1][1] + i) || (queens[0][0] === queens[1][0] + i && queens[0][1] === queens[1][1] - i) || (queens[0][0] === queens[1][0] + i && queens[0][1] === queens[1][1] + i)) {
      return true;
    }
  }

  return false;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));