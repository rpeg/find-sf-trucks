let pageIndex = 0;

exports.getPageIndex = () => pageIndex;

exports.setPageIndex = (index) => {
  if (index >= 0) { pageIndex = index; }
};
