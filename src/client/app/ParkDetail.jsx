import React from 'react';
import axios from 'axios';
import ParkMapView from './singlePageMapView.js';

class ParkDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
      <ParkMapView lat={this.props.park.latitude} lon={this.props.park.longitude} />
        <h1 className='parkname'>{this.props.park.name}</h1>
        <h3>{this.props.park.description}</h3>
        <ol>
        {this.props.activities.map((activity, i) => {
          return <li key={i}>{activity.activity}</li> 
        })
      }
      </ol>
      </div>
    );
  }
}

export default ParkDetail;