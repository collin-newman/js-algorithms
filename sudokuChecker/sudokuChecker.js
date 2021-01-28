/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  // Your code here.
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const boardData = board.split('\n').filter(item => item !== '');
  for (let i = 0; i < boardData.length; i++) {
    boardData[i] = boardData[i].split('');
  }

  const checkNumbers = (row) => {
    return row.reduce((acc, cur) => {
      console.log(acc)
      if (digits.includes(Number(cur))) {
        return acc += 1;
      }
    }, 0) === 9;
  }

  // check all rows
  let passingRows = 0;
  for (let i = 0; i < boardData.length; i++) {
    if (checkNumbers(boardData[i])) {
      passingRows++;
    }
  }

  // check all columns
  let passingCols = 0;
  for (let i = 0; i < boardData.length; i++) {
    const col = [boardData[i][0], boardData[i][1], boardData[i][2], boardData[i][3], boardData[i][4], boardData[i][5], boardData[i][6], boardData[i][7], boardData[i][8]];
    if (checkNumbers(col)) {
      passingCols++;
    }
  }

  // check 3x3s
  let passingBoxes = 0;
  for (let i = 0; i < 3; i++) {
    const box1 = [boardData[i][0], boardData[i][1], boardData[i][2], boardData[i + 1][0], boardData[i + 1][1], boardData[i + 1][2], boardData[i + 2][0], boardData[i + 2][1], boardData[i + 2][2]];
    const box2 = [boardData[i][3], boardData[i][4], boardData[i][5], boardData[i + 1][3], boardData[i + 1][4], boardData[i + 1][5], boardData[i + 2][3], boardData[i + 2][4], boardData[i + 2][5]];
    const box3 = [boardData[i][6], boardData[i][7], boardData[i][8], boardData[i + 1][6], boardData[i + 1][7], boardData[i + 1][8], boardData[i + 2][6], boardData[i + 2][7], boardData[i + 2][8]];
    [box1, box2, box3].forEach(box => {
      if (checkNumbers(box)) {
        passingBoxes++;
      }
    });
  }
  if (passingBoxes === 9 && passingCols === 9 && passingRows === 9) {
    return 'solved';
  } else {
    return 'invalid';
  }
}
