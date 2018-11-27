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
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, List, Accordion, Divider, Grid } from 'semantic-ui-react';
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
        <Sidebar.Pushable >
          <Sidebar animation='push' visible={!this.props.visible} direction='top' inverted>
            <SidebarFilters />  
          </Sidebar>
          <Sidebar.Pusher>
          <div>
            <MapView  />
            <Divider fitted />
            <ParkList />
          </div> 
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

