import axios from 'axios'

export const UPDATE_COMBINATION_SELECTIONS = 'UPDATE_COMBINATION_SELECTIONS'
export const UPDATE_SINGLE_SELECTION = 'UPDATE_SINGLE_SELECTION'
export const ON_ACTIVITIES_HOVER = 'ON_ACTIVITIES_HOVER'

// dispatch to toggle the selection

export const onCombinationFilterClick = (filter) => {
  return {
    'type': UPDATE_COMBINATION_SELECTIONS,
    'name': filter
  }
}

export const onSingleFilterClick = (filter) => {
  return {
    'type': UPDATE_SINGLE_SELECTION,
    'name': filter
  }
}

export const onactivitiesHover = (activitiesHover) => {
  return {
    'type': ON_ACTIVITIES_HOVER,
    'activitiesHover': activitiesHover
  }
}

export const onactivitiesHoverThunk = (activitiesHoverState) => {
  return (dispatch) => {
        return axios.get('/api/parks/getparksbyactivity', {
        params: {
          activitiesHoverState: activitiesHoverState
        }
      })
      .then((res) => {
        dispatch(onactivitiesHover(res.data))
      })
      .catch(err => console.log(err))
  }
}