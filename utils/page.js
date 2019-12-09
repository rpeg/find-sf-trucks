let pageIndex = 0;
let pageLimit = Number.MAX_SAFE_INTEGER;

exports.getPageIndex = () => pageIndex;

exports.setPageIndex = (index) => {
  if (index >= 0) { pageIndex = index; }
};

exports.getKnownPageLimit = () => pageLimit;

exports.setKnownPageLimit = (index) => {
  if (index >= 0 && index < pageLimit) { pageLimit = index; }
};
