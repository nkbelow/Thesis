export const getHistoricalData = (state = {}, action) => {
  switch (action.type) {
    case 'HISTORICAL_DATA':
    return Object.assign({}, state, 
      {historicalData: action.historicalData
    })
    default: 
      return state
  }
}