import React from 'react';
import axios from 'axios';
import ParkDetail from './ParkDetail.jsx';

class ParkView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {park: null, activities: null};
  }

  componentDidMount(){
    axios.get('/api/park', {
        params: {
          parkcode: this.props.match.params.code
        }
      })
      .then(res => {
        console.log(res)
        this.setState({ park: res.data[1][0], activities: res.data[0]});
        })
      .catch(err => console.log(err))
  }
  render() {
    return(
    	<div>
    		{ this.state.park !== null && <ParkDetail park={this.state.park} activities={this.state.activities} /> }
    	</div>
    );
  }
}

export default ParkView;