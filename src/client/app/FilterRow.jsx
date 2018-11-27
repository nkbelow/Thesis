import React from 'react'
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { onCombinationFilterClick, onSingleFilterClick } from '../actions/filters.js'
import { getFilteredParks } from '../actions/getParks.js'
import { setActiveParks } from '../actions/actions.js'
import Promise from 'bluebird'

class FilterRow extends React.Component {
  constructor (props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick (e) {
    e.target.classList.toggle('selected')
    if (this.props.name !== 'Most Visited' && this.props.name !== 'Least Visited') {
      new Promise(function(resolve, reject) {
        resolve()
      }.bind(this))
      .then(function(){
          this.props.onCombinationFilterClick(this.props.filter.name);
      }.bind(this))
      .then(function(){
        this.props.getFilteredParks(this.props.filters);
      }.bind(this))
    } else {
        this.props.onSingleFilterClick(this.props.filter.name);
    }
  }

  render () {
    return (
      <div className='filterElement' divided={false} onClick={this.handleOnClick.bind(this)} onMouseEnter={this.props.setActiveParks.bind(this, this.props.activitiesHover[(this.props.filter.name).toUpperCase()])} onMouseLeave={this.props.setActiveParks.bind(this, null)}>{this.props.name} </div> 
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.updateFiltersSelections.activities,
    activitiesHover: state.updateFiltersSelections.activitiesHover
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
      onCombinationFilterClick: (filter) => dispatch(onCombinationFilterClick(filter)),
      onSingleFilterClick: (filter) => dispatch(onSingleFilterClick(filter)),
      getFilteredParks: (filters) => dispatch(getFilteredParks(filters)),
      setActiveParks: (parks) => dispatch(setActiveParks(parks))
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(FilterRow)
