import React from 'react';
import ParkList from './ParkList.jsx';
import ParkView from './ParkView.jsx';
import SearchBar from './SearchBar.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {parks: null};
  }

componentDidMount() {
  axios
    .get('/api/parks')
    .then(res => this.setState({ parks: res.data }))
    .catch(err => console.log(err))
}

  render () {
    return (
    	<div>
    		<h1>Nimble Newts Project </h1>
        {this.state.parks !== null && <SearchBar parks={this.state.parks}/>}
    		{this.state.parks !== null && <ParkList parks={this.state.parks}/>}
    	</div>
    );
  }
}

export default App;

