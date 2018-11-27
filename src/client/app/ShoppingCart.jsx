import React from 'react';
import {connect} from 'react-redux';
import PaymentWidget from './PaymentWidget.jsx';
import axios from 'axios';
import { orderQuantityIncrease, orderQuantityDecrease, addToCart, reloadCart, calculateShoppingCartTotal } from '../actions/payments.js';

class ShoppingCart extends React.Component {

  componentDidMount () {
    let context = this;
    axios.get('/api/shoppingcart')
        .then((res) => {
          if  (!res.data) {
            return
          }

          context.props.reloadCart(res.data)
        })
        .catch(err => console.log(err))
  }

  componentDidUpdate () {
    let context = this;
    axios.post('/api/shoppingcart', {
          params: context.props.shoppingCartState
        })
        .then((res) => {
          console.log(res)
        })
        .catch(err => dispatch(parksRequestFailure(filters)))
    this.calculateShoppingCartTotal(this.props.shoppingCartState)
  }

  calculateShoppingCartTotal (shoppingCartState) {
    let totalAmount = 0;

    for (let key in shoppingCartState) {
      totalAmount = totalAmount + shoppingCartState[key] * this.props[key + 'Price']
    }
    this.props.calculateShoppingCartTotal(totalAmount)
  }

  render () {
    return (
      <div>
        <div>{this.props.shoppingCartState.dayPass} {this.props.shoppingCartState.dayPass > 1 ? 'Day Passes' : 'Day Pass'}</div>
        <div>{this.props.shoppingCartState.annualPass} {this.props.shoppingCartState.annualPass > 1 ? 'Annual Passes' : 'Annual Pass'}</div>
        <text>Total: ${this.props.shoppingCartTotal}</text>
        <PaymentWidget />
      </div>      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ticketQuantity: state.payments.ticketQuantity,
    shoppingCartState: state.payments.shoppingCartState,
    annualPassPrice: state.payments.annualPassPrice,
    dayPassPrice: state.payments.dayPassPrice,
    shoppingCartTotal: state.payments.shoppingCartTotal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    orderQuantityIncrease: (quantity, item) => dispatch(orderQuantityIncrease(quantity, item)),
    orderQuantityDecrease: (quantity, item) => dispatch(orderQuantityDecrease(quantity, item)),
    addToCart: (quantity, item) => dispatch(addToCart(quantity, item)),
    reloadCart: (shoppingcartcookie) => dispatch(reloadCart(shoppingcartcookie)),
    calculateShoppingCartTotal: (shoppingCartTotal) => dispatch(calculateShoppingCartTotal(shoppingCartTotal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

