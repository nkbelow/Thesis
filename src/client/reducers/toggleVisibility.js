export const toggleVisibility = (state = {campgrounds: true, lodging: true} , action) => {
  switch (action.type) {	
    case 'TOGGLE_CAMPGROUNDS':
    return Object.assign({}, state, 
      {campgrounds: !state.campgrounds
    })
    case 'TOGGLE_LODGING':
    return Object.assign({}, state, 
      {lodging: !state.lodging
    })

  default: 
    return state
  }
};