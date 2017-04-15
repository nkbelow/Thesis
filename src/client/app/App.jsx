import React from 'react';
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

  }

componentDidMount() {
  axios
    .get('/api/parks')
    .then(res => this.setState({ parks: res.data,
                                 filteredParks: res.data,
                                 activePark: res.data[res.data.length-3] }))
    .catch(err => console.log(err))
}

// setActivePark (park) {
//   this.setState = {
//     activePark: park
//   }
// }

  render () {
    return (
    	<div>

    		<h1>Nimble Newts Project </h1>
        {this.state.parks !== null && <SearchBar parks={this.state.parks}/>}
        <MapView parks={this.state.parks}/>
    		{this.state.parks !== null && <ParkList parks={this.state.parks} />}
    	</div>
    );
  }
}

export default App;

