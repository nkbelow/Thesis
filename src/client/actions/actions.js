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

// componentDidMount() {
//     this.props.getTenDayForecast(this.props.park.latitude, this.props.park.longitude)
//   }