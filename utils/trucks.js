const { setup } = require('axios-cache-adapter');

const { getDate } = require('./date');

const PAGE_COUNT = 10;

const api = setup({
  baseURL: 'https://data.sfgov.org',

  cache: {
    maxAge: 24 * 60 * 60 * 1000, // one day
  },
});

module.exports = async (pageIndex) => {
  const date = getDate();
  const dayorder = date.getDay();
  const startTimeCeiling = `'${date.getHours()}:00'`;
  const endTimeFloor = `'${date.getHours() + 1}:00'`;

  const results = await api.get('/resource/jjew-r69b.json', {
    params: {
      dayorder,
      $where: `start24 between '0:00' and ${startTimeCeiling} AND end24 between ${endTimeFloor} and '24:00'`,
      $limit: PAGE_COUNT,
      $offset: pageIndex * PAGE_COUNT,
    },
  });

  return results.data;
};
