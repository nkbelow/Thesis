import {combineReducers} from 'redux';
import {getCampgrounds} from './getCampgroundsReducer.js';
import {individualPark} from './getParkReducer';
import { updateFiltersSelections } from './updateFilters.js'
import { getParksReducer } from './getParks.js'
import map from './mapReducer.jsx'


export default combineReducers( {
 individualPark: individualPark,
 getCampgrounds: getCampgrounds,
 updateFiltersSelections: updateFiltersSelections,
 getParksReducer: getParksReducer,
 map: map 
 
});