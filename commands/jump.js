const { setPageIndex } = require('../utils/page_index');
const display = require('./display');

module.exports = (args) => {
  const index = parseInt(args[0] - 1, 10);
  setPageIndex(index);
  display();
};
