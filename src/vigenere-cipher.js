const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(machineType = true) {
    this.direct = machineType !== false;
  }

  _process(message, key, isEncrypt) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const msg = String(message);
    const keyStr = String(key).toUpperCase();
    const keyLength = keyStr.length;

    let keyIndex = 0;
    let result = '';

    for (let i = 0; i < msg.length; i++) {
      const char = msg[i];

      if (/[A-Za-z]/.test(char)) {
        const code = char.toUpperCase().charCodeAt(0);
        const shift = keyLength
          ? keyStr.charCodeAt(keyIndex % keyLength) - 65
          : 0;

        const newCode = isEncrypt
          ? ((code - 65 + shift) % 26 + 26) % 26 + 65
          : ((code - 65 - shift) % 26 + 26) % 26 + 65;

        result += String.fromCharCode(newCode);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this._process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this._process(encryptedMessage, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
