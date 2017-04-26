import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {activePark} from '../actions/actions.js'


class ParkItem extends React.Component {
  constructor(props) {
    super(props);
    this.imageStyle = {
      width:'400px',
      height:'200px',
      zIndex:'-100',
      position: 'relative',
      'boxShadow': '2px 2px 2px 1px rgba(0, 0, 0, 0.8)'
    }
    this.textStyle = {
      position: 'absolute',
      zIndex: '100',
      width:'300px',
      height:'150px',
      top:'7px',
      left: '22px',
      'fontFamily':'Arial',
      'fontWeight':'bold',
      color: 'white',
      'textShadow': '-1px 0 #000000,0 1px #000000,1px 0 #000000,0 -1px #000000'
    }
    this.containerStyle = {
      position:'relative',
      'paddingLeft':'10px',
      'paddingTop':'10px'
    }
  }

  render() {
    return(
      <div >
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
>>>>>>> enlarge markers on hover
