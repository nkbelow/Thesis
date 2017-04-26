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

export const activeParks = (park) => {
  return {
    type: 'SET_ACTIVE_PARKS',
    filter: filter
  }
}