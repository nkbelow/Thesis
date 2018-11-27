export const getTrails = (state = {}, action) => {
  switch (action.type) {
    case 'GET_TRAILS': 
    return Object.assign({}, state, 
      {trails: action.trails
      })
    default: 
      return state;
  }
}