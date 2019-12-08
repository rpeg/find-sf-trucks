const { getPageIndex, getKnownPageLimit, setKnownPageLimit } = require('../utils/page');
const { getTimeStamp } = require('../utils/date-time');
const getTrucks = require('../utils/trucks');

const printTruck = (truck) => {
  console.log(`\t${truck.applicant} | ${truck.location}`);
};

const printTrucks = (trucks) => {
  console.log('\tNAME | ADDRESS\n');
  trucks.forEach((truck) => printTruck(truck));
};

const printPageHeader = (pageIndex) => { console.log(`\nPage ${pageIndex + 1} --- ${getTimeStamp()}\n`); };

const printNoResults = () => { console.log('\tNo results for this page'); };

module.exports = async () => {
  const pageIndex = getPageIndex();

  printPageHeader(pageIndex);

  // prevent fetches for pages outside of known range
  if (pageIndex >= getKnownPageLimit()) {
    printNoResults();
    return;
  }

  try {
    const trucks = await getTrucks(pageIndex);

    if (trucks.length) {
      printTrucks(trucks);
    } else {
      printNoResults();
      setKnownPageLimit(pageIndex);
    }
  } catch (err) {
    console.log('Error fetching page, check connection.');
  }
};
