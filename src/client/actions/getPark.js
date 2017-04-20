import {getIndividualPark} from './individualPark.js';
import axios from 'axios';

export const getPark = (code) => {
  console.log('this goes');
  console.log(this.props, 'these are my')
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