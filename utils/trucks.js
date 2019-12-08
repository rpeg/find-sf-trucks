const axios = require('axios');
const cachios = require('cachios');

const { getDate } = require('./date');

const PAGE_COUNT = 10;

const axiosInstance = axios.create({
  baseURL: 'https://data.sfgov.org',
});

const cachiosInstance = cachios.create(axiosInstance, {
  stdTTL: 60 * 60, // persist cache results for an hour
});

module.exports = async (pageIndex) => {
  const date = getDate();
  const dayorder = date.getDay();
  const startTimeCeiling = `'${date.getHours()}:00'`;
  const endTimeFloor = `'${date.getHours() + 1}:00'`;

  const response = await cachiosInstance.get('/resource/jjew-r69b.json', {
    params: {
      dayorder,
      $where: `start24 between '0:00' and ${startTimeCeiling} AND end24 between ${endTimeFloor} and '24:00'`,
      $limit: PAGE_COUNT,
      $offset: pageIndex * PAGE_COUNT,
      $order: 'applicant ASC',
    },
  });

  return response.data;
};
