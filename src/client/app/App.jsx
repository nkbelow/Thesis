import React from 'react';
import FilterRow from './FilterRow.jsx'
import ParkList from './ParkList.jsx';
import ParkView from './ParkView.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import AddToCart from './AddToCart.jsx';
import SearchBar from './SearchBar.jsx';
import MapView from './Map.jsx';
import axios from 'axios';
import SidebarFilters from './sidebarFilters.jsx';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, List, Accordion } from 'semantic-ui-react';
import { getAllParks, getFilteredParks, } from '../actions/getParks.js';
import { onactivitiesHoverThunk } from '../actions/filters.js';
import { connect } from 'react-redux';
import { showFilters } from '../actions/actions.js';
import NavBar from './NavBar.jsx';
import {getDistance} from '../actions/getDistance.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    this.props.getAllParks(this.props.filters)
    this.props.getFilteredParks(this.props.filters)
    this.props.onactivitiesHoverThunk(this.props.activitiesHover)
    this.props.getDistance()
  }

  render () {
    return (
    	<div>
        <NavBar parks={this.props.parks} />
        <Button onClick={() => {this.props.toggleVisibility(this.props.visible)}}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={!this.props.visible} icon='labeled' vertical inverted>
            <SidebarFilters visible={!this.props.visible} />
          </Sidebar>
          <Sidebar.Pusher>
          <Segment basic>
            <MapView />
            <ParkList />
          </Segment> 
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      filters: state.updateFiltersSelections.activities,
      allParks: state.getParksReducer.allParks,
      filteredParks: state.getParksReducer.filteredParks,
      remainingParks: state.getParksReducer.remainingParks,
      visible: state.visibleFilter.visible,
      activitiesHover: state.updateFiltersSelections.activitiesHover,
      distance: state.getDistance.distance
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllParks: (filters) => dispatch(getAllParks(filters)),
        getFilteredParks: (filters) => dispatch(getFilteredParks(filters)),
        toggleVisibility: (visible) => dispatch(showFilters(visible)),
        onactivitiesHoverThunk: (activitiesHoverState) => dispatch(onactivitiesHoverThunk(activitiesHoverState)),
        getDistance: () => dispatch(getDistance())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

