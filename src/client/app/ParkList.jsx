import React from 'react';
import { connect } from 'react-redux';
import { getRemainingParks } from '../actions/getParks.js'
import ParkItem from './ParkItem.jsx';
import Masonry from 'react-masonry-component';

class ParkList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate () {
    this.props.getRemainingParks(this.props.filteredParks, this.props.allParks)
  }

  render() {

    let singleSelectionArray = [];

    this.props.filters.filter(function(filter){
      if (filter.isSelected === true) {
        singleSelectionArray.push(filter.name)
      }
    })

    let filteredParks = this.props.filteredParks

    if (singleSelectionArray[0] === 'Most Visited') {
      filteredParks = this.props.filteredParks.sort(function(a, b) {
        return b.visitors - a.visitors
      })
    } else if(singleSelectionArray[0] === 'Least Visited') {
      filteredParks = this.props.filteredParks.sort(function(a, b) {
        return a.visitors - b.visitors
      })
    }

    return (
          <Masonry className='parkList'>
          {filteredParks.map((park) => (<ParkItem key={park.parkcode} park={park} />))}
          </Masonry>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        filters: state.updateFiltersSelections.popularity,
        filteredParks: state.getParksReducer.filteredParks,
        allParks: state.getParksReducer.allParks,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
      getRemainingParks: (filteredParks, allParks) => dispatch(getRemainingParks(filteredParks, allParks))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ParkList)
