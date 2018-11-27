export const campgrounds = (campgrounds) => {
  return {
    type: 'GET_CAMPGROUNDS',
    campgrounds: campgrounds
  }
}

export const getIndividualPark = (individualPark) => {
  return {
    type: 'GET_INDIVIDUAL_PARK_AND_ACTIVITIES',
    individualPark: individualPark
  }
}

export const showFilters = (visible) => {
  return {
    type: 'IS_VISIBLE',
    visible: visible
  }
}

export const tenDayForecast = (tenDayForecast) => {
  return {
    type: 'GET_TEN_DAY_FORECAST',
    tenDayForecast: tenDayForecast
  }
}

export const lodging = (lodging) => {
  return {
    type: 'GET_LODGING',
    lodging: lodging
  }
}


export const trails = (trails) => {
  return {
    type: 'GET_TRAILS',
    trails: trails
  }
}


export const historicalData = (historicalData) => {
  return {
    type: 'HISTORICAL_DATA',
    historicalData: historicalData
  }
}

export const distance = (distance) => {
  return {
    type: 'GET_DISTANCE',
    distance: distance
  }
}

export const activePark = (park) => {
  return {
    type: 'SET_ACTIVE_PARK',
    park: park
  }
}

export const setActiveParks = (parks) => {
  return {
    type: 'SET_ACTIVE_PARKS',
    parks: parks
  }
}

export const toggleCampgrounds = () => {
  return {
    type: 'TOGGLE_CAMPGROUNDS'
  }
}

export const toggleLodging = () => {
  return {
    type: 'TOGGLE_LODGING'
  }
}

export const addPopup = (park) => {
  return {
        type: 'ADD_POPUP', 
        park: park
      }
}

export const removePopup = () => {
  return {
        type: 'REMOVE_POPUP'
      }
}