import {combineReducers} from 'redux';
import {getCampgrounds} from './getCampgroundsReducer.js';
import {individualPark} from './getParkReducer.js';
import {getTenDayForecast} from './getTenDayForecastReducer.js'


export default combineReducers( {
 individualPark: individualPark,
 getCampgrounds: getCampgrounds,
 getTenDayForecast: getTenDayForecast  
 
});