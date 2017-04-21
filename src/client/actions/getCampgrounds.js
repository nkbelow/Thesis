import {campgrounds} from './actions.js';
import axios from 'axios';

export const getCampgrounds = (id) => {
  return (dispatch) => {
    console.log(id, 'this is the id');
     axios.get('/api/campgrounds', {
        params: {
          parkId: id
          }
        })
      .then(res => {
        console.log(res.data, 'this are campgrounds');
        dispatch(campgrounds(res.data))

      })
      .catch(err => {
        console.log(campgrounds);
        console.log(err)
    })
  }
}