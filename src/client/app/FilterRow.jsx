import React from 'react';

class FilterRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedState: true
    }
  }

  handleClick () {
    this.props.onClick(this.props.category, this.state.selectedState)
    this.setState({selectedState: !this.state.selectedState})
  }

  render () {
    return (
      <tr>
        <td onClick={this.handleClick.bind(this)}>{this.props.category}</td>    
      </tr>
    )
  }
}

export default FilterRow;