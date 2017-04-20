export const getTenDayForecast = (state = {}, action) => {
  switch (action.type) {
    case 'GET_TEN_DAY_FORECAST':
    return Object.assign({}, state,
    {tenDayForecast: action.tenDayForecast
    })
    
    default: 
      return state;
  }
}