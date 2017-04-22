import React from 'react';
import FilterRow from './FilterRow.jsx'
import ParkList from './ParkList.jsx';
import ParkView from './ParkView.jsx';
import SearchBar from './SearchBar.jsx';
import MapView from './Map.jsx';
import axios from 'axios';
import SidebarFilters from './sidebarFilters.jsx';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, List, Accordion } from 'semantic-ui-react';
import { getParks } from '../actions/getParks.js';
import { connect } from 'react-redux';
import {showFilters} from '../actions/actions.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    this.props.getParks(this.props.filters)
  }

  render () {
    return (
    	<div>
        <Button onClick={() => {this.props.toggleVisibility(this.props.visible)}}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={!this.props.visible} icon='labeled' vertical inverted>
            <SidebarFilters visible={!this.props.visible} />
          </Sidebar>
          <Sidebar.Pusher>
          <Segment basic>
            <h1> Nimble Newts Project </h1>
            {this.props.parks !== null && <SearchBar parks={this.props.parks}/>}
            <MapView parks={this.props.parks}/>
            {this.props.parks !== null && <ParkList parks={this.props.parks}/>}
          </Segment> 
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      filters: state.updateFiltersSelections,
      parks: state.getParksReducer.parks,
      visible: state.visibleFilter.visible
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getParks: (filters) => dispatch(getParks(filters)),
        toggleVisibility: (visible) => dispatch(showFilters(visible))

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

