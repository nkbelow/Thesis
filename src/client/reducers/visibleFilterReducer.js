export const visibleFilter = (state = {visible: false}, action) => {
  switch(action.type) {
    case 'IS_VISIBLE':
    return Object.assign({}, state, {
      visible: !action.visible
    })
    default: 
    return state;
  }
}
