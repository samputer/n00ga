const calculateChecksum = (boardIDParameter, message) => {
  const messageLength = message.length;
  const messageLengthMinusBoardID = messageLength - boardIDParameter.length;

  const unicodeValues = [];
  const xorValues = [];
  const hexValues = [];

  // There has to be an easier way of doing this... Sourced from Excel spreadsheet logic
  for (var i = 0; i < message.length; i++) {
    unicodeValues[i] = message.charCodeAt(i + boardIDParameter.length);
    if (xorValues[i - 1] !== undefined) {
      xorValues[i] = xorValues[i - 1] ^ unicodeValues[i];
    } else {
      xorValues[i] = unicodeValues[i - 1] ^ unicodeValues[i];
    }

    if (i === 0) {
      continue;
    }

    hexValues[i] = xorValues[i].toString(16);
    hexValues[i] =
      hexValues[i].length === 1 ? `0${hexValues[i]}` : hexValues[i];
  }

  return hexValues[messageLengthMinusBoardID].toUpperCase();
};

module.exports = {
  calculateChecksum,
};
