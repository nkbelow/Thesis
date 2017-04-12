import React from 'react';

class ParkItem extends React.Component {
  constructor(props) {
    super(props);
  }

  goToDestination(e) {
    this.context.router.transitionTo(`/park/${this.props.park.parkCode}`)
  }

  render() {
    return(
      <div>
        <div onClick={(e) => this.goToDestination(e)}>
          <h3>{this.props.park.name}</h3>
        </div>
      </div>
    );
  }
}

export default ParkItem;

ParkItem.contextTypes = {
  router: React.PropTypes.object
}