export const setActiveParks = (state = {} , action) => {
  switch (action.type) {	
    case 'SET_ACTIVE_PARKS':
    return Object.assign({}, state, 
      {parks: action.parks
    })

  default: 
    return state
  }
};