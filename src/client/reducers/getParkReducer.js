export const individualPark = (state = {}, action) => {
  switch(action.type) {
    case 'GET_INDIVIDUAL_PARK_AND_ACTIVITIES':
    console.log(action, 'thsi is action')
      return Object.assign({}, state, 
        { individualPark: action.individualPark
        })
      default: 
        return state;
  }
}

