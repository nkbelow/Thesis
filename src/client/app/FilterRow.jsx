import React from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { onFilterClick } from '../actions/filters.js';
import { getParks } from '../actions/getParks.js';
import Promise from 'bluebird';

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
    return new Promise(function(resolve, reject) {
      resolve()
    }).then(function(){
      context.props.updateFilters(context.props.filter.name)
    }).then(function(){
      context.props.getParks(context.props.filters)
    })
  }

  render () {
    return (
      <List.Item style={this.props.isSelected ? this.selectedStyle : this.deSelectedStyle} onClick={this.handleOnClick.bind(this)}>{this.props.name}</List.Item> 
    )
  }
}

const mapStateToProps = (state) => {
    return {
      filters: state.updateFiltersSelections
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilters: (filter) => dispatch(onFilterClick(filter)),
        getParks: (filters) => dispatch(getParks(filters))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterRow)
