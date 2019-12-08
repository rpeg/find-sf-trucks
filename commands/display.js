const { getPageIndex } = require('../utils/page_index');
const { getDate } = require('../utils/date');
const getTrucks = require('../utils/trucks');

const getTimeStamp = () => {
  const date = getDate();
  const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
  const hour = date.getHours();
  const minute = `0${date.getMinutes()}`.slice(-2);

  return `(${dayOfWeek}, ${hour % 12}:${minute} ${hour >= 12 ? 'PM' : 'AM'})`;
};

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
    const pageIndex = getPageIndex() || 0;
    console.log(`\nPage ${pageIndex + 1} --- ${getTimeStamp()}\n`);

    const trucks = await getTrucks(pageIndex);
    printTrucks(trucks);
  } catch (err) {
    console.log('Error fetching page, check connection.');
  }
};
