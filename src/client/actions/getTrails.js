import axios from 'axios';
import {trails} from './actions.js';

export const getTrails = (id) => {
  return (dispatch) => {
    axios.get('/api/trails', {
      params: {
        parkId: id
      }
    })
    .then((result) => {
      dispatch(trails(result['data']))
    })
    .catch((err) => {
      console.log(err, 'this is the error')
    })
  }
}