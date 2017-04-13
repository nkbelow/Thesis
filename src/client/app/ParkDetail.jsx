import React from 'react';
import axios from 'axios';

class ParkDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1>{this.props.park.name}</h1>
        <h3>{this.props.park.description}</h3>
      </div>
    );
  }
}

export default ParkDetail;