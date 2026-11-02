const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;

    for (const item of arr) {
      if (Array.isArray(item)) {
        maxDepth = Math.max(maxDepth, this.calculateDepth(item));
      }
    }

    return maxDepth + 1;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
