import {combineReducers} from 'redux';
import {getCampgrounds} from './getCampgroundsReducer.js';
import {individualPark} from './getParkReducer';
import { updateFiltersSelections } from './updateFilters.js'
import { getParksReducer } from './getParks.js'
import map from './mapReducer.jsx'
import {getTenDayForecast} from './getTenDayForecastReducer.js'
import {getLodging} from './getLodgingReducer.js'
import {visibleFilter} from './visibleFilterReducer.js'


export default combineReducers( {
 individualPark: individualPark,
 getCampgrounds: getCampgrounds,
 updateFiltersSelections: updateFiltersSelections,
 getParksReducer: getParksReducer,
 map: map, 
 getTenDayForecast: getTenDayForecast,
 getLodging: getLodging,
 visibleFilter: visibleFilter 
});