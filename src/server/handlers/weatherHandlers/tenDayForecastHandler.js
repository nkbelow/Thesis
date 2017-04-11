const axios = require('axios');

let getForecast = (req, res) => {
  //lat and longitude will need to come from req
  let config = {
    url: 'http://api.wunderground.com/api/' + process.env.WEATHER_UNDERGROUND_API_KEY + '/forecast10day/q/'
     + 44.59824417 + ',' + -110.5471695 + '.json',
    method: 'get', 
    responseType: 'json'
  }
  return axios(config).then((result) => {
    console.log(config.url);
    console.log(result);
    res.send(result['data']['forecast']);
  })
  .catch((err) => {
    console.log(err);
    throw err;
    res.end();
  })
};

module.exports.getForecast = getForecast;