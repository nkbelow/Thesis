export const getDistance = (state = {}, action) => {
  switch(action.type) {
    case 'GET_DISTANCE':
    return Object.assign({}, state, 
      {distance: action.distance})
    default: 
    return state;
  }
}