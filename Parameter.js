const Parameter = (prefix, values) => {
  const build = (value) => {
    if (value === undefined) {
      return '';
    }
    if (Object.keys(values).indexOf(value) == -1) {
      throw new Error(
        `Invalid value: ${value} not in ${JSON.stringify(values, null, 2)}`,
      );
    }
    return `<${prefix}${values[value]}>`;
  };

  const getAvailableValues = () => values;
  const getPrefix = () => prefix;

  return {
    build,
    getAvailableValues,
    getPrefix,
  };
};

module.exports = { Parameter };
