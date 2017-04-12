import React from 'react';
import axios from 'axios';
import ParkDetail from './ParkDetail.jsx';

class ParkView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {park: null};
  }

  componentDidMount(){
		axios.get('http://localhost:3000/api/park', {
		    params: {
		      parkcode: this.props.params.name
		    }
		  })
	    .then(res => this.setState({ park: res.data }))
	    .catch(err => console.log(err))
  }
  render() {

    return(
    	<div>
    		{ this.state.park !== null && <ParkDetail park={this.state.park} /> }
    	</div>
    );
  }
}

export default ParkView;