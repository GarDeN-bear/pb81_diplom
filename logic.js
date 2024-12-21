let players = ['x', 'o'];
let activePlayer = 0;
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

function startGame() {
  board = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
  ];
  activePlayer = 0;
  renderBoard(board);
}

function isWin(row, column, board) {
  function checkRow() {
    for (let i = 0; i < board.length; ++i) {
      if (board[row][i] != players[activePlayer]) {
        return false;
      }
    }
    return true;
  }

  function checkColumn() {
    for (let i = 0; i < board.length; ++i) {
      if (board[i][column] != players[activePlayer]) {
        return false;
      }
    }
    return true;
  }

  function checkDiagonal() {
    let isFirstDiagonalWin = true;
    let isSecondDiagonalWin = true;
    for (let i = 0; i < board.length; ++i) {
      if (board[i][i] != players[activePlayer]) {
        isFirstDiagonalWin = false;
        break;
      }
    }
    for (let i = 0; i < board.length; ++i) {
      if (board[i][board.length - i - 1] != players[activePlayer]) {
        isSecondDiagonalWin = false;
        break;
      }
    }
    return isFirstDiagonalWin || isSecondDiagonalWin;
  }

  return checkRow() || checkColumn() || checkDiagonal();
}

function click(row, column) {
  board[row][column] = players[activePlayer];
  renderBoard(board);
  if (isWin(row, column, board)) {
    showWinner(activePlayer);
  } else {
    activePlayer = activePlayer == 0 ? 1 : 0;
  }
}

startGame();

