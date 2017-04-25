import axios from 'axios';
import {historicalData} from './actions.js';

export const getHistoricalData = (latitude, longitude, month) => {
  return (dispatch) => {
    return axios.get('/api/historicalWeatherData', {
      params: {
        latitude: latitude,
        longitude: longitude,
        month: month
      }
    })
    .then((result) => {
      console.log(result, 'result');
      dispatch(historicalData(result));
    })
    .catch((error) => {
      console.log(error, 'this is the error');
      res.send(error);
    })
  }
}