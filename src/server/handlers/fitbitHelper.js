const axios = require('axios');

const getYesterdaysDistance = (userId, accessToken) => {
  let config = {
    url: 'https://api.fitbit.com/1/user/' + userId +'/activities/distance/date/today/1w.json',
    method: 'get', 
    headers: {
      'Accept-Language': 'en_US',
      'Authorization': ('Bearer ' + accessToken)
    }
  }
  return axios(config).then((result) => {
    const average = (result.data['activities-distance'].map(function(data){
      return parseInt(data.value);
    }).reduce(function(prev, cur){
      return prev + cur;
    }, 0))/7;
    return average;
  })
  .catch((err) => {
    console.log('err', err.response.data.errors);
    throw err;
  })
};

module.exports = getYesterdaysDistance;