const { Parameter } = require('../Parameter');

const prefix = 'F';

const values = {
  immediate: 'A',
  xopen: 'B',
  curtainUp: 'C',
  curtainDn: 'D',
  scrollL: 'E',
  scrollR: 'F',
  vOpen: 'G',
  vClose: 'H',
  scrollUp: 'I',
  scrollDn: 'J',
  hold: 'K',
  snow: 'L',
  twinkle: 'M',
  blockMove: 'N',
  random: 'P',
  penHello: 'Q',
  penWelcome: 'R',
  penAmplus: 'S',
};

module.exports = Parameter(prefix, values);
