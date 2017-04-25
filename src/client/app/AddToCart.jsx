import React from 'react';
import ShopItemsList from './ShopItemsList.jsx';
import {connect} from 'react-redux';


class AddToCart extends React.Component {
  render () {
    return (
      <div>
      {Object.keys(this.props.shoppingCartState).map((item) => <ShopItemsList item={item} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingCartState: state.payments.shoppingCartState,
  } 
}

export default connect(mapStateToProps)(AddToCart);