import React from 'react';
import ParkItem from './ParkItem.jsx';
import Masonry from 'react-masonry-component';

class ParkList extends React.Component {
  constructor(props) {
    super(props)
    this.style = {
        backgroundColor:'',
        width:'100%',
        margin:'0', 
        padding:'0'
    };
  }

  render() {
    return (
          <Masonry style={this.style}>
          {this.props.parks.map((park) => (<ParkItem key={park.parkcode} park={park} />))}
          </Masonry>
    );
  }
}

export default ParkList;
