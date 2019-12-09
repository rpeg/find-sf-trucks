const { setPageIndex } = require('../utils/page');
const display = require('./display');

module.exports = (args) => {
  const page = parseInt(args[0], 10);

  if (typeof page === 'number' && page > 0) {
    setPageIndex(page - 1);
    display();
  } else {
    console.log('Invalid page.');
  }
};
