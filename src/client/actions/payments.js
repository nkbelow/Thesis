export const ORDER_QUANTITY_INCREASE = 'ORDER_QUANTITY_INCREASE';
export const ORDER_QUANTITY_DECREASE = 'ORDER_QUANTITY_DECREASE';

export const SHOPPING_CART_ORDER_START = 'SHOPPING_CART_ORDER_START';
export const SHOPPING_CART_ORDER_PENDING = 'SHOPPING_CART_ORDER_PENDING';
export const SHOPPING_CART_QUANTITY_INCREASE = 'SHOPPING_CART_QUANTITY_INCREASE';
export const SHOPPING_CART_QUANTITY_DECREASE = 'SHOPPING_CART_QUANTITY_DECREASE';
export const SHOPPING_CART_ORDER_COMPLETED = 'SHOPPING_CART_ORDER_COMPLETED';

export const ADD_TO_CART = 'ADD_TO_CART'

// dispatch to toggle the selection
export const orderQuantityIncrease = (quantity, item) => {
  return {
    'type': ORDER_QUANTITY_INCREASE,
    'quantity': quantity,
    'item': item
  }
}

export const orderQuantityDecrease = (quantity, item) => {
  return {
    'type': ORDER_QUANTITY_DECREASE,
    'quantity': quantity,
    'item': item
  }
}
  
// export const shoppingCartOrderStart = () => {
//   return {
//     'type': SHOPPING_CART_ORDER_START,
//     'status': 'start'
//   }
// }

// export const shoppingCartPending = () => {
//   return {
//     'type': SHOPPING_CART_ORDER_PENDING,
//     'status': 'pending'
//   }
// }

export const shoppingCartQuantityIncrease = (quantity, item) => {
  return {
    'type': SHOPPING_CART_QUANTITY_INCREASE,
    'item': item,
    'shoppingCartQuantity': quantity,
  }
}


export const shoppingCartQuantityDecrease = (quantity, item) => {
  return {
    'type': SHOPPING_CART_QUANTITY_DECREASE,
    'item': item,
    'shoppingCartQuantity': quantity,
  }
}

export const shoppingCartCompletion = () => {
  return {
    'type': SHOPPING_CART_ORDER_COMPLETED,
    'status': 'completed'
  }
}

export const addToCart = (quantity, item) => {
  return {
    'type': ADD_TO_CART,
    'quantity': quantity,
    'item': item
  }
}

export const getShoppingCartState = (quantity, item) => {
  return {
    'type': ADD_TO_CART,
    'quantity': quantity,
    'item': item
  }
}
