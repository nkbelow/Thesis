import {tenDayForecast} from './actions.js'
import axios from 'axios';


export const getTenDayForecast = (latitude, longitude) => {
  return (dispatch) => {
    console.log('this fired');
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
      console.log('where is this other call coming from ')
      console.log(data, 'this is the weather data');
        dispatch(tenDayForecast(data['data']['simpleforecast']['forecastday']))
      })
    .catch(err => {
      console.log(err);
    })
  }
}