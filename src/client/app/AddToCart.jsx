import React from 'react';
import PaymentWidget from './PaymentWidget.jsx';
import {connect} from 'react-redux';
import {orderQuantityIncrease, orderQuantityDecrease, addToCart} from '../actions/payments.js';

class AddToCart extends React.Component {
  
  render () {
    return (
      <div>
        <div>Annual Pass - $ {this.props.annualPassPrice} </div>
        <button onClick={() => {this.props.orderQuantityDecrease(this.props.quantity, 'annualPass')}} >-</button>
        <input id="qty" value={this.props.quantity} />
        <button onClick={() => {this.props.orderQuantityIncrease(this.props.quantity, 'annualPass')}}>+</button>
        <button id="AddToCart" onClick={() => {this.props.addToCart(this.props.quantity, 'annualPass')}} >Add To Cart</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      quantity: state.payments.annualPassQuantity,
      shoppingCartTotal: state.payments.shoppingCartTotal,
      annualPassPrice: state.payments.annualPassPrice,
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    orderQuantityIncrease: (quantity, item) => dispatch(orderQuantityIncrease(quantity, item)),
    orderQuantityDecrease: (quantity, item) => dispatch(orderQuantityDecrease(quantity, item)),
    addToCart: (quantity, item) => dispatch(addToCart(quantity, item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);