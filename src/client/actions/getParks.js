import axios from 'axios'

// action
export const PARKS_REQUEST_START = 'PARKS_REQUEST_START'
export const PARKS_REQUEST_FAILURE = 'PARKS_REQUEST_FAILURE'
export const ALL_PARKS_REQUEST_SUCCESS = 'ALL_PARKS_REQUEST_SUCCESS'
export const FILTERED_PARKS_REQUEST_SUCCESS = 'FILTERED_PARKS_REQUEST_SUCCESS'
export const CALCULATE_REMAINING_PARKS = 'CALCULATE_REMAINING_PARKS'

// actions that govern the network request
export const parksRequestStart = () => {
  return {
    type: PARKS_REQUEST_START,
  }
}

export const parksRequestFailure = () => {
  return {
    type: PARKS_REQUEST_FAILURE,
    error: 'Could not fetch parks data!'
  }
}

export const allParksRequestSuccess = (allParks) => {
  return {
    type: ALL_PARKS_REQUEST_SUCCESS,
    allParks: allParks
  }
}

export const filteredParksRequestSuccess = (filters, filteredParks) => {
  return {
    type: FILTERED_PARKS_REQUEST_SUCCESS,
    filters: filters,
    filteredParks: filteredParks
  }
}

export const calculateRemainingParks = (remainingParks) => {
  return {
    type: CALCULATE_REMAINING_PARKS,
    remainingParks: remainingParks
  }
}

// thunk to get updated parks
// invoke the thunk by dispatch(getParks(filters))
// filters should equal the whole filters property
export const getFilteredParks = (filters) => {
  return (dispatch) => { 
    dispatch(parksRequestStart(filters))
    return axios.get('/api/parks', {
        params: {
          filters: filters
        }
      })
      .then((res) => {
        dispatch(filteredParksRequestSuccess(filters, res.data))
      })
      .catch(err => dispatch(parksRequestFailure()))
  }
}

export const getAllParks = (filters) => {
  return (dispatch) => { 
    dispatch(parksRequestStart())
    return axios.get('/api/parks', {
        params: {
          filters: filters
        }
      })
      .then((res) => {
        dispatch(allParksRequestSuccess(res.data))
      })
      .catch(err => dispatch(parksRequestFailure()))
  }
}

export const getRemainingParks = (filteredParks, allParks) => {
  return (dispatch) => {

    let allParksCopy = allParks.slice();
    let remainingParks = []

    allParks.forEach(function(park) {
      let found = false;
      
      filteredParks.forEach( function(filterPark) {
        if(filterPark.name === park.name) {
          found = true;
        }
      })
      
      if( !found) {
        remainingParks.push(park.name)
      } 

    })
    
    dispatch(calculateRemainingParks(remainingParks))
  } 
}


