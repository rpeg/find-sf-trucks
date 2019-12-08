const { getPageIndex, setPageIndex } = require('../utils/page');
const display = require('./display');

module.exports = () => {
  setPageIndex(getPageIndex() - 1);
  display();
};
