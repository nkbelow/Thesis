import React from 'react';
import Filter from './Filter.jsx';
import ParkList from './ParkList.jsx';
import ParkView from './ParkView.jsx';
import SearchBar from './SearchBar.jsx';
import MapView from './MapBox.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: null,
      filteredParks: null
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

  handleFilterSelection (filter, selectedState) {
    return new Promise((resolve, reject) => {
      console.log(selectedState)
      if (selectedState) {
        this.filteredActivitiesArray.push(filter);
      } else if (!selectedState) {
        const index = this.filteredActivitiesArray.indexOf(filter);
        this.filteredActivitiesArray.splice(index);
        if (this.state.filteredParks.length === 0) {
          this.setState({filteredParks: this.state.parks})
        }
      }
      resolve(this.setState({filteredActivities: this.filteredActivitiesArray}))
    }).then(() => {
      axios.get('/filterparks', {
        params: {
          filteredActivities: this.state.filteredActivities
        }
      }).then((response) => {
        this.setState({filteredParks: response.data})
      }).catch((error) => {
        console.log(error);
      })
    })
  }


  render () {
    return (
    	<div>

    		<h1>Nimble Newts Project </h1>
        {this.state.parks !== null && <SearchBar parks={this.state.parks}/>}
        <Filter handleClick={this.handleFilterSelection.bind(this)} />
        <MapView parks={this.state.filteredParks}/>
    		{this.state.parks !== null && <ParkList parks={this.state.filteredParks}/>}
    	</div>
    );
  }
}

export default App;

