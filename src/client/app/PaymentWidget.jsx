import React from 'react';
import axios from 'axios';

class PaymentWidget extends React.Component {
  
  componentDidMount () {
    var handler = StripeCheckout.configure({
      key: 'pk_test_v8fGa5OlY3D6QSIKd3ii9q6g',
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      billingAddress: true,
      zipCode: true,
      name: 'Demo Site',
      description: '2 widgets',
      amount: 2000,
      token: function(token) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
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
            amount: 2000

          }
        }

        axios(axiosConfig).then( function(response) {
          console.log(response)
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
      <button id="customButton">Purchase</button>
    </div>
    )
  }
}

export default PaymentWidget;