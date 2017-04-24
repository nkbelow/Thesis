export const ORDER_QUANTITY_INCREASE = 'ORDER_QUANTITY_INCREASE';
export const ORDER_QUANTITY_DECREASE = 'ORDER_QUANTITY_DECREASE';
export const ORDER_QUANTITY_MANUAL_ENTRY = 'ORDER_QUANTITY_MANUAL_ENTRY';

export const CHECKOUT_ORDER_START = 'CHECKOUT_ORDER_START';
export const CHECKOUT_ORDER_PENDING = 'CHECKOUT_ORDER_PENDING';
export const CHECKOUT_ORDER_COMPLETED = 'CHECKOUT_ORDER_COMPLETED';

export const ORDER_AMOUNT_UPDATE = 'ORDER_AMOUNT_UPDATE';

// dispatch to toggle the selection
export const orderQuantityIncrease = (ticketQuantity) => {
  return {
    'type': ORDER_QUANTITY_INCREASE,
    'ticketQuantity': ticketQuantity,
    'change': 'increase'
  }
}

export const orderQuantityDecrease = (ticketQuantity) => {
  return {
    'type': ORDER_QUANTITY_DECREASE,
    'ticketQuantity': ticketQuantity,
    'change': 'decrease'
  }
}

export const orderQuantityManualEntry = (ticketQuantity) => {
  return {
    'type': ORDER_QUANTITY_MANUAL_ENTRY,
    'ticketQuantity': ticketQuantity,
    'change': 'manual'
  }
}
  
export const checkoutOrderStart = () => {
  return {
    'type': CHECKOUT_ORDER_START,
    'status': 'start'
  }
}

export const checkoutOrderPending = () => {
  return {
    'type': CHECKOUT_ORDER_PENDING,
    'status': 'pending'
  }
}

export const checkoutOrderCompletion = () => {
  return {
    'type': CHECKOUT_ORDER_COMPLETED,
    'status': 'completed'
  }
}

export const orderAmountUpdate = () => {
  
}

