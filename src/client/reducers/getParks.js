import { PARKS_REQUEST_START, PARKS_REQUEST_FAILURE, PARKS_REQUEST_SUCCESS } from "../actions/getParks.js"

const initialState = {
    isFetching: false,
    filters: [],
    parks: []
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
    case PARKS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        filters: action.filters,
        parks: action.parks
      })
    default:
      return state
  }
}