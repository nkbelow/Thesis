import { ORDER_QUANTITY_INCREASE, ORDER_QUANTITY_DECREASE, ORDER_QUANTITY_MANUAL_ENTRY, CHECKOUT_ORDER_START, CHECKOUT_ORDER_PENDING, CHECKOUT_ORDER_COMPLETED } from '../actions/checkout.js'

const initialState = {
  ticketQuantity: 0,
  ticketPrice: 80,
  checkoutTotal: 0,

}

export const checkout = (state=initialState, action) => {
  switch (action.type) {
    case ORDER_QUANTITY_INCREASE:
      return Object.assign({}, state, {
        ticketQuantity: action.ticketQuantity + 1,
        checkoutTotal: (action.ticketQuantity + 1) * state.ticketPrice
      }) 
    case ORDER_QUANTITY_DECREASE:
      return Object.assign({}, state, {
        ticketQuantity: (!!(action.ticketQuantity - 1) ? action.ticketQuantity : (action.ticketQuantity - 1)),
        checkoutTotal: (!!(action.ticketQuantity - 1) ? state.checkoutTotal: ((action.ticketQuantity - 1) * state.ticketPrice))

      }) 
    case ORDER_QUANTITY_MANUAL_ENTRY:
      return Object.assign({}, state, {
        ticketQuantity: action.ticketQuantity,
        checkoutTotal: action.ticketQuantity * state.ticketPrice
      }) 
    // case CHECKOUT_ORDER_START:
    // case CHECKOUT_ORDER_PENDING:
    // case CHECKOUT_ORDER_COMPLETED:
    default:
      return state
  }
}