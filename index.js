const SerialPort = require('serialport');

const { calculateChecksum } = require('./checksum');

const {
  columns,
  fonts,
  lagEffects,
  leadEffects,
  lines,
  pages,
  speeds,
  waitTimes,
  colors,
  bells,
} = require('./constants');

const defaultOptions = {
  boardId: '01',
  bell: undefined,
  column: '0',
  color: 'rainbow',
  font: 'bold',
  lagEffect: 'scrollL',
  leadEffect: 'scrollL',
  line: '1',
  page: 'A',
  speed: 'mediumFast',
  waitTime: '5',
};

const convertOptionsToParameters = (options) => ({
  bell: bells.build(options.bell),
  column: columns.build(options.column),
  color: colors.build(options.color),
  font: fonts.build(options.font),
  lagEffect: lagEffects.build(options.lagEffect),
  leadEffect: leadEffects.build(options.leadEffect),
  line: lines.build(options.line),
  page: pages.build(options.page),
  speed: speeds.build(options.speed),
  waitTime: waitTimes.build(options.waitTime),
});

const N00GA = (serialPort, inputOptions = defaultOptions) => {
  let options = { ...defaultOptions, ...inputOptions };
  const boardIDParameter = `<ID${options.boardId}>`;
  const globalBoardIDParameter = `<ID00>`;
  const END_PARAMETER = '<E>';
  let port;

  const initialise = async () => {
    port = new SerialPort(serialPort, { baudRate: 9600 });
    port.on('error', function (err) {
      throw new Error('Error on write: ', err.message);
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const generateMessage = (textMessage, optsOverride) => {
    const {
      bell,
      color,
      column,
      font,
      lagEffect,
      leadEffect,
      line,
      page,
      speed,
      waitTime,
    } = convertOptionsToParameters({ ...options, ...optsOverride });
    const messageRoot = `${boardIDParameter}${line}${page}${leadEffect}${speed}${waitTime}${lagEffect}${font}${bell}${color}${column}${textMessage}`;
    const checksum = calculateChecksum(boardIDParameter, messageRoot);
    return `${messageRoot}${checksum}${END_PARAMETER}`;
  };

  const sendRawMessage = (message) => {
    if (port === undefined) {
      throw new Error('Must call initialise function before use');
    }
    return port.write(message, function (err) {
      if (err) {
        throw new Error('Error on write: ', err.message);
      }
    });
  };

  const send = (textMessage, optsOverride) => {
    const message = generateMessage(textMessage, optsOverride);
    return sendRawMessage(message);
  };

  const clearPage = (pageLetter) => {
    const baseMessage = `${boardIDParameter}<DL1P${pageLetter}>`;
    sendRawMessage(
      `${baseMessage}${calculateChecksum(
        boardIDParameter,
        baseMessage,
      )}${END_PARAMETER}`,
    );
  };

  const runPage = (pageLetter) => {
    const baseMessage = `${globalBoardIDParameter}<RP${pageLetter}>`;
    sendRawMessage(
      `${baseMessage}${calculateChecksum(
        boardIDParameter,
        baseMessage,
      )}${END_PARAMETER}`,
    );
  };

  const resetToFactory = (confirm) => {
    if (!confirm) {
      throw new Error(
        'Warning - this will delete all pages and reset your display to factory settings - pass true as a parameter to confirm',
      );
    } else {
      sendRawMessage('<ID00><D*>6C<E>');
    }
  };

  const showDateTime = () => {
    send('<KD> <KT>');
  };

  return {
    initialise,
    generateMessage,
    resetToFactory,
    clearPage,
    runPage,
    showDateTime,
    send,
  };
};

module.exports = { N00GA };
