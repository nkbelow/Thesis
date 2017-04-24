import axios from 'axios';
import {trails} from './actions.js';

export const getTrails = (id) => {
  return (dispatch) => {
    console.log('made it into trails');
    axios.get('/api/trails', {
      params: {
        parkId: id
      }
    })
    .then((result) => {
      console.log(result['data'], 'these are the trails');
      dispatch(trails(result['data']))
    })
    .catch((err) => {
      console.log(err, 'this is the error')
    })
  }
}