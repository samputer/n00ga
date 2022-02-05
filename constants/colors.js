const { Parameter } = require('../Parameter');

const prefix = 'C';
const values = {
  dimRed: 'A',
  red: 'B',
  brightRed: 'C',
  dimGreen: 'D',
  green: 'E',
  brightGreen: 'F',
  dimOrange: 'G',
  orange: 'H',
  brightOrange: 'I',
  yellow: 'J',
  lime: 'K',
  inverseRed: 'L',
  inverseGreen: 'M',
  inverseOrange: 'N',
  redonDimGreen: 'P',
  greenonDimRed: 'Q',
  RYG: 'R',
  rainbow: 'S',
};

module.exports = Parameter(prefix, values);
