import {getIndividualPark} from '../actions/actions.js';
import axios from 'axios';

export const getPark = (code) => {
  return (dispatch) => {
     axios.get('/api/park', {
        params: {
          parkcode: code
        }
      })
      .then((res) => {
        console.log(res.data, 'this is the data');
        dispatch(getIndividualPark(res.data))
        })
      .catch(err => console.log(err))
    }
  }

  // activities={this.state.activities} 
  // campgrounds={this.state.campgrounds}