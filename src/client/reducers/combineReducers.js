import {combineReducers} from 'redux';
import {getCampgrounds} from './getCampgroundsReducer.js';
import {individualPark} from './getParkReducer';


export default combineReducers( {
 getCampgrounds,
 individualPark
});