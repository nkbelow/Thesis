import React from 'react';
import ParkItem from './ParkItem.jsx';
import TrailList from './TrailList.jsx';

class PersonalizedTrailList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    console.log('distance', this.props.distance);
    console.log('trails', this.props.trails);
  }

  render() {
    return (
      <div>
        <h2> Based off your distance average from past week, here are recs </h2>
        <TrailList trails={this.props.trails} />
      </div>
    );
  }
}

export default PersonalizedTrailList;
