import React, { Component } from 'react'
import { Input, Menu, Segment, Label, Modal, Icon, Container, Header, Button} from 'semantic-ui-react'
import SearchBar from './SearchBar.jsx'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {getDistance} from '../actions/getDistance.js';
import ShoppingCart from './ShoppingCart.jsx'
import { showFilters } from '../actions/actions.js';
import AddToCart from './AddToCart.jsx'

class NavBar extends Component {

  componentDidMount(){
    this.props.getDistance()
  }

  render() {
    
    return (
      <div style={{'margin-bottom':0}}>
        <Menu>
          <Menu.Item name='logo'>
            <Header as='h3'>
              <Icon name='compass' />
              <Header.Content>
                Park Bound
              </Header.Content>
            </Header>
          </Menu.Item>
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
              { this.props.visible===false && <Button style={{'background-color':'white', 'margin-bottom': '2px',  'margin-right': '5px', 'padding':10, height:'30px', width: '50px'}} onClick={() => {this.props.toggleVisibility(this.props.visible)}}><Icon flipped='vertically' name='angle double up' size='big'/></Button> }
              { this.props.visible===true && <Button style={{'background-color':'white', 'margin-bottom': '10px',  'margin-right': '5px', 'padding':10, height:'30px', width: '50px'}} onClick={() => {this.props.toggleVisibility(this.props.visible)}}><Icon name='angle double up' size='big'/></Button> }
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
      distance: state.getDistance.distance,
      visible: state.visibleFilter.visible
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDistance: () => dispatch(getDistance()),
    toggleVisibility: (visible) => dispatch(showFilters(visible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);