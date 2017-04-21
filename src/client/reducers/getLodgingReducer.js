export const getLodging = (state = {}, action) => {
  switch(action.type) {
    case 'GET_LODGING':
    return Object.assign({}, state, 
      {lodging: action.lodging})
    
    default: 
    return state;
  }
}