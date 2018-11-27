import {campgrounds} from './actions.js';
import axios from 'axios';

export const getCampgrounds = (id) => {
  return (dispatch) => {
     axios.get('/api/campgrounds', {
        params: {
          parkId: id
          }
        })
      .then(res => {
        dispatch(campgrounds(res.data))

      })
      .catch(err => {
        console.log(err)
    })
  }
}