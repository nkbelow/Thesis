import axios from 'axios';
import {distance} from './actions.js'

export const getDistance = () => {
  return (dispatch) => {
    return axios.get('/auth/fitbit', { headers: {'Content-Type': 'application/json'}, data: {} })
    .then(res => {
      dispatch(distance(res.data))
    })
    .catch(err => console.log(err)
    )}
}