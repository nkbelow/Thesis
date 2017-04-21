import React from 'react';
import FilterRow from './FilterRow.jsx'
import ParkList from './ParkList.jsx';
import ParkView from './ParkView.jsx';
import SearchBar from './SearchBar.jsx';
import MapView from './Map.jsx';
import axios from 'axios';
import SidebarFilters from './sidebarFilters.jsx';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, List, Accordion } from 'semantic-ui-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: null,
      filteredParks: null,
      visible: false
      

      };

      // this.setActivePark = this.setActivePark.bind(this)
      this.filteredActivitiesArray = [];

  }

  componentDidMount() {
    axios
      .get('/api/parks')
      .then(res => this.setState({ parks: res.data,
                                   filteredParks: res.data,
                                   activePark: res.data[res.data.length-3] }))
      .catch(err => console.log(err))
  }

  handleFilterActivities (filter, selectedState) {
    return new Promise((resolve, reject) => {
      if (selectedState) {
        this.filteredActivitiesArray.push(filter);
        resolve(this.filteredActivitiesArray)
      } else if (!selectedState) {
        const index = this.filteredActivitiesArray.indexOf(filter);
        this.filteredActivitiesArray.splice(index, 1);
        resolve(this.filteredActivitiesArray)
      }
    }).then(() => {
      if (this.filteredActivitiesArray.length === 0) {
        this.setState({filteredParks: this.state.parks})
      } else {
        axios.get('/filterparks', {
          params: {
            filteredActivities: this.filteredActivitiesArray
          }
        }).then((response) => {
          this.setState({filteredParks: response.data})
        }).catch((error) => {
          console.log(error);
        })
      }
    })
  }
  toggleVisibility() {
    this.setState({ visible: !this.state.visible })
  }


  render () {
    return (
    	<div>
         <Button onClick={this.toggleVisibility.bind(this)}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={!this.state.visible} icon='labeled' vertical inverted>
          <SidebarFilters handleFilterActivities={this.handleFilterActivities.bind(this)} visible={!this.state.visible} />
          </Sidebar>
          <Sidebar.Pusher>
          <Segment basic>
          <h1>Nimble Newts Project </h1>
        {this.state.parks !== null && <SearchBar parks={this.state.parks}/>}
        <MapView parks={this.state.filteredParks}/>
        {this.state.parks !== null && <ParkList parks={this.state.filteredParks}/>}
          </Segment> 
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>

    );
  }
}

export default App;

