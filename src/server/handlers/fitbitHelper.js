const axios = require('axios');

const getYesterdaysDistance = (userId, accessToken) => {
  let config = {
    url: 'http://api.fitbit.com/1/user/' + userId +'/activities/date/2017-04-22.json',
    method: 'get', 
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json'
    },
    data: {}
  }
  return axios(config).then((result) => {
    console.log(result);
    return result;
  })
  .catch((err) => {
    console.log(err);
    throw err;
    res.end();
  })
};

module.exports = getYesterdaysDistance;