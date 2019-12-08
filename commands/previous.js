const { getPageIndex, setPageIndex } = require('../utils/page_index');
const display = require('./display');

module.exports = () => {
  setPageIndex(getPageIndex() - 1);
  display();
};
