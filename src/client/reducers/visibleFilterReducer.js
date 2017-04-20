export const visibleFilter = (state = true, action) => {
  switch(action.type) {
    case 'IS_VISIBLE':
    return !state;

    default: 
    return state;
  }
}