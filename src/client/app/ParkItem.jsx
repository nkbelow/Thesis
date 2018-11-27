import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {activePark} from '../actions/actions.js'


class ParkItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='parkitem' >
        <Link to={`park/${this.props.park.parkcode}/`} onMouseEnter = {this.props.setActivePark.bind(this, this.props.park)} onMouseLeave = {this.props.setActivePark.bind(this, null)} >
          <img className = 'parkImage' src={'https://res.cloudinary.com/djzaih6fz/image/upload/' + this.props.park.parkcode + '.jpg'} />
          <h2 className = 'parkHeader'>{this.props.park.name}</h2>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActivePark: (park) => { 
      dispatch(activePark(park)) }
  }
}

export default connect(null, mapDispatchToProps)(ParkItem);

  // goToDestination(e) {
  //   console.log('clicked on park');
  //   this.props.history.push(`/park/${this.props.park.parkCode}`)
  // }
// ParkItem.contextTypes = {
//   router: React.PropTypes.object
// }

/*

      <div>
        <div onClick={(e) => this.goToDestination(e)}>
          <h3>{this.props.park.name}</h3>
        </div>
      </div>

*/

