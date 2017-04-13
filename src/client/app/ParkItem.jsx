import React from 'react';
import { Link } from 'react-router-dom'

class ParkItem extends React.Component {
  constructor(props) {
    super(props);
  }

  // goToDestination(e) {
  //   console.log('clicked on park');
  //   this.props.history.push(`/park/${this.props.park.parkCode}`)
  // }
  render() {
    return(
      <div>
        <Link to={`park/${this.props.park.parkCode}/`}>
          <h2>{this.props.park.name}</h2>
        </Link>
      </div>
    );
  }
}

export default ParkItem;

ParkItem.contextTypes = {
  router: React.PropTypes.object
}

/*

      <div>
        <div onClick={(e) => this.goToDestination(e)}>
          <h3>{this.props.park.name}</h3>
        </div>
      </div>

*/