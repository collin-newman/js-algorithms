/**
 * Given a string representation of a 2d map, return the number of islands in the map.
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  let islands = 0;
  const map = mapStr.split('\n');

  const checkIsland = (mapArr, i, j) => {
    let left;
    let up;
    let down;
    let right;
    if (i - 1 < 0) {
      up = '.';
    } else {
      up = mapArr[i - 1][j];
    }
    if (j - 1 < 0) {
      left = '.';
    } else {
      left = mapArr[i][j - 1];
    }
    if (j + 1 >= mapArr[0].length) {
      right = '.';
    } else {
      right = mapArr[i][j + 1];
    }
    if (i + 1 >= mapArr.length) {
      down = '.';
    } else {
      down = mapArr[i + 1][j];
    }
    if (left === '.' && right === '.') {
      if (up === '.' && down === '.') {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < map.length; i++) {
    let land = map[i].indexOf('0');
    console.log(land);
    if (land !== -1) {
      if (checkIsland(map, i, land)) {
        islands++;
      }
    }
  }

  return islands;
}