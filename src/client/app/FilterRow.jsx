import React from 'react';

class FilterRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedState: false
    }
    this.selectedStyle = {
      'font-family':'Helvetica Neue',
      'fontSize': '20',
      'color': 'teal',
    };
    this.deSelectedStyle = {
      'font-family':'Helvetica Neue',
      'fontSize': '20',
      'color': 'blue'
    }
  }

  handleClick () {
    this.setState({selectedState: !this.state.selectedState}, function() {
      this.props.onClick(this.props.category, this.state.selectedState);
    });
  }

  render () {
    return (
      <tr>
      { this.state.selectedState === true && <td style={this.selectedStyle} onClick={this.handleClick.bind(this)}>{this.props.category}</td> }
      { this.state.selectedState === false && <td style={this.deSelectedStyle} onClick={this.handleClick.bind(this)}>{this.props.category}</td> }
      </tr>
    )
  }
}

export default FilterRow;