export const getCampgrounds = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CAMPGROUNDS':
    return Object.assign({}, state, 
      {campgrounds: [action.campgrounds]
    })

  default: 
    return state
  }
};