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
    this.selectedStyle = {
      'fontFamily':'Helvetica Neue',
      'color': 'teal',
    };
    this.deSelectedStyle = {
      'fontFamily':'Helvetica Neue',
      'color': 'blue'
    }
  }

  handleOnClick () {
    const context = this;
    if (this.props.name !== 'Most Visited' && this.props.name !== 'Least Visited') {
      new Promise(function(resolve, reject) {
        resolve()
      }).then(function(){
          context.props.onCombinationFilterClick(context.props.filter.name);
      }).then(function(){
        context.props.getFilteredParks(context.props.filters);
      })
    } else {
        context.props.onSingleFilterClick(context.props.filter.name);
    }
  }

  render () {
    return (
      <List.Item style={this.props.isSelected ? this.selectedStyle : this.deSelectedStyle} onClick={this.handleOnClick.bind(this)} onMouseEnter={this.props.setActiveParks.bind(this, this.props.activitiesHover[this.props.filter.name])} onMouseLeave={this.props.setActiveParks.bind(this, null)}>{this.props.name} </List.Item> 
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.updateFiltersSelections.activities
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
