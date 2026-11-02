const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  options = options || {};

  const repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  const separator = options.separator === undefined ? '+' : String(options.separator);
  const additionSeparator = options.additionSeparator === undefined
    ? '|'
    : String(options.additionSeparator);

  const hasAddition = options.addition !== undefined;
  const addition = hasAddition ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes === undefined
    ? 1
    : options.additionRepeatTimes;

  const additionPart = hasAddition
    ? Array(additionRepeatTimes).fill(addition).join(additionSeparator)
    : '';

  return Array(repeatTimes)
    .fill(String(str) + additionPart)
    .join(separator);
}

module.exports = {
  repeater
};
