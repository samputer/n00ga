const { Parameter } = require('../Parameter');

const prefix = 'A';
const values = { normal: 'A', bold: 'B', narrow: 'C', large: 'D', long: 'E' };

module.exports = Parameter(prefix, values);
