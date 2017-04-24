const axios = require('axios');

let getForecast = (req, res) => {
console.log(req['body'], 'this is the req data');
  let config = {
    url: 'http://api.wunderground.com/api/' + process.env.WEATHER_UNDERGROUND_API_KEY + '/forecast10day/q/'
     + req['body']['latitude'] + ',' + req['body']['longitude'] + '.json',
    method: 'get', 
    responseType: 'json'
  }
  return axios(config).then((result) => {
    res.send(result['data']['forecast']);
  })
  .catch((err) => {
    console.log(err);
    throw err;
    res.end();
  })
};

module.exports.getForecast = getForecast;