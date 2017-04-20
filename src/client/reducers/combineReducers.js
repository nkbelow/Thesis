import {combineReducers} from 'redux';
import {getCampgrounds} from './getCampgroundsReducer.js';
import {individualPark} from './getParkReducer';
<<<<<<< HEAD
import { updateFiltersSelections } from './updateFilters.js'
import { getParksReducer } from './getParks.js'
import map from './mapReducer.jsx'
||||||| merged common ancestors
=======
import map from './mapReducer.jsx'
import {getTenDayForecast} from './getTenDayForecastReducer.js'
import {getLodging} from './getLodgingReducer.js'

>>>>>>> feat move thunks to actions folder


export default combineReducers( {
<<<<<<< HEAD
 individualPark: individualPark,
 getCampgrounds: getCampgrounds,
 updateFiltersSelections: updateFiltersSelections,
 getParksReducer: getParksReducer,
 map: map 
 
||||||| merged common ancestors
 getCampgrounds,
 individualPark
=======
 individualPark: individualPark,
 getCampgrounds: getCampgrounds,
 map: map,
 getTenDayForecast: getTenDayForecast,
 getLodging: getLodging  
>>>>>>> feat move thunks to actions folder
});