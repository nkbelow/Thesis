export const setActivePark = (state = {} , action) => {
  switch (action.type) {	
    case 'SET_ACTIVE_PARK':
    return Object.assign({}, state, 
      {park: action.park
    })

  default: 
    return state
  }
};