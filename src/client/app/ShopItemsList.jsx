import React from 'react';
import { connect } from 'react-redux';
import {orderQuantityIncrease, orderQuantityDecrease, addToCart} from '../actions/payments.js';

const ShopItemsList = (props) => {
  return (
    <div>
      <div>{props.item.toUpperCase()} - $ {props[props.item + 'Price']} </div>
      <button onClick={() => {props.orderQuantityDecrease(props[props.item + 'Quantity'], props.item)}} >-</button>
      <input id="qty" value={props[props.item + 'Quantity']} />
      <button onClick={() => {props.orderQuantityIncrease(props[props.item + 'Quantity'], props.item)}}>+</button>
      <button id="AddToCart" onClick={() => {props.addToCart(props[props.item + 'Quantity'], props.item)}} >Add To Cart</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    dayPassPrice: state.payments.dayPassPrice,
    dayPassQuantity: state.payments.dayPassQuantity,
    annualPassPrice: state.payments.annualPassPrice,
    annualPassQuantity: state.payments.annualPassQuantity,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    orderQuantityIncrease: (quantity, item) => dispatch(orderQuantityIncrease(quantity, item)),
    orderQuantityDecrease: (quantity, item) => dispatch(orderQuantityDecrease(quantity, item)),
    addToCart: (quantity, item) => dispatch(addToCart(quantity, item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemsList);