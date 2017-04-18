import React from 'react';
import {List} from 'semantic-ui-react';

class FilterRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedState: false
    }
    this.selectedStyle = {
      'font-family':'Helvetica Neue',
      'color': 'teal',
      'font-weight': 'bold'
    };
  //   this.deSelectedStyle = {
  //     'font-family':'Helvetica Neue',
  //     'color': 'blue'

  //   }
  // }
}

  handleClick () {
    this.setState({selectedState: !this.state.selectedState}, function() {
      this.props.onClick(this.props.category, this.state.selectedState);
    });
  }

  render () {
    return (
      <List.Item style={this.selectedStyle} onClick={this.handleClick.bind(this)}>{this.props.category}</List.Item> 
    )
  }
}

export default FilterRow;