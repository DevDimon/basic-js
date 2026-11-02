const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!matrix.length) return 0;

  const cols = matrix[0].length;
  const blocked = Array(cols).fill(false);

  let sum = 0;

  for (const row of matrix) {
    for (let col = 0; col < cols; col++) {
      if (blocked[col]) continue;

      if (row[col] === 0) {
        blocked[col] = true;
      } else {
        sum += row[col];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
