import React from 'react';
import ParkList from './ParkList.jsx';
import ParkView from './ParkView.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {parks: null};
  }

componentDidMount() {
  axios
    .get('http://localhost:3000/api/parks')
    .then(res => this.setState({ parks: res.data }))
    .catch(err => console.log(err))
}

  render () {
    return (
    	<div>
    		<h1>Nimble Newts Project </h1>
    		{this.state.parks !== null && <ParkList parks={this.state.parks}/>}
    	</div>
    );
  }
}

export default App;

