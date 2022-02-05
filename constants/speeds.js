const { Parameter } = require('../Parameter');

const prefix = 'M';

const values = {
  fast: 'A',
  fastBlink: 'B',
  fastSong1: 'C',
  fastSong2: 'D',
  fastSong3: 'E',
  mediumFast: 'Q',
  mediumFastBlink: 'R',
  mediumFastSong1: 'S',
  mediumFastSong2: 'T',
  mediumFastSong3: 'U',
  mediumSlow: 'a',
  mediumSlowBlink: 'b',
  mediumSlowSong1: 'c',
  mediumSlowSong2: 'd',
  mediumSlowSong3: 'e',
  slowest: 'q',
  slowestBlink: 'r',
  slowestSong1: 's',
  slowestSong2: 't',
  slowestSong3: 'u',
};

module.exports = Parameter(prefix, values);
