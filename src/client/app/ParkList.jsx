import React from 'react';
import { connect } from 'react-redux';
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

    let singleSelectionArray = [];

    this.props.filters.filter(function(filter){
      if (filter.isSelected === true) {
        singleSelectionArray.push(filter.name)
      }
    })

    let filteredParks = this.props.parks

    if (singleSelectionArray[0] === 'Most Visited') {
      filteredParks = this.props.parks.sort(function(a, b) {
        return b.visitors - a.visitors
      })
    } else if(singleSelectionArray[0] === 'Least Visited') {
      filteredParks = this.props.parks.sort(function(a, b) {
        return a.visitors - b.visitors
      })
    }

    return (
          <Masonry style={this.style}>
          {filteredParks.map((park) => (<ParkItem key={park.parkcode} park={park} />))}
          </Masonry>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        filters: state.updateFiltersSelections.popularity,
        parks: state.getParksReducer.parks,
    };
};

export default connect(mapStateToProps)(ParkList)