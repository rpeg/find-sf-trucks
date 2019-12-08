const { setPageIndex } = require('../utils/page');
const display = require('./display');

module.exports = (args) => {
  const index = parseInt(args[0], 10) - 1;

  if (typeof index === 'number' && index >= 0) {
    setPageIndex(index);
    display();
  } else {
    console.log('Invalid page.');
  }
};
