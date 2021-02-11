/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  board.validPiece = function(n, i, j) {
    if (i < n && j < n) {
      if (i >= 0 && j >= 0) {
        return true;
      }
    }
    return false;
  }
  return board;
};

var robotPaths = function(n, board, i, j) {
  let paths = 0;

  const findPath = (board, i, j) => {
    if (board.validPiece(n, i, j)) {
      board.togglePiece(i, j);
    } else {
      return;
    }
    //path is valid
    if (i === n - 1 && j === n - 1) {
      paths++;
      return;
    }

    //try to go up
    if (!board.hasBeenVisited(i + 1, j)) {
      findPath(board, i + 1, j);
    }
    //try to go down
    if (!board.hasBeenVisited(i - 1, j)) {
      findPath(board, i - 1, j);
    }
    //try to right
    if (!board.hasBeenVisited(i, j + 1)) {
      findPath(i, j+ 1);
    }
    // try to go left
    if (!board.hasBeenVisited(i, j - 1)) {
      findPath(i, j - 1);
    }

  }

  findPath(board, i, j);

  return paths;
};

