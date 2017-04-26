import axios from 'axios';
import {distance} from './actions.js'

export const getDistance = () => {
  return (dispatch) => {
    return axios.get('/api/fitbit')
    .then(res => {
      dispatch(distance(res.data))
    })
    .catch(err => console.log('getDistance err', err)
    )}
}