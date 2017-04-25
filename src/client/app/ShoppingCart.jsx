import React from 'react';
import {connect} from 'react-redux';
import PaymentWidget from './PaymentWidget.jsx';
import { getShoppingCartState } from '../actions/payments.js';

class ShoppingCart extends React.Component {

  calculateShoppingCartTotal (shoppingCartState) {
    let totalAmount = 0;

    for (let key in shoppingCartState) {
      console.log(totalAmount, 'totalAmount')
      totalAmount = totalAmount + shoppingCartState[key] * this.props.annualPassPrice
    }
    return totalAmount
  }

  render () {
    return (
      <div>
        <div>{this.props.shoppingCartState.annualPass} {this.props.shoppingCartState.annualPass > 1 ? 'annual passes' : 'annual pass'}</div>
        <text>Total: $ {this.calculateShoppingCartTotal(this.props.shoppingCartState)}</text>
        <PaymentWidget />
      </div>      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ticketQuantity: state.payments.ticketQuantity,
    shoppingCartState: state.payments.shoppingCartState,
    annualPassPrice: state.payments.annualPassPrice
  }
}

export default connect(mapStateToProps)(ShoppingCart);

