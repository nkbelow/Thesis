import {combineReducers} from 'redux';
import {getCampgrounds} from './getCampgroundsReducer.js';
import {individualPark} from './getParkReducer';
import map from './mapReducer.jsx'


export default combineReducers( {
 individualPark: individualPark,
 getCampgrounds: getCampgrounds,
 map: map 
 
});