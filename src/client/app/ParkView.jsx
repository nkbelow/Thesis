import React from 'react';
import axios from 'axios';
import ParkDetail from './ParkDetail.jsx';

class ParkView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {park: null, activities: null, campgrounds: null, lodgings: null};
  }

  componentDidMount(){
    axios.get('/api/park', {
        params: {
          parkcode: this.props.match.params.code
        }
      })
      .then(res => {
        this.setState({ park: res.data[1][0], activities: res.data[0]});
        })
      .catch(err => console.log(err))

  }

    componentDidUpdate() {
      if (this.state.park && this.state.campgrounds === null) {
      axios.get('/api/campgrounds', {
        params: {
          parkId: this.state.park.id
          }
        })
      .then(res => {
        this.setState({campgrounds: res.data})

      })
      .catch(err=> console.err(err))
    }
  }
  
  render() {
    return(
    	<div>
    		{ this.state.park !== null && <ParkDetail park={this.state.park} activities={this.state.activities} campgrounds={this.state.campgrounds} /> }
    	</div>
    );
  }
}

export default ParkView;