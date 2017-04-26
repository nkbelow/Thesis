import { PARKS_REQUEST_START, PARKS_REQUEST_FAILURE, ALL_PARKS_REQUEST_SUCCESS, FILTERED_PARKS_REQUEST_SUCCESS, CALCULATE_REMAINING_PARKS } from "../actions/getParks.js"

const initialState = {
  isFetching: false,
  filters: [],
  allParks: [],
  filteredParks: [],
  remainingParks: []
}

export const getParksReducer = (state=initialState, action) => {
  switch (action.type) {
    case PARKS_REQUEST_START:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case PARKS_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    case ALL_PARKS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        allParks: action.allParks
      })
    case FILTERED_PARKS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        filters: action.filters,
        filteredParks: action.filteredParks
      })
    case CALCULATE_REMAINING_PARKS:
      return Object.assign({}, state, {
        remainingParks: action.remainingParks
      })
    default:
      return state
  }
}