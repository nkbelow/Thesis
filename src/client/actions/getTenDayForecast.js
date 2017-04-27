import {tenDayForecast} from './actions.js'
import axios from 'axios';


export const getTenDayForecast = (latitude, longitude) => {
  return (dispatch) => {
    let config = {
    url: '/api/park/tenDayForecast',
    method: 'post',
    data: {
      latitude: latitude,
      longitude: longitude
    }
  }
  axios(config)
    .then((data) => {
      console.log(data['data']['simpleforecast']['forecastday']);
      dispatch(tenDayForecast(data['data']['simpleforecast']['forecastday']))
      })
    .catch(err => {
      console.log(err);
    })
  }
}