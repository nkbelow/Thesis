import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {activePark} from '../actions/actions.js'


class ParkItem extends React.Component {
  constructor(props) {
    super(props);
    this.imageStyle = {
      width:'310px',
      height:'160px',
      position: 'relative',
      'boxShadow': '2px 2px 2px 1px rgba(0, 0, 0, 0.8)',
      'margin-left': '5px',
      'margin-top': '5px'
    }
    this.textStyle = {
      position: 'absolute',
      zIndex: '100',
      width:'200px',
      height:'100px',
      top:'1px',
      left: '22px',
      'fontFamily':'Arial',
      'fontWeight':'bold',
      color: 'white',
      'padding-top': '0px',
      'margin-top': '15px',
      'margin-left': '5px',
      'textShadow': '-1px 0 #000000,0 1px #000000,1px 0 #000000,0 -1px #000000'
    }
    this.containerStyle = {
      position:'static',
      'paddingLeft':'5px',
      'paddingTop':'5px',
      'margin-left': '5px'
    }
  }

  render() {
    return(
      <div className='parkitem' >
        <Link to={`park/${this.props.park.parkcode}/`} onMouseEnter = {this.props.setActivePark.bind(this, this.props.park)} onMouseLeave = {this.props.setActivePark.bind(this, null)} >
          <img style={this.imageStyle} src={'https://res.cloudinary.com/djzaih6fz/image/upload/' + this.props.park.parkcode + '.jpg'} />
          <h2 style={this.textStyle}>{this.props.park.name}</h2>
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

