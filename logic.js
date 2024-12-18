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

function isWin(board) {
  for (let row = 0; row < board.length; ++row) {
    let countByRow = 0;
    let countByColumn = 0;
    let countByDiagonal = 0;
    for (let column = 0; column < board.length; ++column) {
      if (board[row][column] == players[activePlayer]) {
        ++countByColumn;
      }
      if (board[column][row] == players[activePlayer]) {
        ++countByRow;
      }
      if (board[column][column] == players[activePlayer]) {
        ++countByDiagonal;
      } else if (
        board[column][board.length - column - 1] == players[activePlayer]
      ) {
        ++countByDiagonal;
      }
      if (
        countByColumn == board.length ||
        countByRow == board.length ||
        countByDiagonal == board.length
      ) {
        return true;
      }
    }
  }
  return false;
}

function click(row, column) {
  board[row][column] = players[activePlayer];
  renderBoard(board);
  if (isWin(board)) {
    showWinner(activePlayer);
  } else {
    activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
  }
}

startGame();
