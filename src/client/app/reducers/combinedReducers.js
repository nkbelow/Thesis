import { combineReducers } from "redux";
import { updateFiltersSelections } from './updateFilters.js'
import { getParksReducer } from './getParks.js'

export default combineReducers({
  updateFiltersSelections: updateFiltersSelections, 
  getParksReducer: getParksReducer
});