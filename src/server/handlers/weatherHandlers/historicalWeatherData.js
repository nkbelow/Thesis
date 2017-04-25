const axios = require('axios');

let getHistoricalData = (req, res) => {
  //longitude will need to come from req
  //latitude will need to come from req
  //dates will need to come from req
  console.log(req.query, 'this is the query data');
  let config = {
    url: 'http://api.wunderground.com/api/' + process.env.WEATHER_UNDERGROUND_API_KEY +
     '/planner_07010731/q/37.776289,-122.395234.json',
    method: 'get',
  }
  return axios(config).then((result) => {
    res.status(200).send(result['data']);
  })
  .catch((err) => {
    console.log(err);
    res.send(err)
  })
}


module.exports = {getHistoricalData};