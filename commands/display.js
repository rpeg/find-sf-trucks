const { getPageIndex } = require('../utils/page');
const { getTimeStamp } = require('../utils/date-time');
const getTrucks = require('../utils/trucks');

const printTruck = (truck) => {
  console.log(`\t${truck.applicant} | ${truck.location}`);
};

const printTrucks = (trucks) => {
  if (trucks.length) {
    console.log('\tNAME | ADDRESS\n');
    trucks.forEach((truck) => printTruck(truck));
  } else {
    console.log('\tNo results for this page');
  }
};

module.exports = async () => {
  try {
    const pageIndex = getPageIndex();
    console.log(`\nPage ${pageIndex + 1} --- ${getTimeStamp()}\n`);

    const trucks = await getTrucks(pageIndex);
    printTrucks(trucks);
  } catch (err) {
    console.log('Error fetching page, check connection.');
  }
};
