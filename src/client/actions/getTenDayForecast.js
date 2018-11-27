import {tenDayForecast} from './actions.js'
import axios from 'axios';


export const getTenDayForecast = (id) => {
  return (dispatch) => {
    let config = {
    url: '/api/park/tenDayForecast',
    method: 'post',
    data: {
      id: id
    }
  }
  axios(config)
    .then((data) => {
      console.log('this is the forecast:', data, data[0]);

      dispatch(tenDayForecast(data.data))
      })
    .catch(err => {
      console.log(err);
    })
  }
}