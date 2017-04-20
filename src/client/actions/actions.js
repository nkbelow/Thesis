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