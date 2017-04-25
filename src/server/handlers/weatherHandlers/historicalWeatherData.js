const axios = require('axios');

let getHistoricalData = (req, res) => {
  let config = {
    url: 'http://api.wunderground.com/api/' + process.env.WEATHER_UNDERGROUND_API_KEY +
     '/planner_' + req.query.month + '/q/' + req.query.latitude + ',' + req.query.longitude + '.json',
    method: 'get',
  }
  return axios(config).then((result) => {
    console.log(result)
    res.status(200).send(result['data']);
  })
  .catch((err) => {
    console.log(err);
    res.send(err)
  })
}


module.exports = getHistoricalData;