import axios from 'axios';
import {trails} from './actions.js';

export const getTrails(id) => {
  return (dispatch) => {
    axios.get('/api/trails')
    .then((result) => {
      console.log(result, 'these are the trails');
      dispatch(trails(result))
    })
    .catch((err) => {
      console.log(err, 'this is the error')
    })
  }
}