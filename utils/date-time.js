const date = new Date();

exports.getDate = () => date;

exports.getTimeStamp = () => {
  const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
  const hour = date.getHours();
  const minute = `0${date.getMinutes()}`.slice(-2);

  return `${dayOfWeek}, ${hour % 12 ? hour % 12 : '12'}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;
};
