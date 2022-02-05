const { Parameter } = require('../Parameter');

const prefix = 'B';
const values = {
  0.5: 'A',
  1: 'B',
  1.5: 'C',
  2: 'D',
  2.5: 'E',
  3: 'F',
  3.5: 'G',
  4: 'H',
  4.5: 'I',
  5: 'J',
  5.5: 'K',
  6: 'L',
  6.5: 'M',
  7: 'N',
  7.5: 'O',
  8: 'P',
  8.5: 'Q',
  9: 'R',
  9.5: 'S',
  10: 'T',
  10.5: 'U',
  11: 'V',
  11.5: 'W',
  12: 'X',
  12.5: 'Y',
  13: 'Z',
};
module.exports = Parameter(prefix, values);
