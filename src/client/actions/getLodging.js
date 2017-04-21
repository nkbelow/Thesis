import axios from 'axios';
import {lodging} from './actions.js'


export const getLodging = (latitude, longitude) => {
  return (dispatch) => {
    axios.get('/api/park/lodgings', {
      params: {
        lat: latitude,
        lon: longitude
      }
    })
    .then(res => {
      dispatch(lodging(res.data))
    })
    .catch(err => console.log(err)
    )}

}