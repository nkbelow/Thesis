import React, { Component } from 'react'
import { Input, Menu, Segment, Label, Modal, Icon, Container, Header, Button} from 'semantic-ui-react'
import SearchBar from './SearchBar.jsx'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {getDistance} from '../actions/getDistance.js';
import ShoppingCart from './ShoppingCart.jsx'
import AddToCart from './AddToCart.jsx'

class NavBar extends Component {

  componentDidMount(){
    this.props.getDistance()
  }

  render() {
    
    return (
      <div>
        <Menu>
          <Menu.Item name='logo'>Park Bound</Menu.Item>
          <Menu.Item  as={Link} to='/' name='home'>Home</Menu.Item>
          <Menu.Item disabled={this.props.distance > 0} href="/auth/fitbit" > 
            <Label color={(this.props.distance !== '') ?  'green' : 'red'} > 
              {(this.props.distance !== '') ?  'Fitbit Connected' : 'Fitbit Not Connected'}
            </Label>
          </Menu.Item>
          <Menu.Menu position='right'>
          <Modal size='small' className='modal' trigger={<Menu.Item>Buy National Park Passes<Icon name='cart' size='big'/></Menu.Item>}>
          <Header as='h1' textAlign='center'>Shopping Cart</Header>
            <Modal.Content>
            <AddToCart />
           <ShoppingCart />
            </Modal.Content>
            </Modal>
            <Menu.Item >
              <SearchBar />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      distance: state.getDistance.distance
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDistance: () => dispatch(getDistance())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);