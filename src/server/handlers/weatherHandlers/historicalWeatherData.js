const axios = require('axios');

let getHistoricalData = (req, res) => {
  //longitude will need to come from req
  //latitude will need to come from req
  //dates will need to come from req
  console.log(req.query, 'this is the query data');
  let config = {
    url: 'http://api.wunderground.com/api/' + process.env.WEATHER_UNDERGROUND_API_KEY +
     '/planner_' + req.query.month + '/q/' + req.query.latitude + ',' + req.query.longitude + '.json',
    method: 'get',
  }
  return axios(config).then((result) => {
    console.log()
    res.status(200).send(result['data']);
  })
  .catch((err) => {
    console.log(err);
    res.send(err)
  })
}


module.exports = getHistoricalData;