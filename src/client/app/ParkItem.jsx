import React from 'react';
import { Link } from 'react-router-dom'

class ParkItem extends React.Component {
  constructor(props) {
    super(props);
    this.imageStyle = {
      width:'400px',
      height:'200px',
      zIndex:'-100',
      position: 'relative',
      'box-shadow': '2px 2px 2px 1px rgba(0, 0, 0, 0.8)'
    }
    this.textStyle = {
      position: 'absolute',
      zIndex: '100',
      width:'300px',
      height:'150px',
      top:'7px',
      left: '22px',
      'font-family':'Arial',
      'font-weight':'bold',
      color: 'white',
      'text-shadow': '-1px 0 #000000,0 1px #000000,1px 0 #000000,0 -1px #000000'
    }
    this.containerStyle = {
      position:'relative',
      'padding-left':'10px',
      'padding-top':'10px'
    }
  }

  render() {
    console.log(this.props.parkcode)
    return(
      <div style={this.containerStyle}>
        <Link to={`park/${this.props.park.parkcode}/`}>
          <img style={this.imageStyle} src={'https://res.cloudinary.com/djzaih6fz/image/upload/' + this.props.park.parkcode + '.jpg'} />
          <h2 style={this.textStyle}>{this.props.park.name}</h2>
        </Link>
      </div>
    );
  }
}

export default ParkItem;

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