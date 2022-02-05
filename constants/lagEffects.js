const { Parameter } = require('../Parameter');

const prefix = 'F';

const values = {
  immediate: 'A',
  xOpen: 'B',
  curtainUp: 'C',
  curtainDn: 'D',
  scrollL: 'E',
  scrollR: 'F',
  vOpen: 'G',
  vClose: 'H',
  scrollUp: 'I',
  scrollDn: 'J',
  hold: 'K',
};

module.exports = Parameter(prefix, values);
