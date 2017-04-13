import React from 'react';
import ParkItem from './ParkItem.jsx';
import Masonry from 'react-masonry-component';
import Cloudinary from '../../server/handlers/cloudinary.js'

class ParkList extends React.Component {
  constructor(props) {
    super(props)
    this.parks = this.props.parks;
    this.style = {
        backgroundColor: 'tomato'
    };
  }

  render() {
    return (
          <Masonry style={this.style}>
          {this.parks.map((park) => (<ParkItem key={park.name} park={park} />))}
          </Masonry>
    );
  }
}

export default ParkList;
