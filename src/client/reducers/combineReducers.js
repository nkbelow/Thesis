import {combineReducers} from 'redux';
import {getCampgrounds} from './getCampgroundsReducer.js';
import {individualPark} from './getParkReducer';
import  {updateFiltersSelections}  from './updateFilters.js';
import  {getParksReducer}  from './getParks.js';
import map from './mapReducer.jsx';
import {getTenDayForecast} from './getTenDayForecastReducer.js';
import {getLodging} from './getLodgingReducer.js';
import {visibleFilter} from './visibleFilterReducer.js';
import {getTrails} from './getTrailsReducer.js';
import {getHistoricalData} from './getHistoricalDataReducer.js';
import {payments} from './payments.js'
import {getDistance} from './getDistance.js';

export default combineReducers( {
 individualPark: individualPark,
 getCampgrounds: getCampgrounds,
 updateFiltersSelections: updateFiltersSelections,
 getParksReducer: getParksReducer,
 map: map, 
 getTenDayForecast: getTenDayForecast,
 getLodging: getLodging,
 visibleFilter: visibleFilter,
 getTrails: getTrails,
 getHistoricalData: getHistoricalData,
 payments: payments,
 getDistance: getDistance
});