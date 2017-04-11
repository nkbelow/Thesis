import React from 'react';
import ReactDOM from 'react-dom';
// import Try from './try.jsx';
import ParkList from './parkList.jsx';
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
    		<ParkList />
    	</div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));