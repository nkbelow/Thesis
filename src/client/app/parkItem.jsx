import React from 'react';

class ParkItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h3>{this.props.park.name}</h3>
      </div>
    );
  }
}

export default ParkItem;