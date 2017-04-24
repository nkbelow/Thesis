import React from 'react';
import PaymentWidget from './PaymentWidget.jsx';
import {connect} from 'react-redux'
import {orderQuantityIncrease, orderQuantityDecrease, orderQuantityManualEntry, checkoutOrderCompletion} from '../actions/checkout.js'

class Checkout extends React.Component {
  
  render () {
    return (
      <div>
        <div>Annual Pass - $ {this.props.ticketPrice} </div>
        <button onClick={() => {this.props.orderQuantityDecrease(this.props.ticketQuantity)}} >-</button>
        <input id="qty" value={this.props.ticketQuantity} />
        <button onClick={() => {this.props.orderQuantityIncrease(this.props.ticketQuantity)}}>+</button>
        <text>Total: $ {this.props.checkoutTotal}</text>
        <PaymentWidget />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      ticketQuantity: state.checkout.ticketQuantity,
      checkoutTotal: state.checkout.checkoutTotal,
      ticketPrice: state.checkout.ticketPrice,
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    orderQuantityIncrease: (ticketQuantity) => dispatch(orderQuantityIncrease(ticketQuantity)),
    orderQuantityDecrease: (ticketQuantity) => dispatch(orderQuantityDecrease(ticketQuantity)),
    orderQuantityManualEntry: (ticketQuantity) => dispatch(orderQuantityManualEntry(ticketQuantity)),
    checkoutOrderCompletion: (totalAmount) => dispatch(checkoutOrderCompletion()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);