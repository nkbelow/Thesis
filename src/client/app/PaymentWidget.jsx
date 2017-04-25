import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { shoppingCartCompletion, paymentSuccessfullySent } from '../actions/payments.js';

class PaymentWidget extends React.Component {
  componentDidMount () {
    const context = this;
    let handler = StripeCheckout.configure({
      key: 'pk_test_v8fGa5OlY3D6QSIKd3ii9q6g',
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      billingAddress: true,
      zipCode: true,
      name: 'Demo Site',
      description: 'Annual All-Park Pass',
      amount: this.props.shoppingCartTotal,
      token: function(token) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        const axiosConfig = {
          method: 'POST',
          url: '/charge',
          data: {
            stripeToken: token.id,
            stripeEmail: token.email,
            card: token.card,
            client_ip: token.client_ip,
            created: token.created,
            livemode: token.livemode,
            type: token.type,
            used: token.used,
            amount: context.props.shoppingCartTotal * 100,
            shoppingCartState: context.props.shoppingCartState

          }
        }

        axios(axiosConfig).then( function(response) {
          console.log('this.props.paymentSuccessfullySent(response);')
          context.props.paymentSuccessfullySent(response);
        })
      }
    });

    document.getElementById('customButton').addEventListener('click', function(e) {
      // Open Checkout with further options:
      handler.open();
      e.preventDefault();
    });

    // Close Checkout on page navigation:
    window.addEventListener('popstate', function() {
      handler.close();
    });
  }

  render () {
    return (
    <div>
      <button id="customButton" >Purchase</button>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      shoppingCartTotal: state.payments.shoppingCartTotal,
      shoppingCartState: state.payments.shoppingCartState
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    paymentSuccessfullySent: () => dispatch(paymentSuccessfullySent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentWidget);